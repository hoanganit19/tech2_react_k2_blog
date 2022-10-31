import React, { Component } from "react";
import moment from 'moment';

export class FooterTop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { about, menus, categories, posts, recentPosts } = this.props;

    return (
      <div className="footer-content">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <h3 className="footer-heading">{about.title}</h3>
              <p>{about.content}</p>
              <p>
                <a href={about.link} className="footer-link-more">
                  {about.text_link}
                </a>
              </p>
            </div>
            <div className="col-6 col-lg-2">
              <h3 className="footer-heading">{menus.title}</h3>
              {menus.lists?.length > 0 && (
                <ul className="footer-links list-unstyled">
                  {menus.lists.map(({ link, title }, index) => (
                    <li key={index}>
                      <a href={link}>
                        <i className="bi bi-chevron-right" /> {title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="col-6 col-lg-2">
              <h3 className="footer-heading">{categories?.title}</h3>
              {categories?.lists?.length > 0 && (
                <ul className="footer-links list-unstyled">
                  {categories.lists.map(({ link, title }, index) => (
                    <li key={index}>
                      <a href={link}>
                        <i className="bi bi-chevron-right" /> {title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="col-lg-4">
              <h3 className="footer-heading">{posts.title}</h3>
              {recentPosts.length && (
                <ul className="footer-links footer-blog-entry list-unstyled">
                  {recentPosts.map(({ id, title, thumbnail, created_at, category }) => {
                    const {name: categoryName} = category;
                    return (
                      <li key={id}>
                        <a
                          href="#"
                          className="d-flex align-items-center"
                        >
                          <img
                            src={thumbnail}
                            alt={title}
                            className="img-fluid me-3"
                          />
                          <div>
                            <div className="post-meta d-block">
                              <span className="date">{categoryName}</span>{" "}
                              <span className="mx-1">•</span>{" "}
                              <span>{moment(created_at).format('DD/MM/yyyy HH:mm:ss')}</span>
                            </div>
                            <span>
                              {title}
                            </span>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterTop;
