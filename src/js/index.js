import React from 'react';
import ReactDOM from 'react-dom';
import MainView from 'MainView';
import ImagePreloader from 'image-preloader';
import imgPreloadData from 'preloadData';

// Get image peload data
const preloadData = imgPreloadData();

// Get new image preloader
const preloader = new ImagePreloader();

preloader.preload(preloadData)
.then(function(status) {
    console.log("Figure out what to do now that the images are laoded.");
});

ReactDOM.render(<MainView />, document.querySelector("#root"));