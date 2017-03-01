import expect from 'expect.js';
import GithubClient from './GithubClient';
import sinon from 'sinon';
import request from 'superagent';


describe('GithubClient', () => {
  const req = request.Request.prototype;

  beforeEach(() => {
    sinon.stub(req, 'end');
  });

  afterEach(() => {
    req.end.restore();
  });

  it('should have the GithHub API Url', () => {
    const githubClient = new GithubClient();
    expect(githubClient.API_URL).to.equal('https://api.github.com');
  });

  it('should find user accounts', () => {
    const usersFromGithub = '{ \
      "items": [ \
      {"login": "some-username", "avatar_url": "some-url"}, \
      {"login": "another-username", "avatar_url": "another-url"} \
    ]}';
    const expectedUsers = [
      {'login':'some-username','avatar_url': 'some-url'},
      {'login':'another-username','avatar_url': 'another-url'}
    ]
    req.end.yields(null, {'text': usersFromGithub});

    const callback = sinon.spy();
    const githubClient = new GithubClient();

    const userAccounts = githubClient.findAccounts('example-account', callback);

    expect(callback.calledWith(expectedUsers)).to.be(true);

  });
});