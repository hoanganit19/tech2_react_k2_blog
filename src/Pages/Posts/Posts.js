import React, { Component } from "react";
import Sidebars from "../../Layouts/Sidebars/Sidebars";
import withRouter from "../../Services/Routes/withRouter";
import HttpClient from "../../Services/Helpers/Api/HttpClient";

const client = new HttpClient();

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const {id} = this.props.params;
    console.log(id);
  }

  render() {
    
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-9" data-aos="fade-up">
              <h3 className="category-title">Category: Business</h3>
              <div className="d-md-flex post-entry-2 half">
                <a href="single-post.html" className="me-4 thumbnail">
                  <img
                    src="assets/img/post-landscape-6.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <div>
                  <div className="post-meta">
                    <span className="date">Culture</span>{" "}
                    <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h3>
                    <a href="single-post.html">
                      What is the son of Football Coach John Gruden, Deuce
                      Gruden doing Now?
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio placeat exercitationem magni voluptates dolore.
                    Tenetur fugiat voluptates quas, nobis error deserunt aliquam
                    temporibus sapiente, laudantium dolorum itaque libero eos
                    deleniti?
                  </p>
                  <div className="d-flex align-items-center author">
                    <div className="photo">
                      <img
                        src="assets/img/person-2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name">
                      <h3 className="m-0 p-0">Wade Warren</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-md-flex post-entry-2 half">
                <a href="single-post.html" className="me-4 thumbnail">
                  <img
                    src="assets/img/post-landscape-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <div>
                  <div className="post-meta">
                    <span className="date">Culture</span>{" "}
                    <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h3>
                    <a href="single-post.html">
                      What is the son of Football Coach John Gruden, Deuce
                      Gruden doing Now?
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio placeat exercitationem magni voluptates dolore.
                    Tenetur fugiat voluptates quas, nobis error deserunt aliquam
                    temporibus sapiente, laudantium dolorum itaque libero eos
                    deleniti?
                  </p>
                  <div className="d-flex align-items-center author">
                    <div className="photo">
                      <img
                        src="assets/img/person-2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name">
                      <h3 className="m-0 p-0">Wade Warren</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-md-flex post-entry-2 half">
                <a href="single-post.html" className="me-4 thumbnail">
                  <img
                    src="assets/img/post-landscape-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <div>
                  <div className="post-meta">
                    <span className="date">Culture</span>{" "}
                    <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h3>
                    <a href="single-post.html">
                      What is the son of Football Coach John Gruden, Deuce
                      Gruden doing Now?
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio placeat exercitationem magni voluptates dolore.
                    Tenetur fugiat voluptates quas, nobis error deserunt aliquam
                    temporibus sapiente, laudantium dolorum itaque libero eos
                    deleniti?
                  </p>
                  <div className="d-flex align-items-center author">
                    <div className="photo">
                      <img
                        src="assets/img/person-2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name">
                      <h3 className="m-0 p-0">Wade Warren</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-md-flex post-entry-2 half">
                <a href="single-post.html" className="me-4 thumbnail">
                  <img
                    src="assets/img/post-landscape-3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <div>
                  <div className="post-meta">
                    <span className="date">Culture</span>{" "}
                    <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h3>
                    <a href="single-post.html">
                      What is the son of Football Coach John Gruden, Deuce
                      Gruden doing Now?
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio placeat exercitationem magni voluptates dolore.
                    Tenetur fugiat voluptates quas, nobis error deserunt aliquam
                    temporibus sapiente, laudantium dolorum itaque libero eos
                    deleniti?
                  </p>
                  <div className="d-flex align-items-center author">
                    <div className="photo">
                      <img
                        src="assets/img/person-2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name">
                      <h3 className="m-0 p-0">Wade Warren</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-md-flex post-entry-2 half">
                <a href="single-post.html" className="me-4 thumbnail">
                  <img
                    src="assets/img/post-landscape-4.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <div>
                  <div className="post-meta">
                    <span className="date">Culture</span>{" "}
                    <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h3>
                    <a href="single-post.html">
                      What is the son of Football Coach John Gruden, Deuce
                      Gruden doing Now?
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio placeat exercitationem magni voluptates dolore.
                    Tenetur fugiat voluptates quas, nobis error deserunt aliquam
                    temporibus sapiente, laudantium dolorum itaque libero eos
                    deleniti?
                  </p>
                  <div className="d-flex align-items-center author">
                    <div className="photo">
                      <img
                        src="assets/img/person-2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name">
                      <h3 className="m-0 p-0">Wade Warren</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-start py-4">
                <div className="custom-pagination">
                  <a href="#" className="prev">
                    Prevous
                  </a>
                  <a href="#" className="active">
                    1
                  </a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                  <a href="#" className="next">
                    Next
                  </a>
                </div>
              </div>
            </div>
            <Sidebars />
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Posts);
