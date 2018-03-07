import { shallow } from 'enzyme'
import App from './App'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import React from 'react'
import ReactDOM from 'react-dom'

describe('App component', () => {
  const mockAxios = new MockAdapter(axios)
  const mockResponse = {
    response: {
      groups: [
        { items: {} }
      ],
      venue: {}
    }
  }
  const wrapper = shallow(<App />)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  describe('getFourSquareAPIVenues method', () => {

    mockAxios.onGet('https://api.foursquare.com/v2/venues/explore').reply(200, mockResponse)

    it('should exist as a function', () => {
      expect(wrapper.instance().getFourSquareAPIVenues).toBeDefined()
      expect(typeof wrapper.instance().getFourSquareAPIVenues).toBe('function')
    })

    it('returns data when getFourSquareAPIVenues is called', () => {
      wrapper.instance().getFourSquareAPIVenues('test').then(response => {
        expect(response.data).toEqual(mockResponse)
      })
    })

    it('should correctly set the venues and selectedVenue state after response is received', () => {
      wrapper.instance().getFourSquareAPIVenues('test')
      expect(wrapper.instance().state.selectedVenue).toEqual(null)
      expect(wrapper.instance().state.venues).toEqual(mockResponse.response.groups[0].items)
    })
  })

  describe('getFourSquareAPIVenueDetails method', () => {
    const setSelectedVenueStateSpy = jest.spyOn(wrapper.instance(), 'setSelectedVenueState')
    wrapper.update()

    mockAxios.onGet('https://api.foursquare.com/v2/venues/1234').reply(200, mockResponse)

    it('should exist as a function', () => {
      expect(wrapper.instance().getFourSquareAPIVenueDetails).toBeDefined()
      expect(typeof wrapper.instance().getFourSquareAPIVenueDetails).toBe('function')
    })

    it('returns data when getFourSquareAPIVenues is called', () => {
      wrapper.instance().getFourSquareAPIVenueDetails(1234).then(response => {
        expect(response.data).toEqual(mockResponse)
      })
    })

    it('should call the setSelectedVenueState method with the proper arguments after response is received', () => {
      wrapper.instance().getFourSquareAPIVenueDetails(1234)
      expect(setSelectedVenueStateSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('setSelectedVenueState method', () => {
    it('should exist as a function', () => {
      expect(wrapper.instance().setSelectedVenueState).toBeDefined()
      expect(typeof wrapper.instance().setSelectedVenueState).toBe('function')
    })

    it('should correctly set the selectedVenue state', () => {
      const mockVenue = {id: 1234, name: 'test venue'}

      wrapper.instance().setSelectedVenueState(mockVenue)
      expect(wrapper.instance().state.selectedVenue).toBe(mockVenue)
    })
  })

  describe('setBrowserLocation method', () => {
    it('should exist as a function', () => {
      expect(wrapper.instance().setBrowserLocation).toBeDefined()
      expect(typeof wrapper.instance().setBrowserLocation).toBe('function')
    })

    it('should call the getCurrentPosition method if geolocation is available', () => {
      const getCurrentPositionSpy = jest.spyOn(navigator.geolocation, 'getCurrentPosition')
      wrapper.instance().setBrowserLocation()
      expect(getCurrentPositionSpy).toHaveBeenCalled()
    })
  })
})
