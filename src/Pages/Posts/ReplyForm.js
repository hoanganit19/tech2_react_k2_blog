import React, { Component } from "react";
import withContext from "../../Services/Context/withContext";
import moment from "moment";

export class ReplyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmitReply = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const { commentId, postId } = this.props;
    const comment = {
        name: name,
        email: email,
        message: message,
        parentId: commentId,
        postId: postId,
        created_at: moment().format("YYYY-MM-DD hh:mm:ss"),
        updated_at: moment().format("YYYY-MM-DD hh:mm:ss")
    }

    const {postComment} = this.props.store.action;
    postComment(comment, postId, 'reply');
  };

  handleChangeValue = (e) => {
    const data = { ...this.state };
    data[e.target.name] = e.target.value;
    this.setState(data);
  };

  render() {

    return (
      <form onSubmit={this.handleSubmitReply}>
        <div className="row">
          <div className="col-6 mb-2">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name..."
              onChange={this.handleChangeValue}
              required
            />
          </div>
          <div className="col-6 mb-2">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email..."
              onChange={this.handleChangeValue}
              required
            />
          </div>
          <div className="col-12">
            <input
              type="text"
              name="message"
              placeholder="Reply..."
              className="form-control"
              onChange={this.handleChangeValue}
              required
            />
          </div>
        </div>
        <button type="submit" className="d-none"></button>
      </form>
    );
  }
}

export default withContext(ReplyForm);
