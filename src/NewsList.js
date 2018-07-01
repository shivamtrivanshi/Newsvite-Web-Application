import React, {Component} from "react";
import "./NewsList.css";
import News from "./News";

class NewsList extends Component {
  render() {
    let views =   <div className="loader center">
                    <div className="preloader-wrapper big active">
                      <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                          <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                          <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                          <div className="circle"></div>
                        </div>
                      </div>
                    </div>
                  </div>
    const {allNews} = this.props;
    if(allNews && allNews.length > 0) {
      views = <div className="card-columns">{
      allNews.map((news, i) => (
        <News key={i} {...news} />
      ))}
      </div>
    }
    return(
      <div className="row">
      <div className="col s12">
          {views}
      </div>
      </div>
    )
  }
}

export default NewsList;