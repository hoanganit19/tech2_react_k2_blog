import React, { Component } from "react";
import withRouter from "../../Services/Routes/withRouter";
import HttpClient from "../../Services/Helpers/Api/HttpClient";
import moment from "moment";

const md5 = require("md5");

const client = new HttpClient();

export class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  getComments = async (postId) => {
    const res = await client.get(client.comments, {
      postId: postId,
      parentId: 0,
    });
    if (res.response.ok) {
      const comments = res.data;
      if (comments.length) {
        for (const index in comments) {
          const replyRes = await client.get(client.comments, {
            postId: postId,
            parentId: comments[index].id,
          });
          if (replyRes.response.ok && replyRes.data.length) {
            comments[index].reply = replyRes.data;
          }
        }
      }

      this.setState({
        comments: comments,
      });
    }
  };

  componentDidMount = () => {
    const { id } = this.props.params;
    this.getComments(id);
  };

  getGravatarURL = (email) => {
    // Trim leading and trailing whitespace from
    // an email address and force all characters
    // to lower case
    const address = String(email).trim().toLowerCase();

    // Create an MD5 hash of the final string
    const hash = md5(address);

    // Grab the actual image URL
    return `https://www.gravatar.com/avatar/${hash}`;
  };

  render() {
    const { comments } = this.state;
    return (
      <div className="comments">
        <h5 className="comment-title py-4">{comments.length} Comments</h5>
        {comments.length > 0 &&
          comments.map(({ id, name, email, message, created_at, reply }) => {
            return (
              <div className="comment d-flex mb-3" key={id}>
                <div className="flex-shrink-0">
                  <div className="avatar avatar-sm rounded-circle">
                    <img
                      className="avatar-img"
                      src={this.getGravatarURL(email)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-shrink-1 ms-2 ms-sm-3">
                  <div className="comment-meta d-flex">
                    <h6 className="me-2">{name}</h6>
                    <span className="text-muted">
                      {moment(created_at).format("DD/MM/YYYY hh:mm:ss")}
                    </span>
                  </div>
                  <div className="comment-body">{message}</div>
                  {reply?.length && (
                    <div className="comment-replies bg-light p-3 mt-3 rounded">
                      <h6 className="comment-replies-title mb-4 text-muted text-uppercase">
                        {reply.length} replies
                      </h6>
                      {reply.map(({ id, name, email, message, created_at }) => {
                        return (
                          <div className="reply d-flex mb-4" key={id}>
                            <div className="flex-shrink-0">
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  className="avatar-img"
                                  src={this.getGravatarURL(email)}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-2 ms-sm-3">
                              <div className="reply-meta d-flex align-items-baseline">
                                <h6 className="mb-0 me-2">{name}</h6>
                                <span className="text-muted">{moment(created_at).format("DD/MM/YYYY hh:mm:ss")}</span>
                              </div>
                              <div className="reply-body">
                                {message}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default withRouter(Comments);
