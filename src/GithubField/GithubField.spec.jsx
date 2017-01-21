import {shallow} from 'enzyme';
import expect from 'expect.js';
import React from 'react';
import GithubField from './GithubField';


describe('GithubField Component', () => {
  it('should show an autocomplete field', () => {
    const wrapper = shallow(<GithubField />);
    expect(wrapper.find('AutoComplete')).to.have.length(1);
  });
});