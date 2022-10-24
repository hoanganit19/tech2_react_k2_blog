import React, { Component } from "react";
import Copyright from "./Copyright";
import FooterTop from "./FooterTop";
import Social from "./Social";

export class Footers extends Component {
  render() {
    return (
      <>
        {/* ======= Footer ======= */}
        <footer id="footer" className="footer">
          <FooterTop />
          <div className="footer-legal">
            <div className="container">
              <div className="row justify-content-between">
                <Copyright />
                <Social />
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footers;
