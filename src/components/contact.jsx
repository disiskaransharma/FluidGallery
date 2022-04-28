import React, { Component } from "react";
import TransitionAnim from "./transitionAnim";

class Contact extends Component {
  state = {};
  render() {
    return (
      <TransitionAnim>
        <div className="container contact">
          <div className="row">
            <div className="col-lg-6 p-3 d-flex">
              <div className="col-lg-12 wrapper message">
                <h2>Feel free to say Hi!</h2>
                <p>
                  Nulla sed urna at ligula maximus blandit. Mauris nisi ligula,
                  ultricies ac diam id, hendrerit tincidunt ipsum. Maecenas non
                  massa justo.
                </p>

                <form>
                  <input className="col-lg-12" type="text" placeholder="Name" />
                  <input
                    className="col-lg-12"
                    type="text"
                    placeholder="Email"
                  />
                  <textarea
                    className="col-lg-12"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                  <button>Send</button>
                </form>
              </div>
            </div>

            <div className="col-lg-6 p-3 d-flex">
              <div className="col-lg-12 wrapper address">
                <h2>4466 Old New St 28290, SF, California</h2>

                <iframe
                  className="col-lg-12"
                  height="350"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.66008764814!2d77.35073867566956!3d12.954517004756145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1651006880489!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </TransitionAnim>
    );
  }
}

export default Contact;
