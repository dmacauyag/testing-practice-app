import { shallow } from 'enzyme'
import VenuesList from '../../../../main/javascript/components/VenuesList/VenuesList'
import React from 'react'
import renderer from 'react-test-renderer'

describe('the VenuesList component', () => {
  const onVenueSelectMock = jest.fn()
  const setSelectedVenueStateMock = jest.fn()
  const mockVenues = [
    {
      venue: 'test venue',
      id: 12345,
      onVenueSelect: onVenueSelectMock
    }
  ]
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <VenuesList
        venues={mockVenues}
        onVenueSelect={setSelectedVenueStateMock}
      />
    )
  })

  it('should correctly render the VenuesList component', () => {
    expect(wrapper).toBeDefined()
  })
})
