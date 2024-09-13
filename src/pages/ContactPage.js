import React, { Component } from 'react';

class Contact extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    render() {
        return(
            <>

                <h1>Contact Page</h1>


                <div className='card'>
                    <p className='centered'>Welcome to my contact page!</p>

                    <p className='centered'>Send me an email at<a
                        href="mailto:jdstrongpdx@gmail.com">jdstrongpdx@gmail.com</a> or view my other contact options below.</p>

                    <p className='centered'>I look forward to hearing from you!</p>

{/*                    <img src="/images/headshot.jpg" style={{borderRadius: '25px', paddingRight: '20 px'}} width='250px'
                         alt="Website Logo"></img>
                    <img src="/images/WebsiteQR.png" style={{marginLeft: '25 px'}} width='250px'
                         alt="Website Logo"></img>*/}
                    <h1>Joel Strong</h1>
                    <h2>Full Stack Software Engineer</h2>
                    <div>
                        <img src="/images/SpringBusinessCard.png" alt="Programming Business Card"></img>
                    </div>
                </div>

            </>
        );
    }
}

export default Contact;