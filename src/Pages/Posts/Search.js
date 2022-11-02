import config from "../../Configs/Config.json";

import React, { Component } from "react";
import withContext from "../../Services/Context/withContext";
import withRouter from "../../Services/Routes/withRouter";
import Sidebars from "../../Layouts/Sidebars/Sidebars";
import Alert from "../../Components/Alert/Alert";
import PostItem from "../../Components/PostItem/PostItem";

const { PER_PAGE } = config;

export class Search extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const [search] = this.props.search;
    const { getPosts, setKeyword } = this.props.store.action;
    if (search.get("keyword")) {
      const keyword = search.get("keyword");

      getPosts({ q: keyword }, PER_PAGE);

      setKeyword(keyword);
    }

  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.store.data.keyword!==this.props.store.data.keyword){
        const { getPosts, setKeyword } = this.props.store.action;
        getPosts({ q: this.props.store.data.keyword }, PER_PAGE);
    }
  };

  render() {
    const { postsList, keyword } = this.props.store.data;

    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-9" data-aos="fade-up">
              <h1 className="category-title">Keyword: {keyword}</h1>
              {postsList.length ? (
                postsList.map((post) => {
                  return <PostItem key={post.id} {...post} />;
                })
              ) : (
                <Alert type="danger" message="No Data" />
              )}
            </div>
            <Sidebars />
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(withContext(Search));
