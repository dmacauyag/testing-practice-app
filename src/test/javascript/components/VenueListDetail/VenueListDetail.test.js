import { shallow } from 'enzyme'
import VenueListDetail from '../../../../main/javascript/components/VenueListDetail/VenueListDetail'
import React from 'react'
import renderer from 'react-test-renderer'

describe('the VenueListDetail component', () => {
  const mockVenue = {
    location: { formattedAddress: ['test location'] },
    description: 'test description',
    bestPhoto: { prefix: 'test prefix', width: 100, height: 200, suffix: 'test suffix'},
    name: 'test name',
    url: 'test url'
  }
  const wrapper = shallow(
    <VenueListDetail
      venue={mockVenue}
    />
  )

  it('should correctly render the VenueListDetail component', () => {
    const component = renderer.create(
      <VenueListDetail
        venue={mockVenue}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
