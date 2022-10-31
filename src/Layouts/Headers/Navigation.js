import React, { Component } from "react";

export class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  getMenus = (menus) => {
    if (menus.length) {
      return (
        <ul>
          {menus.map(({ link, title, children }, index) => {
            //Chia thành 2 trường hợp
            //TH1: Nếu có con (kiểm tra thuộc tính children)
            //TH2: Không có con => Không tồn tại children
            let menuItem;

            if (children) {
              menuItem = (
                <li key={index} className="dropdown">
                  <a href={link}>
                    <span>{title}</span>
                    <i className="bi bi-chevron-down dropdown-indicator"></i>
                  </a>
                  {this.getMenus(children)}
                </li>
              );
            } else {
              menuItem = (
                <li key={index}>
                  <a href={link}>{title}</a>
                </li>
              );
            }

            return menuItem;
          })}
        </ul>
      );
    }
  };

  // componentDidMount = () => {
  //   const {menus} = this.props;
  //   console.log(menus);
  // }

  render() {
    const { menus } = this.props;
    return (
      <nav id="navbar" className="navbar">
        {this.getMenus(menus)}
        {/* <ul>
          <li><a href="index.html">Blog</a></li>
          <li><a href="single-post.html">Single Post</a></li>
          <li class="dropdown"><a href="category.html"><span>Categories</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="search-result.html">Search Result</a></li>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>

          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul> */}
      </nav>
    );
  }
}

export default Navigation;
