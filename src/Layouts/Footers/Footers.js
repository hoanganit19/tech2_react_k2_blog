import React, { Component } from "react";
import Copyright from "./Copyright";
import FooterTop from "./FooterTop";
import Social from "./Social";
import HttpClient from "../../Services/Helpers/Api/HttpClient";

const client = new HttpClient();

export class Footers extends Component {
  constructor(props){
    super(props);
    this.state = {
      about: {},
      menus: {},
      categories: {},
      posts: {},
      recentPosts: []
    }
  }

  getRecentPosts = async (limit) => {
    const res = await client.get(client.posts, {_limit: limit, _expand: 'category'});
    if (res.response.ok) {
      const data = res.data;
      
      this.setState({
        recentPosts: data
      })
    }
  }

  getOptions = async () => {
    const res = await client.get(client.options);

    if (res.response.ok) {
      const data = res.data;

    
      this.setState({
        about: data.footer.about,
        menus: data.footer.menus,
        categories: data.footer.categories,
        posts: data.footer.posts
      })

      this.getRecentPosts(data.footer.posts.limit);
     
    }
  };

  componentDidMount = () => {
    this.getOptions();
  
  }

  render() {
  
    return (
      <>
        {/* ======= Footer ======= */}
        <footer id="footer" className="footer">
          <FooterTop {...this.state}/>
          <div className="footer-legal">
            <div className="container">
              <div className="row justify-content-between">
                <Copyright />
                <Social />
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footers;
