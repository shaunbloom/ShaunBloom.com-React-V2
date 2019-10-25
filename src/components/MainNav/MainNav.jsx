import React from 'react';
import { views } from 'commonJS';


 class MainNav extends React.Component {
 	constructor(props) {
	    super(props);
	    this.setCurrentView = this.setCurrentView.bind(this);
    }

    setCurrentView () {
        let updateState = this.props.updateState;

        updateState({ currentView: views.CONTACT_VIEW });
    }

 	render () {
 		return (
 			<header id="main" className="main-nav loaded">
	    		<nav>
	    			<ul>
	    				<li className="overlay-link nav-link">
	    					<a data-section="art">Art</a>
	    				</li>
	    				<li className="static-link nav-link">
	    					<a data-section="contact" onClick={this.setCurrentView}>Contact</a>
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


