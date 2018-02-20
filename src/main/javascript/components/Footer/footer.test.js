import React from 'react'
import Footer from './footer'
import renderer from 'react-test-renderer'

describe('the Footer component', () => {
  it('should correctly render a footer element', () => {
    const component = renderer.create(
      <Footer />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
