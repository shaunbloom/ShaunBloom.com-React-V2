import React from 'react';
import { views } from '../../js/common';


class ContactText extends React.Component {
    constructor(props) {
        super(props);
    }

    setCurrentView = () => {
        let updateState = this.props.updateState;

        updateState({ currentView: views.HOME_VIEW });
    }

    render () {
        return (
            <article id="contact-page" key="contact">    
                <nav>
                    <ul>
                        <li><a id="home-link" onClick={this.setCurrentView}>Home</a></li>
                    </ul>
                </nav>
                <header><h1>Contact Me</h1></header>
                <table>
                    <tbody>
                        <tr>
                            <td className="name">Email:</td> 
                            <td className="value">&nbsp;&nbsp;S h a u n B l o o m @ gmail . com</td>
                        </tr>
                        <tr>
                            <td className="name">Address:</td> 
                            <td className="value pad">&nbsp;&nbsp;XXXXX NE 145th pl,<br/>&nbsp;&nbsp;Duvall, WA 98019</td>
                        </tr>
                        <tr>
                            <td className="name">Phone:</td> 
                            <td className="value">&nbsp;&nbsp;Call me and I will tell you.</td>
                        </tr>
                        <tr>
                            <td className="name">Facebook:</td> 
                            <td className="value">&nbsp;&nbsp;<a href="http://www.facebook.com/shaun.bloom" target="_blank">www.facebook.com/shaunbloom</a></td>    
                        </tr>
                        <tr>
                            <td className="name">LinkedIn:</td> 
                            <td className="value">&nbsp;&nbsp;<a href="https://www.linkedin.com/in/shaun-bloom-7ab270a9/" target="_blank">www.linkedin.com/shaunbloom</a></td>    
                        </tr>
                        <tr>
                            <td className="name">Github:</td> 
                            <td className="value">&nbsp;&nbsp;<a href="https://github.com/shaunbloom/" target="_blank">www.github.com/shaunbloom</a></td>    
                        </tr>
                    </tbody>
                </table>
            </article>
        );
    }
};

export default ContactText;