import {shallow, mount} from 'enzyme';
import expect from 'expect.js';
import React from 'react';
import GithubField from '../src/GithubField';
import sinon from 'sinon';
import request from 'superagent';

describe('GithubField Component', () => {
  const req = request.Request.prototype;

  beforeEach(() => {
    sinon.stub(req, 'end');
  });

  afterEach(() => {
    req.end.restore();
  });

  it('should render an Autosuggest field', () => {
    const wrapper = shallow(<GithubField />);
    expect(wrapper.find('Autosuggest')).to.have.length(1);
  });

  it('should search for accounts when user write GitHub username', () => {
    const wrapper = mount(<GithubField />);
    const input = wrapper.find('input');
    const usersFromGithub = '{ \
      "items": [ \
      {"login": "nicolastrres1", "avatar_url": "some-url"} \
    ]}';
    const expectedUsers = [
      {'username':'nicolastrres1','avatar_url': 'some-url'}
    ]
    req.end.yields(null, {'text': usersFromGithub});

    input.simulate('change', {target: {value: 'nicolastrres'}});

    expect(wrapper.state('value')).to.be('nicolastrres');
    expect(wrapper.state('suggestions')).to.eql(expectedUsers);
  });
});