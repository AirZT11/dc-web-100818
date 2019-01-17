import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from '../App';
import NationalArchives from '../NationalArchives';

describe("Basic Jest testing", () => {
    it("adds two and two together and equals 4", () => {
      expect(2 + 2).toEqual(4)
    })

    it("adds two and two together and is not null", () => {
      expect(2 + 2).not.toBeNull()
    })
})

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  it("Renders successfully", () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it("Renders a NationalArchives component", () => {
    expect(wrapper.containsMatchingElement(<NationalArchives />)).toEqual(true);
  })
})
