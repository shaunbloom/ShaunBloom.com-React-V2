import React from 'react';
import portfolioData from 'portfolioData';

class PortfolioView extends React.Component {
	constructor(props) {
	    super(props);
  }

  renderArticle (data) {
        let article = data.map((d, i) => {
            return (
                <article className={d.class} key={i}>
                    <a href={d.url}>
                        <img className="img-responsive img-border img-left hidden-xs" src={d.imgSrc} alt={d.title} />
                    </a>
                    <div className="description">
                        <div className="title">{d.title}</div>
                        <a href={d.url}>
                          <i className="fa fa-eye">
                              <span>view</span>
                          </i>
                        </a>
                       {d.description}
                    </div>
                  </article>
            ); 
        });

        return article;
    };
    
    render () {
		    return (
            <section id="portfolio-page" className="dynamic-content main-content">
                <h1>Portfolio</h1>
                {this.renderArticle(portfolioData)}
            </section>
		    );
    }
};

export default PortfolioView;