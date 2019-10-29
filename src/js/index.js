import React from 'react';
import ReactDOM from 'react-dom';
import MainView from 'MainView';
import ImagePreloader from 'image-preloader';
import imgPreloadData from 'preloadData';
import { elements, fadeElement, setElementToLoaded, activateTwinkle } from 'commonJS';

// Get image peload data
const preloadData = imgPreloadData();

// Get new image preloader
const preloader = new ImagePreloader();

// Start preloading all images
preloader.preload(preloadData)
.then(function(status) {
    activateTwinkle();
});

ReactDOM.render(<MainView />, document.querySelector("#root"));

const init = () => {
	// 1) Fade main body in
	fadeElement(document.querySelector('body'), 'in');

	// 2) Fade in top border of content frame and scroll down
	setElementToLoaded(document.querySelector('#content'), true);

	// 3) Load home page background
    setTimeout(setElementToLoaded, 1000, document.querySelector('.background'), true);

    // 4) Load Navs into view
    setTimeout(() => {
    	document.querySelector('#content').classList.remove('overflow-hidden');
    	setElementToLoaded(document.querySelector('.framework-nav'), true);
    	setElementToLoaded(document.querySelector('.main-nav'), true);
    }, 2000);
}

setTimeout(init, 1000)