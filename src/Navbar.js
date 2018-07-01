import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {

  render() {
    return(
      <div className="navbar-fixed">
        <nav className="#ee6e73">
          <div className="nav-wrapper">
            <div className="col s12">
            <a className="brand-logo left">News Vite</a>
            <a className='dropdown-trigger right hide-on-med-and-up' data-target='dropdown1'><i className="material-icons">more_vert</i></a>
            <ul className="right hide-on-small-only">
              <li><a onClick={this.props.allNews}>Headlines</a></li>
              <li><a onClick={this.props.scienceNews}>Science</a></li>
              <li><a onClick={this.props.sportNews}>Sports</a></li>
              <li><a onClick={this.props.entertenmentNews}>Entertenment</a></li>
              <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">More<i className="material-icons right show-on-med-and-up">arrow_drop_down</i></a></li>
            </ul>
            <ul id="dropdown2" className="dropdown-content">
              <li><a onClick={this.props.politicsNews}>Politics</a></li>
              <li><a onClick={this.props.businessNews}>Business</a></li>
              <li><a onClick={this.props.technologyNews}>Technology</a></li>
              <li><a onClick={this.props.moviesNews}>Movies</a></li>
              <li><a onClick={this.props.cricketNews}>Cricket</a></li>
            </ul>

            <ul id='dropdown1' className='dropdown-content'>
              <li><a onClick={this.props.allNews}>Headlines</a></li>
              <li><a onClick={this.props.scienceNews}>Science</a></li>
              <li><a onClick={this.props.sportNews}>Sports</a></li>
              <li><a onClick={this.props.entertenmentNews}>Entertenment</a></li>
              <li><a onClick={this.props.politicsNews}>Politics</a></li>
              <li><a onClick={this.props.businessNews}>Business</a></li>
              <li><a onClick={this.props.technologyNews}>Technology</a></li>
              <li><a onClick={this.props.moviesNews}>Movies</a></li>
              <li><a onClick={this.props.cricketNews}>Cricket</a></li>
            </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;