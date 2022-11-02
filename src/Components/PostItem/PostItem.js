import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Url from "../../Services/Helpers/Url/Url";

const url = new Url();
export class PostItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {id, title, thumbnail, category, user, created_at, excerpt} = this.props;
    return (
      <div className="d-md-flex post-entry-2 half">
        <Link to={url.getPost(id, title)} className="me-4 thumbnail">
          <img src={thumbnail} alt={title} className="img-fluid" />
        </Link>
        <div>
          <div className="post-meta">
            <span className="date">{category?.name}</span>{" "}
            <span className="mx-1">•</span>{" "}
            <span>{moment(created_at).format("DD/MM/yyyy HH:mm:ss")}</span>
          </div>
          <h3>
            <Link to={url.getPost(id, title)} className="me-4 thumbnail">
              {title}
            </Link>
          </h3>
          <p>{excerpt}</p>
          <div className="d-flex align-items-center author">
            <div className="photo">
              <img src={user?.avatar} alt="" className="img-fluid" />
            </div>
            <div className="name">
              <h3 className="m-0 p-0">{user?.name}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostItem;
