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

            <p className='centered'>Welcome to my contact page!</p>

            <p className='centered'>Click the following link to send me an email at <a href="mailto:jdstrongpdx@gmail.com">jdstrongpdx@gmail.com</a>.</p>

            <p className='centered'>I look forward to hearing from you!</p>
            
            
          </>
        );
    }
}

export default Contact;