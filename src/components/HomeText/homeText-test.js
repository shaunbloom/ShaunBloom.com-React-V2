import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomeText from './HomeText.jsx';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('HomeText Component', function () {
	let component;

	beforeEach(() => {
		component = shallow(<HomeText />);
	});

	it('renders without problems', function () {
		var HomeTextHtml = component.find("#home-page");
		expect(HomeTextHtml.length).toBe(1);
	});
});