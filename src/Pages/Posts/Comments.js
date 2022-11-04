import React, { Component } from "react";

export class Comments extends Component {
  render() {
    return (
      <div className="comments">
        <h5 className="comment-title py-4">2 Comments</h5>
        <div className="comment d-flex mb-4">
          <div className="flex-shrink-0">
            <div className="avatar avatar-sm rounded-circle">
              <img
                className="avatar-img"
                src="assets/img/person-5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex-grow-1 ms-2 ms-sm-3">
            <div className="comment-meta d-flex align-items-baseline">
              <h6 className="me-2">Jordan Singer</h6>
              <span className="text-muted">2d</span>
            </div>
            <div className="comment-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
              minima ipsum at amet doloremque qui magni, placeat deserunt
              pariatur itaque laudantium impedit aliquam eligendi repellendus
              excepturi quibusdam nobis esse accusantium.
            </div>
            <div className="comment-replies bg-light p-3 mt-3 rounded">
              <h6 className="comment-replies-title mb-4 text-muted text-uppercase">
                2 replies
              </h6>
              <div className="reply d-flex mb-4">
                <div className="flex-shrink-0">
                  <div className="avatar avatar-sm rounded-circle">
                    <img
                      className="avatar-img"
                      src="assets/img/person-4.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-grow-1 ms-2 ms-sm-3">
                  <div className="reply-meta d-flex align-items-baseline">
                    <h6 className="mb-0 me-2">Brandon Smith</h6>
                    <span className="text-muted">2d</span>
                  </div>
                  <div className="reply-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
              <div className="reply d-flex">
                <div className="flex-shrink-0">
                  <div className="avatar avatar-sm rounded-circle">
                    <img
                      className="avatar-img"
                      src="assets/img/person-3.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-grow-1 ms-2 ms-sm-3">
                  <div className="reply-meta d-flex align-items-baseline">
                    <h6 className="mb-0 me-2">James Parsons</h6>
                    <span className="text-muted">1d</span>
                  </div>
                  <div className="reply-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio dolore sed eos sapiente, praesentium.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comment d-flex">
          <div className="flex-shrink-0">
            <div className="avatar avatar-sm rounded-circle">
              <img
                className="avatar-img"
                src="assets/img/person-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex-shrink-1 ms-2 ms-sm-3">
            <div className="comment-meta d-flex">
              <h6 className="me-2">Santiago Roberts</h6>
              <span className="text-muted">4d</span>
            </div>
            <div className="comment-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              laborum in corrupti dolorum, quas delectus nobis porro accusantium
              molestias sequi.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
