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

            <p>Welcome to my contact page!  I would love you hear from you.  Type your message in below and it will forward the message to my e-mail address. </p>
            <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>

            <label className="message-name" htmlFor="message-name">Your Name</label>
            <input onChange={e => this.setState({ name: e.target.value})} name="name" className="message-name" type="text" placeholder="Your Name" value={this.state.name}/>
      
            <label className="message-email" htmlFor="message-email">Your Email</label>
            <input onChange={(e) => this.setState({ email: e.target.value})} name="email" className="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />

            <label className="message" htmlFor="message-input">Your Message</label>
            <textarea onChange={e => this.setState({ message: e.target.value})} name="message" className="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>
    
      
            <div className="button--container">
                <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
            </div>
          </form>
          </>
        );
    }
}

export default Contact;