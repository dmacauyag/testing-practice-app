import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const mockGeolocation = {
  getCurrentPosition: jest.fn()
}

const mockConsole = {
  error: jest.fn()
}

global.navigator.geolocation = mockGeolocation
global.console = mockConsole
