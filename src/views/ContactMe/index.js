import React from 'react';
import Footer from '../../components/Footer';

import { Form, Button } from 'react-bootstrap';
// import { FaBeer } from 'react-icons/fa';
import { MdEmail, MdPhoneIphone } from 'react-icons/md';
import { FaStrava, FaLinkedin, FaGithub } from 'react-icons/fa';

import './style.css';

const ContactMe = () => {
  return (
    <>
      <div id="email-container">
        <div className="contact-icon-div">
          <p className="contact-card-title email-address">
            <span id="link-icons">
              <a
                id="linkedin-icon"
                href="https://www.linkedin.com/in/john-sasser-does-javascript/"
                target="blank"
              >
                <FaLinkedin className="link-icon" />
              </a>
              <a id="github-icon" href="https://github.com/JohnSasser" target="blank">
                <FaGithub className="link-icon" />
              </a>
              <a id="strava-icon"  href="https://www.strava.com/athletes/62855407" target="blank">
                <FaStrava className="link-icon" />
              </a>
            </span>
            <MdEmail style={{ height: '2em' }} />{' '}
            <span className="contact-credentials">
              cw.john.sasser@gmail.com
            </span>
            <br />
            <MdPhoneIphone />{' '}
            <span className="contact-credentials">(770) 853-8466</span>
          </p>
        </div>
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
              className="form-control"
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
              className="form-control"
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
              rows={12}
            />
          </Form.Group>

          <Button
            id="contact-form-button"
            variant="primary"
            type="submit"
            value="Send"
          >
            Submit
          </Button>
        </Form>{' '}
      </div>

      <Footer />
    </>
  );
};

export default ContactMe;
