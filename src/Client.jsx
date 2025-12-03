import './client.css'
import walmart from '../allpic/walmart.png'
import adobe from '../allpic/adobe.png'
import microsoft from '../allpic/microsoft.png'
import facebook from '../allpic/facebook.png'
import instagramicon from '../allpic/instagram.png'
import facebookicon from '../allpic/facebook-icon.png'
import twittericon from '../allpic/twitter.png'
import youtubeicon from '../allpic/youtube.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Client = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3i0oxke', 'template_c0qp6sh', form.current, {
        publicKey: 'v4A430dqtEEpOvvAq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset(); 
          alert("Email Sent!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className="client">
        <div id="clients">
            <span className="clientheading">My Clients</span><br />
            <span className="clientdetails">I have had opportunity to work with a diverse group of companies.Some of the notable <br className='makeitnone'/>companies i have worked with include.</span>
            <div className="compname">
                <img src={walmart} alt="walmart" className="compimg" />
                <img src={adobe} alt="adobe" className="compimg" />
                <img src={microsoft} alt="microsoft" className="compimg" />
                <img src={facebook} alt="facebook" className="compimg" />
            </div>
        </div>

        <div id="contacts">
            <span className="contme">Contact Me</span><br />
            <span className="contdetails">Please fill out the form below to discuss any work opportunities</span>
            <form className="contactform" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name="user_name"/>
                <input type="email" className="email" placeholder='Your Email' name="user_email"/>
                <textarea className='message' name="message" rows="5"  placeholder='Your Message'></textarea>
                <button type='submit' value="send" className="submitbtn">Submit</button>
                <div className="links">
                    <img src={facebookicon} alt="facebookicon" className="link" />
                    <img src={instagramicon} alt="instagramicon" className="link" />
                    <img src={twittericon} alt="twittericon" className="link" />
                    <img src={youtubeicon} alt="youtubeicon" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Client
