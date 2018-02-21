import React from 'react'
import Header from './header'
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
