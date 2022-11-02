import config from "../../Configs/Config.json";
import Error404 from "../../Errors/Error404";
import React, { Component } from "react";
import Sidebars from "../../Layouts/Sidebars/Sidebars";
import withRouter from "../../Services/Routes/withRouter";
import withContext from "../../Services/Context/withContext";
import HttpClient from "../../Services/Helpers/Api/HttpClient";
import PostItem from "../../Components/PostItem/PostItem";
import Alert from "../../Components/Alert/Alert";

const client = new HttpClient();

const { PER_PAGE } = config;

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
      status: "pending",
    };
  }

  getCategory = async (id) => {
    const res = await client.get(`${client.categories}/${id}`);

    if (res.response.ok) {
      this.setState({
        category: res.data,
        status: "success",
      });
    } else {
      this.setState({
        status: "notfound",
      });
    }
  };

  componentDidMount = () => {
    const { id } = this.props.params;

    this.getCategory(id);

    const { getPosts } = this.props.store.action;

    getPosts(
      {
        categoryId: id,
      },
      PER_PAGE
    );
  };

  render() {
    const { postsList } = this.props.store.data;
    const { category, status } = this.state;
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-9" data-aos="fade-up">
              {status === "notfound" ? (
                <Error404 />
              ) : (
                <>
                  <h1 className="category-title">{category?.name}</h1>
                  {postsList.length ? (
                    postsList.map(
                      (post) => {
                        return (
                          <PostItem key={post.id} {...post}/>
                        );
                      }
                    )
                  ) : (
                    <Alert type="danger" message="No Data" />
                  )}
                </>
              )}
            </div>
            <Sidebars />
          </div>
        </div>
      </section>
    );
  }
}

export default withContext(withRouter(Posts));
