import React from 'react';
import { noThumbnail } from 'commonJS';

class FullArtView extends React.Component {
	constructor(props) {
	    super(props);
  }

  renderThumbnail(name) {
      let imgSrcSm = `http://www.shaunbloom.com/images/art/${name}-b-thumb.jpg`
      if(name && noThumbnail.indexOf(name) < 0) {
          return (
            <div id="original-thumb">
                <img src={imgSrcSm} />
            </div>
          );
      }
      return '';
  }

	render() {
    let name     = this.props.thumbnailName,
        imgSrcLg = `http://images.shaunbloom.com/art/${name}-a-large.jpg`;

		return (
      <section id="full-art-page" className="dynamic-content main-content">
          <article className="portrait" id={name}>
          {this.renderThumbnail(name)}
          <img src={imgSrcLg} name={name} />
        </article>
      </section>
		);
	}
};

export default FullArtView;