import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainNav from './MainNav.jsx';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('MainNav Component', function () {
	let component;

	beforeEach(() => {
		component = shallow(<MainNav />);
	});

	it('renders without problems', function () {
		var MainNavHTML = component.find(".main-nav");
		expect(MainNavHTML.length).toBe(1);
	});
});