// var React = require('react');
// var TestUtils = require('react-test-utils');
// var expect = require('expect');
// var ContactText = require('./ContactText.jsx');

// import Adapter from 'enzyme-adapter-react-16';
// import shallow from 'enzyme';
// import configure from 'enzyme';

// configure({adapter: new Adapter()});

// describe('root', function () {

// 	beforeEach(() => {
// 		const ContactText = shallow(<ContactText />);
// 	});

// 	it('renders without problems', function () {
// 		var ContactTextHtml = ContactText.find("#contact-page")
// 		expect(ContactTextHtml).toExist();
// 	});
// });

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
		var ContactTextHtml = component.find("#contact-page")
		expect(ContactTextHtml.length).toBe(1);
	});
});