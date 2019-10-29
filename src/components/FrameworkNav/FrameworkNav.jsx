import React from 'react';

 class FrameworkNav extends React.Component {

 	render () {
 		return (
 			<nav className="framework-nav">
		        <ul>
		        	<li><a className="fw-link selected" data-framework="vanilla" title="Latest build with Webpack and Babel using the latest vanillia ES6">Vanilla/ES6</a></li>
		            <li><a className="fw-link" data-framework="jquery" title="Original site build with JQuery">Jquery</a></li>
		            <li><a className="fw-link" data-framework="angular" title="Rebuilt the original site in Angular to look and act exactly the same">AngularJS</a></li>
		            <li><a className="fw-link" data-framework="react" title="Rebuilt the original site in ReactJS to look and act exactly the same" e="">ReactJS</a></li>
		        </ul>
	    	</nav>
	    );
 	}
 }

 export default FrameworkNav;