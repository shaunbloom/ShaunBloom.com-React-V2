import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactText from './ContactText.jsx';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('ContactText Component', function () {
	let component;

	beforeEach(() => {
		component = shallow(<ContactText />);
	});

	it('renders without problems', function () {
		var ContactTextHtml = component.find("#contact-page");
		expect(ContactTextHtml.length).toBe(1);
	});
});