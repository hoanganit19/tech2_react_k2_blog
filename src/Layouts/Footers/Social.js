import React, { Component } from "react";

export class Social extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="social-links mb-3 mb-lg-0 text-center text-md-end">
          <a href="#" className="twitter">
            <i className="bi bi-twitter" />
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram" />
          </a>
          <a href="#" className="google-plus">
            <i className="bi bi-skype" />
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>
    );
  }
}

export default Social;
