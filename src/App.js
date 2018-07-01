import React, { Component } from 'react';
import Navbar from "./Navbar";
import NewsList from "./NewsList";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    this.setState({news: []});
    const newsURL = "https://newsapi.org/v2/everything?sources=the-times-of-india&pageSize=100&apiKey=816c141dbc5f43819973fa47631c4433";
    fetch(newsURL)
    .then((res) => {
      return res.json();
    })
    .then((news) => {
      return this.setState({news: news.articles});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getScienceNews() {
    this.setState({news: []});
    const newsURL = "https://newsapi.org/v2/everything?sources=new-scientist&pageSize=100&apiKey=816c141dbc5f43819973fa47631c4433";
    fetch(newsURL)
    .then((res) => {
      return res.json();
    })
    .then((news) => {
      return this.setState({news: news.articles});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getSportNews() {
    this.setState({news: []});
    const newsURL = "https://newsapi.org/v2/everything?q=football,cricket&pageSize=100&sortBy=publishedAt&apiKey=816c141dbc5f43819973fa47631c4433";
    fetch(newsURL)
    .then((res) => {
      return res.json();
    })
    .then((news) => {
      return this.setState({news: news.articles});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getEntertenmentNews() {
    this.setState({news: []});
    const newsURL = "https://newsapi.org/v2/everything?q=bollywood,hollywood&pageSize=100&sortBy=publishedAt&apiKey=816c141dbc5f43819973fa47631c4433";
    fetch(newsURL)
    .then((res) => {
      return res.json();
    })
    .then((news) => {
      return this.setState({news: news.articles});
    })
    .catch((err) => {
      console.log(err);
    })
  }



  render() {
    return (
      <div>
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
