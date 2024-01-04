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

            <p>Welcome to my contact page! This page is really simple - just click the following link to send me an e-mail: <a href="mailto:jdstrongpdx@gmail.com">jdstrongpdx@gmail.com</a>. I look forward to hearing from you!</p>
            
            
          </>
        );
    }
}

export default Contact;