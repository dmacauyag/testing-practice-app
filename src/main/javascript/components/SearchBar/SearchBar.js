import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange = {event => this.handleInputChange(event.target.value)}
        />
      </div>
    )
  }

  handleInputChange(searchTerm) {
    this.setState({
      searchTerm
    })

    this.props.onSearchTermChange(searchTerm)
  }
}

export default SearchBar
