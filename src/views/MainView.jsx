import React from 'react';
import FrameworkNav from '../components/FrameworkNav/FrameworkNav';
import MainNav from  '../components/MainNav/MainNav';
import HomeContent from  '../components/HomeContent/HomeContent';
import { views } from 'commonJS';


class MainView extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	showDynamic: false
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
  			<section id="dynamic-content" style="height: 789px; display: block;">
		    	<div id="close" class="scroll default portfolio"></div>

		    	<section id="portfolio-page" class="dynamic-content main-content">
	            	<div id="close-no-js">
	            		<a href="index.html">
	            			<img src="http://images.shaunbloom.com/close-button.png" />
	            		</a>
	            	</div>
	            	<h1>Portfolio</h1>

		            <article class="maverickcatering">
		                <a href="http://maverickcatering.com">
		                  <img class="img-responsive img-border img-left hidden-xs" src="http://images.shaunbloom.com/maverick-thumb.png" alt="maverickcatering.com" />
		                </a>
		              
						<div class="description">
							<div class="title">MaverickCatering.com</div>
						 	<a href="http://maverickcatering.com">
						 		<i class="fa fa-eye">
						 			<span>view</span>
						 		</i>
						 	</a>
						 	A local catering company hired me to rebuild their website into a much more professional looking site. The site is fully responsive and should look good on any device regardless of size or layout. Check it out and use them for your next event!!
						</div>
		            </article>
		        </section>
			</section>
  		);
  	} 
}

export default MainView;