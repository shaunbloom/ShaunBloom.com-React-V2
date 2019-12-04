import React from 'react';
import resumeData from 'resumeData';

class ResumeView extends React.Component {
	constructor(props) {
	    super(props);
    }

    renderEmployer(data) {
	    let employer = data.map((d, i) => {
	        return (
	        	<div key={i}>
		        	<div className="job-employer" key={i}>
		                <p><strong><em>{d.employer}</em></strong> • {d.city}, {d.state} {d.startDate} - {d.endDate}</p>
		                <p><strong>{d.jobTitle}</strong></p>
		                <ul>
		                    {this.renderResponsibilities(d.responsibilities)}
		                </ul>
		            </div>
		            {this.renderSkills(d.skills)}
		            <hr/>
		        </div>
	        );  
	    });

	    return employer;
	}

	renderResponsibilities(data) {
	    let responsibilities = data.map((d, i) => {
			return (
				<li key={i}>{d}</li>
			);
	    });

	    return responsibilities;
	}

	renderSkills(data) {
		if (data.length) {
			return (
		    	<p><strong>Core Skills Required:</strong> {data.join(', ')}</p>
		    );	
		} 

	    return;
	};

	render() {
		return (
			<div id="resume-page">
				<h1 className="pageTitle">Resume &mdash; <a href="//shaunbloom.com/download/Shaun_Bloom_Resume.docx">DOWNLOAD</a></h1>
				<p><strong>Objective:</strong> To use my experience and knowledge of web-based technologies, object oriented programming, and application development in a high tech solution based environment.<br/><br/></p>
				<p><strong>Professional Experience:</strong></p>

				{this.renderEmployer(resumeData)}

				<p><strong><em>Skills:</em></strong></p>
				<p><strong>Software Apps:</strong> Photoshop CS4, Dreamweaver CS4, Fireworks CS4, Contribute 3, Wordpress, Concrete5, Office 14,  Windows 7, OS X, Putty, SVN, Zend Framework</p>
				<p><strong>Languages:</strong> HTML, DHTML, ASP, PHP, CSS, JavaScript, SQL, XML, Java, VB Script, ADO, CDO, MySQL</p>
				<p><strong>Familiar with:</strong> Zend Framework, Developing on mobile devices, Mobile emulators, Ajax, ASP.NET, C#, Flash</p>
				<p><strong>Personal:</strong>  Enjoy working in a team environment or on my own. Self-starter, quick learner, driven to succeed, 
				have managed teams of people and key projects. Have an excellent understanding of the industry. I am also   currently working with AJAX to expand my skill set.</p>
			</div>
		);
	}
};

export default ResumeView;