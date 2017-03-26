import React from 'react';
import ReactDOM from 'react-dom';
import GithubField from '../lib/GithubField';
import request from 'superagent';

function findAccounts(userName, callback) {
  request
    .get(`https://api.github.com/search/users?q=${userName}`)
    // .set('Authorization', `token ${process.env.GITHUB_TOKEN}`)
    .accept('application/json')
    .end((err, data) => {
      if(err)
        throw err;
      callback(JSON.parse(data.text)['items']);
    });
}

function App() {
  return (<div>
            <GithubField findAccounts={findAccounts}/>
          </div>);
}


ReactDOM.render((<App />),document.getElementById('main'));
