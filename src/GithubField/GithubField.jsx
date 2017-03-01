import Autosuggest from 'react-autosuggest';
import React from 'react';
import GithubClient from '../GithubClient';
import theme from './theme.css';

const getSuggestionValue = suggestion => suggestion.username;

function renderSuggestion(suggestion, { query }) {
  console.log(query);
  const imageStyle = {
    backgroundImage: `url(${suggestion.avatar_url})`,
    backgroundSize: '56'
  }

  return (
    <span className={ `${theme.suggestionContent}` } style={imageStyle}>
      <span className={ theme.name }> { suggestion.username } </span>
    </span>
  );
}


class GithubField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
    };
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.updateAutocomplete = this.updateAutocomplete.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
  }

  handleUpdateInput(event, { newValue }) {
    this.setState({ value: newValue});
  };

  onSuggestionsFetchRequested({ value }){
    const githubClient = new GithubClient();
    githubClient.findAccounts(value, this.updateAutocomplete);
  };

  updateAutocomplete(items) {
    items = items.map((item) => {
      return {'username': item.login, 'avatar_url': item.avatar_url};
    });

    this.setState({
      suggestions: items
    });
  }

  onSuggestionsClearRequested(){
    this.setState({
      suggestions: []
    });
  };

  render () {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Type a GitHub username',
      value,
      onChange: this.handleUpdateInput
    };

    return (
      <Autosuggest
        theme={theme}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default GithubField;
