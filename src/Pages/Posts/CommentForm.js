import React, { Component } from 'react'

export class CommentForm extends Component {
  render() {
    return (
        <div className="row justify-content-center mt-5">
        <div className="col-lg-12">
          <h5 className="comment-title">Leave a Comment</h5>
          <div className="row">
            <div className="col-lg-6 mb-3">
              <label htmlFor="comment-name">Name</label>
              <input
                type="text"
                className="form-control"
                id="comment-name"
                placeholder="Enter your name"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="comment-email">Email</label>
              <input
                type="text"
                className="form-control"
                id="comment-email"
                placeholder="Enter your email"
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="comment-message">Message</label>
              <textarea
                className="form-control"
                id="comment-message"
                placeholder="Enter your name"
                cols={30}
                rows={10}
                defaultValue={""}
              />
            </div>
            <div className="col-12">
              <input
                type="submit"
                className="btn btn-primary"
                defaultValue="Post comment"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentForm