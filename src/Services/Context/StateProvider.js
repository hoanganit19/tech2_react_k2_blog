import React, { Component } from "react";
import HttpClient from "../Helpers/Api/HttpClient";

const client = new HttpClient();

export const StateContext = React.createContext();

export class StateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: [],
      keyword: '',
      comments: []
    }

    //Đăng ký các action
    this.action = {
        getPosts: this.getPosts,
        setKeyword: this.setKeyword,
        getComments: this.getComments,
        postComment: this.postComment
    }
  }

  setKeyword = (keyword) => {
    this.setState({
      keyword: keyword
    })
  }

  getPosts = async (filters = {}, limit, page=1) => {
    filters._limit = limit;
    filters._page = page;
    filters._expand = 'category';
    filters._expand = 'user';
 
    const res = await client.get(client.posts, filters);
      if (res.response.ok){
        const postsList = res.data;
      
        this.setState({
          postsList: postsList
        })
      }
   
  }

  getComments = async (postId) => {
    const res = await client.get(client.comments, {
      postId: postId,
      _sort: 'id',
      _order: 'desc'
    });
    if (res.response.ok){
     
      this.setState({
        comments: res.data
      })
    }
  }

  postComment = async (comment, postId) => {
    const res = await client.post(client.comments, comment);
    if (res.response.ok){
      this.getComments(postId);
    }
  }

  render() {
    const { children } = this.props;
    return <StateContext.Provider value={{
        data: this.state,
        action: this.action
    }}>{children}</StateContext.Provider>;
  }
}

export default StateProvider;
