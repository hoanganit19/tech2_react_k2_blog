import React, { Component } from "react";

export const StateContext = React.createContext();

export class StateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
        msg: "Tech2"
    }

    //Đăng ký các action
    this.action = {
        getPosts: this.getPosts
    }
  }

  getPosts = (categoryId) => {
    console.log(categoryId);
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
