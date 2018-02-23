import { shallow } from 'enzyme'
import App from './App'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import React from 'react'
import ReactDOM from 'react-dom'

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  describe('getFourSquareAPIVenues method', () => {
    const wrapper = shallow(<App />)

    it('should exist as a function', () => {
      expect(wrapper.instance().getFourSquareAPIVenues).toBeDefined()
      expect(typeof wrapper.instance().getFourSquareAPIVenues).toBe('function')
    })

    it('returns data when getFourSquareAPIVenues is called', () => {
      let mockAxios = new MockAdapter(axios)
      const mockData = {
        response: {
          groups: [
            { items: {} }
          ]
        }
      }

      mockAxios.onGet('https://api.foursquare.com/v2/venues/explore').reply(200, mockData)

      wrapper.instance().getFourSquareAPIVenues('test').then(response => {
        expect(response.data).toEqual(mockData)
      })
    })
  })
})
