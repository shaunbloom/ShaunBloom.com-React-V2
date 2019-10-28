import React from 'react';
import FrameworkNav from 'FrameworkNav';
import MainNav from 'MainNav';
import HomeContent from 'HomeContent';
import ArtView from 'ArtView';
import FullArtView from 'FullArtView';
import PortfolioView from 'PortfolioView';
import ResumeView from 'ResumeView';
import { views, times } from 'commonJS';
import FadeProps from 'fade-props';

class MainView extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	showDynamic: false,
	    	currentView: views.HOME_VIEW
	    };

	    this.updateMainViewState = this.updateMainViewState.bind(this);
	    this.onClose = this.onClose.bind(this);
	}

	onClose() {
		this.setState(()=> {
			return ({showDynamic: false, currentView: views.HOME_VIEW})
		});
	}

	updateMainViewState (stateConfig) {
		this.setState(()=> {
			return (stateConfig)
		});
	}

  	render() {
	    return (
	    	<div>
		    	<FrameworkNav />
		    	<div id="wrapper">
		    	<FadeProps animationLength={times.MEDIUM}>
		    		<div>
			    		<section id="content" className="drop-shadow main-content">
			    			<HomeContent updateMainViewState={this.updateMainViewState}/>
					    </section>
				    
				    	{this.displayDynamicContent()}
				    </div>
				    </FadeProps>
		    	</div>
		    </div>
	    );
  	}

  	displayDynamicContent() {
  		let showDynamic  = this.state.showDynamic,
  			currentView  = this.state.currentView,
  			artFullClass = (currentView === views.FULL_ART_VIEW) ? 'art-full-page' : '';

  		if (!showDynamic) return;

  		const dynamicView = () => {
  			switch (currentView) {
  				case views.ART_VIEW :
  					return <ArtView />;
  				case views.RESUME_VIEW :
  					return <ResumeView />;
  				case views.PORTFOLIO_VIEW :
  					return <PortfolioView />;
  			}
  		}

  		return (
			<section id="dynamic-content" className={artFullClass}>
				<div id="close" onClick={this.onClose}></div>
				{dynamicView()}
			</section>
  		);
  	} 
}

export default MainView;