import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FullArtView from './FullArtView.jsx';
import artDataJson from '../js/models/art-data.js';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('FullArtView Component', function () {
	let component,
		artData       	  = artDataJson,
		artData0      	  = artData && artData[0],
		thumbnailName     = artData0 && artData0.name,
		originalThumbPath = artData0 && artData.originalThumbPath,
		imagePath 		  = artData0 && artData.imagePath;

	beforeEach(() => {
		component = shallow(<FullArtView thumbnailName={thumbnailName}/>);
	});

	it('Renders without problems: ', function () {
		var FullArtViewHTML = component.find("#full-art-page");
		expect(FullArtViewHTML.length).toBe(1);
	});

	it('Renders correct article container with ID: ', function () {
		var ArticleContainerHTML = component.find(`#${thumbnailName}`);
		expect(ArticleContainerHTML.length).toBe(1);
	});

	it('Renders correct image src: ', function () {
		var OriginalImgHTML = component.find(`#${thumbnailName} img`);
		expect(OriginalImgHTML.src).toBe(imagePath);
	});

	it('Renders correct thumbnail src: ', function () {
		var OriginalThumbHTML = component.find(`#original-thumb img`);
		expect(OriginalThumbHTML.src).toBe(originalThumbPath);
	});
});