import React from 'react' 
import { shallow, mount, render } from 'enzyme'
import DropDown from './DropDown.jsx'
import NavLink from '../NavLink/NavLink.jsx'


let nonEmptyItems = [{to:'one', name:'One'}, {to:'two', name:'Two'}, {to:'three', name:'Three'}];
let emptyItems = [];

describe('<DropDown>', () =>


	it('should render the correct number of items', () => {
		expect(shallow(<DropDown id="test" items={nonEmptyItems} />).find(NavLink).length).toBe(3)
	}),

	it('should be enabled if list of items is not empty', () => {
		expect(shallow(<DropDown id="test" items={nonEmptyItems} />).find('a.orange').length).toBe(1)
	}),

	it('should render empty list', () => {
		expect(shallow(<DropDown id="test" items={emptyItems} />).find(NavLink).length).toBe(0)
	}),

	it('should be disabled if list of items is empty', () => {
		expect(shallow(<DropDown id="test" items={emptyItems} />).find('a.grey').length).toBe(1)
	})
);

