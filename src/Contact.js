import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com"

const Contact = () => {
  const [done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Koro-Coder', 'template_h381fae', form.current, '7u6biypENMyke-Flw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setDone(true);
      e.target.reset();
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <h2 data-aos="fade-up">Contact</h2>
            <br />
            <form onSubmit={sendEmail} ref={form}>
              {/* <form ref={formRef}> */}
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Your Name"
                className="form-control"
                name="name" required
              />
              <div className="row">
                <div >
                  <input
                    data-aos="fade-up"
                    type="email"
                    placeholder="Your Email"
                    className="form-control"
                    name="email" required
                  />
                </div>
              </div>
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Subject"
                className="form-control"
                name="subject" required
              />
              <textarea
                data-aos="fade-up"
                name="message"
                rows="4"
                className="form-control"
                placeholder="Your Message" required
              ></textarea>
              <br />
              <button
                data-aos="fade-up"
                type="submit"
                className="btn btn-primary"
              >
                Send
              </button>
              <br />
              <br />
              {done ? <p>Thank you for contacting :))</p> : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
