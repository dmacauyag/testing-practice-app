import SearchBar from './SearchBar'
import React from 'react'
import renderer from 'react-test-renderer'

describe('the SearchBar component', () => {
  it('should correctly render the SearchBar component', () => {
    const component = renderer.create(
      <SearchBar />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
