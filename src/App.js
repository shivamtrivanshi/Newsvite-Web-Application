import React, { Component } from 'react';
import Navbar from "./Navbar";
import NewsList from "./NewsList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar 
          allNews={this.componentDidMount.bind(this)}
          scienceNews={this.getScienceNews.bind(this)}
          sportNews={this.getSportNews.bind(this)}
          entertenmentNews={this.getEntertenmentNews.bind(this)}
        />
        <div className="container">
          <NewsList allNews={this.state.news} />
        </div>
      </div>
    );
  }
}

export default App;
