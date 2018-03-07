import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="search-bar">
          <TextField
            id="search-bar__text-field"
            hintText="Search for venues"
            value = {this.state.searchTerm}
            onChange = {event => this.handleInputChange(event)}
            onKeyPress = {event => this.handleKeyPress(event)}
          />
        </div>
      </MuiThemeProvider>
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
