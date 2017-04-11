import React from 'react';
import ReactDOM from 'react-dom';
import GithubField from '../src/GithubField';
import request from 'superagent';

function findAccounts(userName, callback) {
  request
    .get(`https://api.github.com/search/users?q=${userName}`)
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
