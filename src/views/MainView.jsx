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
	    	currentView: views.HOME_VIEW,
	    	currentFullArtName: ''
	    };

	    this.updateMainViewState = this.updateMainViewState.bind(this);
	    this.handleThumbnailOpen = this.handleThumbnailOpen.bind(this);
	    this.onClose = this.onClose.bind(this);
	}

	onClose() {
		const stateObj = {};

		if (this.state.currentView !== views.FULL_ART_VIEW) {
			stateObj.currentView = views.HOME_VIEW;
			stateObj.showDynamic = false;
		} else {
			stateObj.currentView = views.ART_VIEW;
			stateObj.showDynamic = true;
		}
		this.setState(()=> {
			return (stateObj)
		});
	}

	handleThumbnailOpen(name) {
		if (name) {
			this.setState({currentView: views.FULL_ART_VIEW, currentFullArtName: name})
		}
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
  					return <ArtView handleThumbnailOpen={this.handleThumbnailOpen} />;
  				case views.FULL_ART_VIEW :
  					return <FullArtView thumbnailName={this.state.currentFullArtName} />;
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