import React from 'react';

class FullArtView extends React.Component {
	constructor(props) {
	    super(props);
    }

	render () {
		return (
      <section id="full-art-page" className="dynamic-content main-content">
        <article id="curt5" className="portrait">
            <div id="original-thumb">
                <img src="http://www.shaunbloom.com/images/art/curt5-b-thumb.jpg" />
            </div>
            <img name="curt5" src="http://images.shaunbloom.com/art/curt5-a-large.jpg" />
        </article>
      </section>
		);
	}
};

export default FullArtView;