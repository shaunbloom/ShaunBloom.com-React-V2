import React from 'react';
import { views } from 'commonJS';


 class MainNav extends React.Component {
 	constructor(props) {
	    super(props);
	    this.setCurrentView = this.setCurrentView.bind(this);
    }

    setCurrentView (e) {
    	e.preventDefault();
    	let newView   = e.target.dataset.section,
    		stateObj = {};

        const updateMainNavState = this.props.updateMainNavState;
        const updateMainViewState = this.props.updateMainViewState;

        stateObj.currentView = newView;

        if (newView !== views.CONTACT_VIEW && newView !== views.HOME_VIEW) {
			stateObj.showDynamic = true;   
			updateMainViewState(stateObj);     	
        } else {
        	updateMainNavState(stateObj);
        }
    }

 	render () {
 		return (
 			<header id="main" className="main-nav loaded"  onClick={this.setCurrentView}>
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


