import Autosuggest from 'react-autosuggest';
import React from 'react';
import theme from './theme.css';

const getSuggestionValue = suggestion => suggestion.username;

function renderSuggestion(suggestion, { query }) {
  const imageStyle = {
    backgroundImage: `url(${suggestion.avatar_url})`,
    backgroundSize: '56px'
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
    this.shouldRenderSuggestions = this.shouldRenderSuggestions.bind(this);
  }

  handleUpdateInput(event, { newValue }) {
    this.setState({ value: newValue});
  };

  onSuggestionsFetchRequested({ value }){
    this.props.findAccounts(value, this.updateAutocomplete);
  };

  shouldRenderSuggestions(value) {
    return value.trim().length > 3;
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
        shouldRenderSuggestions={this.shouldRenderSuggestions}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

GithubField.propTypes = {
  findAccounts: React.PropTypes.func.isRequired
};

export default GithubField;
