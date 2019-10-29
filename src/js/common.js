export const elements = {
	mainContent		: document.querySelector('#content'),
	mainNav 		: document.querySelector('.main-nav'),
	frameworkNav 	: document.querySelector('.framework-nav'),
	dynamicWrapper  : document.querySelector('#dynamic-content'),
	dynamicContent 	: document.querySelector('#dynamic-content .content'),
	dynamicClose 	: document.querySelector('#dynamic-content #close'),
	homePage 		: document.querySelector('#home-page'),
	contactPage 	: document.querySelector('#contact-page'),
	background      : document.querySelector('.background'),
	homePageContent : document.querySelector('.background .content'),
	closeButton     : document.querySelector('#close'),
	mainBody		: document.querySelector('body'),
	twinkle			: document.querySelector('.twinkle')

};

export const views = {
	MAIN_VIEW     : 'main',
	HOME_VIEW     : 'home',
	ART_VIEW      : 'art',
	FULL_ART_VIEW : 'fullart',
	CONTACT_VIEW  : 'contact',
	RESUME_VIEW   : 'resume',
	PORTFOLIO_VIEW : 'portfolio'
};

export const times = {
	SLOW     : 1500,
	MEDIUM   : 1000,
	FAST     : 500
};

export const noThumbnail = [
	'eddie',
	'man'
];

export const fadeElement = (el, type, callback) => {
	// Clearing the content can fail if the containers doesn't exist
	try {
		if (type === "in") {
			el.classList.remove("fade-out", "fade-out-init");
			el.classList.add("fade-in");
			return;
		}
		el.classList.remove("fade-in");
		el.classList.add('fade-out');
		// setTimeout(clearContent, 1000, elements.homePageContent, calback);
		// setTimeout(clearContent, 1000, elements.dynamicContent, calback);	
	} catch (err) {
		// Do nothing
	}
	
};

export const setElementToLoaded = (el, set) => {
	if (set) {
		el.classList.add('loaded');	
		return;
	} 
	el.classList.remove('loaded');	
};

export const activateTwinkle = () => {
	document.querySelector('.twinkle').classList.add('loaded');

    setTimeout(function () {
    	document.querySelector('.twinkle').classList.remove('loaded');
    	document.querySelector('.twinkle').classList.add('visible');
    }, 500);
};