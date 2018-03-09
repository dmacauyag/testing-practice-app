import { shallow } from 'enzyme'
import VenueListItem from '../../../../main/javascript/components/VenueListItem/VenueListItem'
import React from 'react'
import renderer from 'react-test-renderer'

describe('the VenueListItem component', () => {
  const mockVenues = {
    name: 'test name',
    id: 1234
  }
  const onVenueSelectMock =jest.fn()
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <VenueListItem
        venue={mockVenues}
        key={1234}
        onVenueSelect={onVenueSelectMock}
      />
    )
  })

  it('should correctly render the VenueListItem component', () => {
    expect(wrapper).toBeDefined()
  })

  describe('VenueListItem onclick', () => {
    it('should call the onVenueSelectMock function when an li is clicked', () => {
      wrapper.find('.venues-list__item').simulate('click')
      expect(onVenueSelectMock).toHaveBeenCalledTimes(1)
    })
  })
})
