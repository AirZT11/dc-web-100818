import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import NationalArchives from '../NationalArchives';
import NicolasCage from '../NicolasCage';

describe("NationalArchives", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NationalArchives/>)
  })

  it("Renders successfully", () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it("Has an initial state of state.documents, which contains the Declaration of Independence", () => {
    expect(wrapper.instance().state.documents).toEqual('Declaration of Independence')
  })

  it("Renders <NicolasCage />", () => {
    expect(wrapper.containsMatchingElement(<NicolasCage />)).toBe(true)
  })

  it("Can have the Declaration of Independence stolen", () => {
    let deepWrapper = mount(<NationalArchives />)
    expect(deepWrapper.instance().state.documents).toEqual('Declaration of Independence')
    deepWrapper.find('.steal').simulate('click')
    expect(deepWrapper.instance().state.documents).toBeNull()
  })
})
