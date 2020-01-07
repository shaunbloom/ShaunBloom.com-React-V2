import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Twinkle from './Twinkle.jsx';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('Twinkle Component', function () {
	let component;

	beforeEach(() => {
		component = shallow(<Twinkle />);
	});

	it('renders without problems', function () {
		var TwinkleHTML = component.find(".twinkle");
		expect(TwinkleHTML.length).toBe(1);
	});
});