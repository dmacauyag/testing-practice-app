import { shallow } from 'enzyme'
import VenueListItem from './VenueListItem'
import React from 'react'
import renderer from 'react-test-renderer'

describe('the VenueListItem component', () => {
  const mockVenues = {
    name: 'test name',
    id: 1234
  }
  const onVenueSelectMock =jest.fn()

  it('should correctly render the VenueListItem component', () => {
    const component = renderer.create(
      <VenueListItem
        venue={mockVenues}
        key={1234}
        onVenueSelect={onVenueSelectMock}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('VenueListItem onclick', () => {
    const wrapper = shallow(
      <VenueListItem
        venue={mockVenues}
        key={1234}
        onVenueSelect={onVenueSelectMock}
      />
    )

    it('should call the onVenueSelectMock function when an li is clicked', () => {
      wrapper.find('li').simulate('click')
      expect(onVenueSelectMock).toHaveBeenCalledTimes(1)
    })
  })
})
