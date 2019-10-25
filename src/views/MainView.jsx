import React from 'react';
import FrameworkNav from '../components/FrameworkNav/FrameworkNav';
import MainNav from  '../components/MainNav/MainNav';
import HomeContent from  '../components/HomeContent/HomeContent';


class MainView extends React.Component {
  render() {
    return (
    	<div>
	    	<FrameworkNav />
	    	<div id="wrapper">
	    		<section id="content" className="drop-shadow main-content">
	    			<HomeContent />
			    </section>
	    	</div>
	    </div>
    );
  }
}

export default MainView;