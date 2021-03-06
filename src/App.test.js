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

    it('should correctly set the venues state after response is received', () => {
      wrapper.instance().getFourSquareAPIVenues('test')
      expect(wrapper.instance().state.venues).toEqual(mockResponse.response.groups[0].items)
    })

    it('should console error on a failed request', async () => {
      const consoleErrorSpy = jest.spyOn(global.console, 'error')
      mockAxios.onGet('https://api.foursquare.com/v2/venues/explore').networkError()

      await wrapper.instance().getFourSquareAPIVenues('test')
      expect(consoleErrorSpy).toHaveBeenCalled()
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

    it('should call the setSelectedVenueState method after response is received', () => {
      wrapper.instance().getFourSquareAPIVenueDetails(1234)
      expect(setSelectedVenueStateSpy).toHaveBeenCalledTimes(1)
    })

    it('should console error on a failed request', async () => {
      const consoleErrorSpy = jest.spyOn(global.console, 'error')
      mockAxios.onGet('https://api.foursquare.com/v2/venues/1234').networkError()

      await wrapper.instance().getFourSquareAPIVenueDetails(1234)
      expect(consoleErrorSpy).toHaveBeenCalled()
    })
  })

  describe('getFourSquareAPIRandomVenue method', () => {
    const getFourSquareAPIVenueDetailsSpy = jest.spyOn(wrapper.instance(), 'getFourSquareAPIVenueDetails')
    wrapper.update()

    mockAxios.onGet('https://api.foursquare.com/v2/venues/explore').reply(200, mockResponse)

    it('should exist as a function', () => {
      expect(wrapper.instance().getFourSquareAPIRandomVenue).toBeDefined()
      expect(typeof wrapper.instance().getFourSquareAPIRandomVenue).toBe('function')
    })

    it('should call the getFourSquareAPIVenueDetails method after response is received', () => {
      wrapper.instance().getFourSquareAPIRandomVenue()
      expect(getFourSquareAPIVenueDetailsSpy).toHaveBeenCalled()
    })
  })

  describe('handleVenueSelect method', () => {
    const getFourSquareAPIVenueDetailsSpy = jest.spyOn(wrapper.instance(), 'getFourSquareAPIVenueDetails')
    wrapper.update()

    it('should exist as a function', () => {
      expect(wrapper.instance().handleVenueSelect).toBeDefined()
      expect(typeof wrapper.instance().handleVenueSelect).toBe('function')
    })

    it('should initially set the selectedVenue state to null when called', () => {
      wrapper.instance().handleVenueSelect(1234)
      expect(wrapper.instance().state.selectedVenue).toBe(null)
    })

    it('should call getFourSquareAPIVenueDetailsSpy method with the correct venue id', () => {
      expect(getFourSquareAPIVenueDetailsSpy).toHaveBeenCalledWith(1234)
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
