import React, { Component } from "react";

class Footer extends Component {
  state = {
    icons: [
      "fa fa-facebook",
      "fa fa-twitter",
      "fa fa-behance",
      "fa fa-google-plus",
      "fa fa-linkedin",
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid text-center">
          <ul className="social-links">
            {this.state.icons.map((item) => {
              return (
                <li key={item}>
                  <a href="#">
                    <i className={item} aria-hidden="true"></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="container-fluid p-0 text-center">
          <p
            className="copyright m-0"
            style={{ backgroundColor: this.props.bgColor }}
          >
            Copyright © 2022 Your Company | Design: Templatemo
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
