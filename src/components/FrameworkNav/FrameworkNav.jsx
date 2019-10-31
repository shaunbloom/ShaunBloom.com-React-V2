import React from 'react';

 class FrameworkNav extends React.Component {

 	render () {
 		return (
 			<nav className="framework-nav">
		    	<ul>
		            <li><a href="http://www.shaunbloom.com" class="fw-link" data-framework="jquery" title="Original site built with JQuery in '12">Jquery '12</a></li>
		            <li><a href="http://angular.shaunbloom.com" class="fw-link" data-framework="angular" title="Rebuilt site in Angular to look and function exactly the same as the original JQuery version">Angular '15</a></li>
		            <li><a href="http://react.shaunbloom.com" class="fw-link" data-framework="react" title="Original React (V 0.14) build out from 2015. Made to look and function exactly as the original JQuery version.">React '15</a></li>
		            <li><a href="http://reactv2.shaunbloom.com" class="fw-link selected" data-framework="reactv2" title="Latest React build (V 16) using webpack, babel and es6. Made to look and function exactly as the original JQuery version.">React v2 '19</a></li>
		            <li><a href="http://vanillajs.shaunbloom.com" class="fw-link" data-framework="vanilla" title="Latest build with Webpack, Babel and less using the latest vanilla ES6. Made to look and function exactly as the original JQuery version.">Vanilla '19</a></li>
		        </ul>
	    	</nav>
	    );
 	}
 }

 export default FrameworkNav;