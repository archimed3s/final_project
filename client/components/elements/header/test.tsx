import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';

describe('Header logo must be an svg', () => {
	it('renders logo', () => {
		const wrapper = shallow(<Header/>);
		expect(wrapper.find('.team').text()).toEqual('Some Text');
	});
});
