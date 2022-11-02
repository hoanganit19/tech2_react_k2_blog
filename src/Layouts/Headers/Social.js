import React, { Component, createRef } from "react";
import withRouter from "../../Services/Routes/withRouter";
import withContext from "../../Services/Context/withContext";
import Url from "../../Services/Helpers/Url/Url";

const url = new Url();

export class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
    this.closeSearchRef = createRef();
  }

  handleSearch = (e) => {
    e.preventDefault();

    const {keyword} = this.state; //state nội bộ

    const {setKeyword} = this.props.store.action;

    if (keyword!==''){
      const {navigate} = this.props;
    
      const path = url.search+'?keyword='+keyword;
      
      navigate(path);
  
      this.closeSearchRef.current.click();
  
      setKeyword(keyword);

      this.setState({
        keyword: ''
      })

    }else{
      alert('Vui lòng nhập từ khoá');
    }
    
  };

  handleChangeValue = (e) => {
    
    this.setState({
      keyword: e.target.value,
    });
  };

  render() {
    const { facebook, twitter, intagram } = this.props;
    const {keyword} = this.state;
    return (
      <div className="position-relative">
        <a href={facebook} className="mx-2" target="_blank">
          <span className="bi-facebook" />
        </a>
        <a href={twitter} className="mx-2" target="_blank">
          <span className="bi-twitter" />
        </a>
        <a href={intagram} className="mx-2" target="_blank">
          <span className="bi-instagram" />
        </a>
        <a href="#" className="mx-2 js-search-open">
          <span className="bi-search" />
        </a>
        <i className="bi bi-list mobile-nav-toggle" />
        {/* ======= Search Form ======= */}
        <div className="search-form-wrap js-search-form-wrap">
          <form action="" className="search-form" onSubmit={this.handleSearch}>
            <span className="icon bi-search" />
            <input
              type="text"
              name="keyword"
              placeholder="Search"
              className="form-control"
              onChange={this.handleChangeValue}
              value={keyword}
            />
            <button type="submit" style={{display: 'none'}}></button>
            <button className="btn js-search-close" ref={this.closeSearchRef}>
              <span className="bi-x" />
            </button>
          </form>
        </div>
        {/* End Search Form */}
      </div>
    );
  }
}

export default withContext(withRouter(Social));
