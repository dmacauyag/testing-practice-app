import { shallow } from 'enzyme'
import SearchBar from './SearchBar'
import React from 'react'
import renderer from 'react-test-renderer'

describe('the SearchBar component', () => {
  it('should correctly render the SearchBar component', () => {
    const component = renderer.create(
      <SearchBar />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('handleInputChange method', () => {
    const wrapper = shallow(<SearchBar />)

    it('should exist as a function', () => {
      expect(wrapper.instance().handleInputChange).toBeDefined()
      expect(typeof wrapper.instance().handleInputChange).toBe('function')
    })

    it('should correctly set the searchTerm state on input change', () => {
      const mockValue = {
        target: {value: 'test change'}
      }
      wrapper.find('input').simulate('change', mockValue)
      expect(wrapper.instance().state.searchTerm).toBe(mockValue.target.value)
    })
  })

  describe('handleKeyPress method', () => {
    const onSubmitSearchMock = jest.fn()
    const wrapper = shallow(<SearchBar onSubmitSearch={onSubmitSearchMock}/>)

    it('should exist as a function', () => {
      expect(wrapper.instance().handleKeyPress).toBeDefined()
      expect(typeof wrapper.instance().handleKeyPress).toBe('function')
    })

    it('should not call onSubmitSearch if Enter key is not pressed', () => {
      wrapper.find('input').simulate('keypress', {key: 'a'})
      expect(onSubmitSearchMock).not.toHaveBeenCalled()
    })

    it('should call onSubmitSearch if Enter key is pressed', () => {
      wrapper.find('input').simulate('keypress', {key: 'Enter'})
      expect(onSubmitSearchMock).toHaveBeenCalled()
    })
  })
})
