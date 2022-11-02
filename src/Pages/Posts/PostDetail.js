import React, { Component } from 'react'
import withRouter from '../../Services/Routes/withRouter'

export class PostDetail extends Component {
    constructor(props){
        super(props);
    }
  render() {
    const {id} = this.props.params;
    return (
      <div>PostDetail: {id}</div>
    )
  }
}

export default withRouter(PostDetail)