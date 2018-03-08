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
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <VenueListDetail
        venue={mockVenue}
      />
    )
  })

  it('should correctly render the VenueListDetail component', () => {
    expect(wrapper).toBeDefined()
  })
})
