import React, {Component} from "react";
import "./News.css";

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      urlToImage: "news.jpg"
    }
  }


  render() {         
    return(
      <div className="card">
      <div className="card-image">
        <img
        src={this.props.urlToImage === null || "" ? this.state.urlToImage : this.props.urlToImage} alt="ImageNotFound"/>
      </div>
      <div className="card-content">
        <span className="card-title">{this.props.title}</span>
        <p className="justify">{this.props.description}</p>
      </div>
      <div className="card-action">
        <a href={this.props.url} target="_blank" className="btn">Show More</a>
      </div>
    </div>   
    )
  }
}

export default News;