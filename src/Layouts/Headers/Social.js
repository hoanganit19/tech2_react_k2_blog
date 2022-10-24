import React, { Component } from "react";

export class Social extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const {facebook, twitter, intagram} = this.props;

    return (
      <div className="position-relative">
        <a href={facebook} className="mx-2" target="_blank">
          <span className="bi-facebook" />
        </a>
        <a href={twitter} className="mx-2"  target="_blank">
          <span className="bi-twitter" />
        </a>
        <a href={intagram} className="mx-2"  target="_blank">
          <span className="bi-instagram" />
        </a>
        <a href="#" className="mx-2 js-search-open">
          <span className="bi-search" />
        </a>
        <i className="bi bi-list mobile-nav-toggle" />
        {/* ======= Search Form ======= */}
        <div className="search-form-wrap js-search-form-wrap">
          <form action="search-result.html" className="search-form">
            <span className="icon bi-search" />
            <input type="text" placeholder="Search" className="form-control" />
            <button className="btn js-search-close">
              <span className="bi-x" />
            </button>
          </form>
        </div>
        {/* End Search Form */}
      </div>
    );
  }
}

export default Social;
