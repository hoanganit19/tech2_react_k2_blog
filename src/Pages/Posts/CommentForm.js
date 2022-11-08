import React, { Component } from 'react'
import withRouter from '../../Services/Routes/withRouter'
import withContext from '../../Services/Context/withContext';
import moment from 'moment';

export class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChangeValue = (e) => {
    const data = {...this.state};
    data[e.target.name] = e.target.value;
    this.setState(data);
    
    const dataStorage = {...data};
    delete dataStorage.message;

    localStorage.setItem('commentInfo', JSON.stringify(dataStorage));
  }

  handleSubmitComment = (e) => {
    e.preventDefault();
    const {postComment} = this.props.store.action;
    const {id: postId} = this.props.params;
    
    const {name, email, message} = this.state;
    if (name!=='' && email!=='' && message!==''){
      const comment = {
        ...this.state,
        postId: postId,
        status: 1,
        parentId: 0,
        created_at: moment().format("YYYY-MM-DD hh:mm:ss")
      }
      postComment(comment, postId);
      this.setState({
        message: ''
      })
    }
  }

  componentDidMount = () => {
    let commentInfo = localStorage.getItem('commentInfo');
    if (commentInfo!==null){
      commentInfo = JSON.parse(commentInfo); 
      this.setState(commentInfo);
    }
    
  }

  render() {
    const {name, email, message} = this.state;
    return (
        <div className="row justify-content-center mt-5">
        <div className="col-lg-12">
          <h5 className="comment-title">Leave a Comment</h5>
          <form onSubmit={this.handleSubmitComment}>
          <div className="row">
            <div className="col-lg-6 mb-3">
              <label htmlFor="comment-name">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="comment-name"
                placeholder="Enter your name"
                required
                onChange={this.handleChangeValue}
                value={name}
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="comment-email">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="comment-email"
                placeholder="Enter your email"
                required
                onChange={this.handleChangeValue}
                value={email}
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="comment-message">Message</label>
              <textarea
                name="message"
                className="form-control"
                id="comment-message"
                placeholder="Enter your name"
                cols={30}
                rows={10}
                value={message}
                required
                onChange={this.handleChangeValue}
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
          </form>
        </div>
      </div>
    )
  }
}

export default withContext(withRouter(CommentForm));