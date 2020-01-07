import React from 'react';
import artData from '../js/models/art-data.js';

class ArtView extends React.Component {
  	constructor(props) {
  	    super(props);
    }

    handleThumbnailClick = (e) => {
        const handleThumbnailOpen = this.props.handleThumbnailOpen;
        e.preventDefault();

        let name = e.target.dataset.name;

        if (name) handleThumbnailOpen(name);
        return;
    }

    renderThumbnail (data) {
        let article = data.map((d, i) => {
            return (
                <article className={`art-full ${d.name}`} key={i}>
                    <a className="thumb"  title="Click for full view" onClick={this.handleThumbnailClick}>
                        <img name="d.name" src={d.thumbPath} className="section#art-page article img"  data-name={d.name} data-year={d.year} />
                        <footer>{d.name.charAt(0).toUpperCase() + d.name.slice(1)} '{d.year}</footer>
                    </a>
                    <hr/>
                    {this.purchaseLink(d)}
                </article>
            ); 
        });

        return article;
    };

    purchaseLink(d) {
        if (d.purchase) {
            return (<a href={d.smallpaper} className="purchase-link" target="_blank">{d.linkText}</a>);
        }

        return (<span className="purchase-link-blank"><br/></span>);
    };

    render () {
        return (
            <section id="art-page" className="dynamic-content main-content">
            <h1>Art</h1>
                {this.renderThumbnail(artData)}
            </section>
        );
    }
};

export default ArtView;