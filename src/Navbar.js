import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {

  render() {
    return(
      <div className="navbar-fixed">
        <nav className="#ee6e73">
          <div className="nav-wrapper">
            <div className="col s12">
            <a className="brand-logo left">News Buster</a>
            <a className='dropdown-trigger right hide-on-med-and-up' data-target='dropdown1'><i className="material-icons">more_vert</i></a>
            <ul className="right hide-on-small-only">
              <li><a onClick={this.props.allNews}>All</a></li>
              <li><a onClick={this.props.scienceNews}>Science</a></li>
              <li><a onClick={this.props.sportNews}>Sports</a></li>
              <li><a onClick={this.props.entertenmentNews}>Entertenment</a></li>
            </ul>

            <ul id='dropdown1' className='dropdown-content'>
              <li><a onClick={this.props.allNews}>All</a></li>
              <li><a onClick={this.props.scienceNews}>Science</a></li>
              <li><a onClick={this.props.sportNews}>Sports</a></li>
              <li><a onClick={this.props.entertenmentNews}>Entertenment</a></li>
            </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;