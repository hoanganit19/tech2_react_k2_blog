import React, { Component } from "react";

export class Navigation extends Component {
  constructor(props){
    super(props);

  }
  render() {

    const {menus} = this.props;
    console.log(menus);

    return (
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a href="index.html">Blog</a>
          </li>
          <li>
            <a href="single-post.html">Single Post</a>
          </li>
          <li className="dropdown">
            <a href="category.html">
              <span>Categories</span>{" "}
              <i className="bi bi-chevron-down dropdown-indicator" />
            </a>
            <ul>
              <li>
                <a href="search-result.html">Search Result</a>
              </li>
              <li>
                <a href="#">Drop Down 1</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Deep Drop Down</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator" />
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Drop Down 2</a>
              </li>
              <li>
                <a href="#">Drop Down 3</a>
              </li>
              <li>
                <a href="#">Drop Down 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
