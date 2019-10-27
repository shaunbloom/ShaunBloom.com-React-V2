import React from 'react';
import FrameworkNav from 'FrameworkNav';
import MainNav from 'MainNav';
import HomeContent from 'HomeContent';
import ArtView from 'ArtView';
import PortfolioView from 'PortfolioView';
import ResumeView from 'ResumeView';
import { views } from 'commonJS';



class MainView extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	showDynamic: true
	    };
	}

  	render() {
	    return (
	    	<div>
		    	<FrameworkNav />
		    	<div id="wrapper">
		    		<section id="content" className="drop-shadow main-content">
		    			<HomeContent />
				    </section>
				    {this.displayDynamicContent()}
		    	</div>
		    </div>
	    );
  	}

  	displayDynamicContent() {
  		let showDynamic = this.state.showDynamic;

  		if (!showDynamic) return;

  		return (
  			<section id="dynamic-content">
  				<div id="close"></div>
  			</section>
  		);
  	} 
}

export default MainView;