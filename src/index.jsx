import React from 'react';
import GithubField from './GithubField';
import {render} from 'react-dom';

const App = () => {
  return (<div>
          <h1> Hello </h1>
          <GithubField />
        </div>);
}

render(<App />, document.getElementById('main'));