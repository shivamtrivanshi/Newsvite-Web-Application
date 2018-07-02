import React, { Component } from 'react';
import Navbar from "./Navbar";
import NewsList from "./NewsList";
import apiKey from "./config/keys"; 
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
    const newsURL = `https://newsapi.org/v2/everything?sources=the-times-of-india,the-hindu&language=en&pageSize=100&sortBy=publishedAt&apiKey=${apiKey.apiKey}`;
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
    const newsURL = `https://newsapi.org/v2/everything?sources=national-geographic,next-big-future&pageSize=100&sortBy=publishedAt&apiKey=${apiKey.apiKey}`;
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
    const newsURL = `https://newsapi.org/v2/everything?sources=bleacher-report,the-times-of-india,the-hindu&q=cricket,football&pageSize=100&sortBy=publishedAt&apiKey=${apiKey.apiKey}`;
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
    const newsURL = `https://newsapi.org/v2/everything?sources=buzzfeed,entertainment-weekly,ign,mtv-news&language=en&pageSize=100&sortBy=publishedAt&apiKey=${apiKey.apiKey}`;
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

  getPoliticsNews() {
    this.setState({news: []});
    const newsURL = `https://newsapi.org/v2/everything?sources=the-times-of-india,the-hindu&q=politic&pageSize=100&sortBy=publishedAt&apiKey=${apiKey.apiKey}`;
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

  getBusinessNews() {
    this.setState({news: []});
    const newsURL = `https://newsapi.org/v2/everything?sources=the-times-of-india,the-hindu&q=business&pageSize=100&sortBy=publishedAt&apiKey=${apiKey.apiKey}`;
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

  getTechnologyNews() {
    this.setState({news: []});
    const newsURL = `https://newsapi.org/v2/everything?sources=wired,the-verge,the-next-web,techcrunch,techradar&language=en&pageSize=100&sortBy=publishedAt&apiKey=${apiKey.apiKey}`;
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

  getMoviesNews() {
    this.setState({news: []});
    const newsURL = `https://newsapi.org/v2/everything?q=movies&language=en&pageSize=100&sortBy=publishedAt&apiKey=${apiKey.apiKey}`;
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

  getCricketNews() {
    this.setState({news: []});
    const newsURL = `https://newsapi.org/v2/everything?sources=espn-cric-info&language=en&pageSize=100&sortBy=publishedAt&apiKey=${apiKey.apiKey}`;
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


  getBollyWoodNews() {
    this.setState({news: []});
    const newsURL = `https://newsapi.org/v2/everything?q=bollywood&pageSize=100&language=en&sortBy=publishedAt&apiKey=${apiKey.apiKey}`;
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


  getHollywoodNews() {
    this.setState({news: []});
    const newsURL = `https://newsapi.org/v2/everything?q=hollywood&pageSize=100&language=en&sortBy=publishedAt&apiKey=${apiKey.apiKey}`;
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
          politicsNews={this.getPoliticsNews.bind(this)}
          businessNews={this.getBusinessNews.bind(this)}
          technologyNews={this.getTechnologyNews.bind(this)}
          moviesNews={this.getMoviesNews.bind(this)}
          cricketNews={this.getCricketNews.bind(this)}
          bollywoodNews={this.getBollyWoodNews.bind(this)}
          hollywoodNews={this.getHollywoodNews.bind(this)}
        />
        <div className="container">
            <NewsList allNews={this.state.news} />
        </div>
      </div>
    );
  }
}

export default App;
