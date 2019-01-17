import React from 'react'
import {shallow} from 'enzyme'
import NicolasCage from '../NicolasCage';

describe("NicolasCage", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NicolasCage />)
  })

  it('Wants to steal the Declaration of Independence', () => {
    expect(wrapper.text()).toEqual("I'm going to steal the Declaration of Independence")
  })
})
