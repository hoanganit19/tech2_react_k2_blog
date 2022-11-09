import React, { Component, createRef } from "react";
import withRouter from "../../Services/Routes/withRouter";
import HttpClient from "../../Services/Helpers/Api/HttpClient";
import withContext from "../../Services/Context/withContext";
import moment from "moment";
import ReplyForm from "./ReplyForm";

const md5 = require("md5");

const client = new HttpClient();

export class Comments extends Component {
  constructor(props) {
    super(props);
    this.commentsRef = createRef();
    this.state = {
      commentId: null,
    };
  }

  makeTreeComments = (comments, parentId = 0) => {
    let tree = [];
    if (comments.length) {
      comments.forEach((comment, index) => {
        if (comment.parentId == parentId) {
          //tree.push(comment);
          tree[index] = comment;
          if (tree[index] !== undefined) {
            tree[index].reply = this.makeTreeComments(comments, comment.id).reverse();
          }

          tree = tree.filter(() => true); //reset index array
        }
      });
    }

    return tree;
  };

  componentDidMount = () => {
    const { id } = this.props.params;
    const { getComments } = this.props.store.action;
    getComments(id);
  };

  componentDidUpdate = (prevProps, prevState) => {
    
    if (prevProps.store.data.comments.length !== this.props.store.data.comments.length && this.props.store.data.typeComment==='comment'){
      const offsetTop = this.commentsRef.current.offsetTop;
      window.scroll(0, offsetTop);
    }
   
    
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

  showReplyForm = (commentId) => {
   
    this.setState({
      commentId: commentId,
    });
  };

  scrollCommentReply = (htmlObj) => {
    const commentObj = htmlObj.parentElement.parentElement;
    if (commentObj!==null){
      const offsetTop = commentObj.offsetTop;
      window.scroll(0, offsetTop);
    }
  }

  render() {
    //const { comments } = this.state;
    let { comments } = this.props.store.data;
  
    comments = this.makeTreeComments(comments);

    const { commentId } = this.state;

    return (
      <div className="comments" ref={this.commentsRef}>
        <h5 className="comment-title py-4">{comments.length} Comments</h5>
        {comments.length > 0 &&
          comments.map(({ id, name, email, message, created_at, reply, postId }) => {
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
                  <p className="my-2">
                    <span
                      style={{ color: "red", fontStyle: "italic", cursor: 'pointer' }}
                     
                      onClick={(e) => {
                        e.preventDefault();
                        this.scrollCommentReply(e.target);
                        this.showReplyForm(id);
                      }}
                    >
                      Write Reply
                    </span>
                  </p>
                  {commentId == id && <ReplyForm commentId={parseInt(id)} postId={parseInt(postId)}/>}

                  {reply?.length > 0 && (
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
                                <span className="text-muted">
                                  {moment(created_at).format(
                                    "DD/MM/YYYY hh:mm:ss"
                                  )}
                                </span>
                              </div>
                              <div className="reply-body">{message}</div>
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

export default withContext(withRouter(Comments));
