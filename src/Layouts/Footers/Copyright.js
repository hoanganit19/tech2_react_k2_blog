import React, { Component } from "react";

export class Copyright extends Component {
  render() {
    return (
      <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>ZenBlog</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/herobiz-bootstrap-business-template/ */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    );
  }
}

export default Copyright;
