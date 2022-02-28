import React, { Component } from 'react';

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row contact-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <a href="mailto:ischain.id@gmail.com">
                  <i className="bx bx-envelope"></i>
                  <h3>Email</h3>
                  <p>ischain.id@gmail.com</p>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <a href="https://www.t.me/ischainlounge/">
                  <i className="bx bxl-telegram"></i>
                  <h3>Telegram</h3>
                  <p>Join</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
