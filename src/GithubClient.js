import request from 'superagent';

export default class GithubClient {
  constructor() {
    this.API_URL = 'https://api.github.com';
  }

  findAccounts(userName, callback) {
    request
      .get(`${this.API_URL}/search/users?q=${userName}`)
      .accept('application/json')
      .end((err, data) => {
        if(err)
          throw err;
        callback(JSON.parse(data.text)['items']);
      });
  }
}
