import React from 'react';
import Footer from '../../components/Footer';

import { Form, Button } from 'react-bootstrap';
// import { FaBeer } from 'react-icons/fa';
import { MdEmail, MdPhoneIphone } from 'react-icons/md';

import './style.css';

const ContactMe = () => {
  return (
    <>
      <div class="card-body cardContainer" id="email-container">
        <div className="contact-icon-div">
          <p class="contact-card-title email-address">
            <MdEmail style={{ height: '2em' }} /> cw.john.sasser@gmail.com
          </p>
          <p className="contact-card-title phone-number">
            <MdPhoneIphone /> (770) 853-8466
          </p>
        </div>
        {/* 
        <form
          action="https://formspree.io/xbjojbro"
          method="POST"
          target="_blank"
        >
          <div class="form-group">
            <label for="exampleFormControlInput1"></label>
            <input
              type="text"
              for="contact"
              name="name"
              class="form-control"
              placeholder="Your Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1"></label>
            <input
              type="email"
              for="contact"
              name="_replyto"
              class="form-control"
              placeholder="Your email@example.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1"></label>
            <textarea
              class="form-control"
              for="contact"
              name="message"
              rows="12"
              placeholder="Message"
            ></textarea>
            <br />

            <input
              class="btn btn-dark btn-lg btn-block submitButton"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      */}
        <Form
          action="https://formspree.io/xbjojbro"
          method="POST"
          target="_blank"
        >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              htmlFor="contact"
              name="name"
              class="form-control"
              type="text"
              placeholder="name"
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              htmlFor="contact"
              name="_replyto"
              class="form-control"
              placeholder="email@example.com"
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message Field</Form.Label>
            <Form.Control
              htmlFor="contact"
              name="message"
              placeholder="message"
              as="textarea"
              rows={16}
            />
          </Form.Group>

          <Button variant="primary" type="submit" value="Send">
            Submit
          </Button>
        </Form>{' '}
      </div>

      <Footer />
    </>
  );
};

export default ContactMe;
