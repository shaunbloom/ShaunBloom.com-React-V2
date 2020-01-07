import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FrameworkNav from './FrameworkNav.jsx';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('FrameworkNav Component', function () {
	let component;

	beforeEach(() => {
		component = shallow(<FrameworkNav />);
	});

	it('renders without problems', function () {
		var FrameworkNavHtml = component.find(".framework-nav");
		expect(FrameworkNavHtml.length).toBe(1);
	});
});