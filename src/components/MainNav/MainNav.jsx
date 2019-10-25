import React from 'react';

 class MainNav extends React.Component {

 	render () {
 		return (
 			<header id="main" className="main-nav loaded">
	    		<nav>
	    			<ul>
	    				<li className="overlay-link nav-link">
	    					<a data-section="art">Art</a>
	    				</li>
	    				<li className="static-link nav-link">
	    					<a data-section="contact">Contact</a>
	    				</li>
	    				<li className="overlay-link nav-link">
	    					<a data-section="resume">Resume</a>
	    				</li>
	    				<li className="overlay-link nav-link">
	    					<a data-section="portfolio">Portfolio</a>
	    				</li>
	    			</ul>
	    		</nav>
	    	</header>
	    );
 	}
 }

 export default MainNav;


