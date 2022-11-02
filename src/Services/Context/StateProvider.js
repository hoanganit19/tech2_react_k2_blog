import React, { Component } from "react";
import HttpClient from "../Helpers/Api/HttpClient";

const client = new HttpClient();

export const StateContext = React.createContext();

export class StateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: [],
      keyword: ''
    }

    //Đăng ký các action
    this.action = {
        getPosts: this.getPosts,
        setKeyword: this.setKeyword
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
        console.log(postsList);
        this.setState({
          postsList: postsList
        })
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
