import React, { Component } from "react";
import withRouter from "../../Services/Routes/withRouter";
import Sidebar from "../../Layouts/Sidebars/Sidebars";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

import HttpClient from '../../Services/Helpers/Api/HttpClient';

import moment from 'moment';

const client = new HttpClient();

export class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    }
  }

  getPost = async (id) => {
    const res = await client.get(client.posts+'/'+id, {_expand: 'category'});
    if (res.response.ok){
      this.setState({
        post: res.data
      })
    }
  }

  componentDidMount = () => {
    const { id } = this.props.params;
    this.getPost(id);
  }

  render() {
    const {post} = this.state;
    
    return (
      <section className="single-post-content">
        <div className="container">
          <div className="row">
            <div className="col-md-9 post-content" data-aos="fade-up">
              {/* ======= Single Post Content ======= */}
              <div className="single-post">
                <div className="post-meta">
                  <span className="date">{post.category?.name}</span>{" "}
                  <span className="mx-1">•</span> <span>{moment(post.created_at).format('DD/MM/yyyy HH:mm:ss')}</span>
                </div>
                <h1 className="mb-5">
                  {post.title}
                </h1>
                <div dangerouslySetInnerHTML={{__html: post.content}}/>
              </div>
              {/* End Single Post Content */}
              {/* ======= Comments ======= */}
              <Comments />
              {/* End Comments */}
              {/* ======= Comments Form ======= */}
              <CommentForm />
              {/* End Comments Form */}
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(PostDetail);
