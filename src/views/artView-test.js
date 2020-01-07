import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtView from './ArtView.jsx';
import expect from 'expect';
import artDataJson from '../js/models/art-data.js';

Enzyme.configure({ adapter: new Adapter() });

describe('ArtView Component', function () {
	let component,
		artData       	  = artDataJson,
		artData1      	  = artData && artData[1],
		artData10      	  = artData && artData[10],
		thumbnailName     = artData1 && artData1.name,
		thumbnailName10   = artData1 && artData10.name,
		originalThumbPath = artData1 && artData1.originalThumbPath,
		imagePath 		  = artData1 && artData1.imagePath,
		purchase 		  = artData1 && artData1.purchase,
		year     		  = artData1 && artData1.year,
		etsyLink 		  = artData1 && artData1.smallpaper;
		

	beforeEach(() => {
		component = shallow(<ArtView />);
	});

	it('Renders without problems: ', function () {
		var ArtViewHTML = component.find("#art-page");
		expect(ArtViewHTML.length).toBe(1);
	});

	it('Renders correct # of thumbnails: ', function () {
		var ArtThumbnails = component.find(".art-full");
		expect(ArtThumbnails.length).toBe(artData.length);
	});

	it('Renders purachase link if option is available: ', function () {
		var PurchaseLink = component.find(`.art-full.${thumbnailName} .purchase-link`);
		expect(PurchaseLink.length).toBe(1);
	});

	it('Renders correct purachase link Etsy url: ', function () {
		var PurchaseLink = component.find(`.art-full.${thumbnailName} .purchase-link`);
		expect(PurchaseLink.props().href).toBe(etsyLink);
	});

	it('Renders no purchase link if the options is not avaialble: ', function () {
		var PurchaseLink = component.find(`.art-full.${thumbnailName10} .purchase-link`);
		expect(PurchaseLink.length).toBe(0);
	});

	it('Renders correct footer text: ', function () {
		var FooterText = component.find(`.art-full.${thumbnailName} footer`);
		expect(FooterText.text()).toBe(`${thumbnailName.charAt(0).toUpperCase()}${thumbnailName.slice(1)} '${year}`);
	});
});