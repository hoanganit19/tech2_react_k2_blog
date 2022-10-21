import React, { Component } from 'react'
import withContext from '../../Services/Context/withContext'
import HttpClient from '../../Services/Helpers/Api/HttpClient';

const client = new HttpClient();

export class Home extends Component {

  constructor(props){
    super(props);
  }

  getPosts = async () => {
    const res = await client.get(client.users, {_limit: 2});
    console.log(res);
  }

  componentDidMount = () => {
    // const {store} = this.props;
    // store.action.getPosts(1);
    this.getPosts();
  }

  render() {
    const {store} = this.props;
    console.log(store.data);
    
    return (
      <h1>Home</h1>
    )
  }
}

export default withContext(Home)