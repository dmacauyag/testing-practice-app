import Header from './Header'
import React from 'react'
import renderer from 'react-test-renderer'

describe('the Header component', () => {
  it('should correctly render a header element', () => {
    const component = renderer.create(
      <Header />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
