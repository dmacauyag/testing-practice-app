import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.searchTerm}
          onChange = {event => this.handleInputChange(event)}
          onKeyPress = {event => this.handleKeyPress(event)}
        />
      </div>
    )
  }

  handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.onSubmitSearch(this.state.searchTerm)
    }
  }
}

export default SearchBar
