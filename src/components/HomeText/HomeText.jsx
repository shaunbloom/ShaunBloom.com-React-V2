import React from 'react';

class HomeText extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
    	return (
			<article id="home-page" key="home">
				<table>
			    	<tbody>
			    		<tr>
			        		<td className="name">Name:</td> 
			        		<td className="value">Shaun Bloom</td>
			        	</tr>
			        	<tr>
					        <td className="name">Age:</td> 
				    	    <td className="value">Wise</td>
				        </tr>
				        <tr>
					        <td className="name">Location:</td> 
				    	    <td className="value">Duvall, WA</td>    
				        </tr>
				        <tr>
					        <td className="name">Occupation:</td> 
				    	    <td className="value">Web Developer</td>  
				        </tr>
				        <tr>
					        <td className="name">Motto:</td>
				    	    <td className="value pad">Don't cry over spilt milk, cry over David Lee Roth's hair now!</td>
				        </tr>
				        <tr>
					        <td className="name">Objective:</td>
				    	    <td className="value pad">Make it through life without going too crazy, raise my kids to the best of my ability, and conquer the web one day at a time. God only knows how much info is out there to learn!!</td>
				        </tr>
			    	</tbody>
				</table>
			</article>
		);	
    }
};

export default HomeText;