# Github-Field

React component to auto suggest GitHub usernames while typing.


## Usage
```
npm install react-github-field
```

> NOTE Requests to get users from GitHub need an authorization token and it should _never_ be available on the front end. Because of that you must have a server which sends the request to GitHub API to get the users. Your findAccounts function should send requests to the server and it should get the users from GitHub.

```js
import GithubField from 'react-github-field';
import request from 'superagent';

<GithubField findAccounts={findAccounts}/>


/**
 * Send GET request to your server to get users from GitHub
 */
function findAccounts(userName, callback) {
  request
    .get(`/github-users?q=${userName}`)
    .accept('application/json')
    .end((err, data) => {
      if(err)
        throw err;
      callback(JSON.parse(data.text)['items']);
    });
}
```

## Props

| Prop         |  Type    |  Required   | Description |
|--------------|----------|-------------|-------------|
| findAccounts | function | required    | Function to get users from GitHub API. This function has two arguments one is the username to search and the other one is a callback. Please take a look to the examples. |


