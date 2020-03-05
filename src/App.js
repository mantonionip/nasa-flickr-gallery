import React, { Component, Fragment } from 'react';
import './styles/Style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      sortedPhotos: []
    };
    this.apiKey = process.env.REACT_APP_FLICKR_API_KEY;
    this.nasaUserID = process.env.REACT_APP_NASA_USER_ID;
  }

  componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${this.apiKey}&user_id=${this.nasaUserID}&extras=date_upload%2C+date_taken%2C+owner_name%2C+views&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          photos: res.data.photos.photo,
          sortedPhotos: res.data.photos.photo
        });
      }).catch((err) => {
        if (axios.isCancel(err) || err) {
          this.setState({
            loading: false,
            message: 'Failed to fetch the data. Please check network!'
          })
        }
      });
  }

  // Sorting photo by the date taken using if else statement
  sortByDate = items => {
    return items.sort(function(a, b) {
      const keyA = new Date(a.datetaken),
            keyB = new Date(b.datetaken);
      if(keyA > keyB) return -1;
      if(keyA < keyB) return 1;
      return 0;
    });
  };

  clickSortDate = () => {
    const sortedDates = this.sortByDate(this.state.sortedPhotos);
    this.setState({
      sortedPhotos: sortedDates
    });
  };

  // Sorting photos by numnber of views
  clickSortViews = () => {
    const sortByViews = this.state.sortedPhotos.sort(function(a, b) {
      return b.views - a.views
    })
    this.setState({
      sortedPhotos: sortByViews
    })
  }

  // Sorting photos by title using ternary operator
  clickSortTitle = () => {
    const sortByTitle = this.state.sortedPhotos.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
    this.setState({
      sortedPhotos: sortByTitle
    })
  }

  render() {
    return (
      <Fragment>
      <Header />
        <div className="">
          <Router>
            <Route path="/" exact render={() => 
              <Gallery 
                clickSortDate={this.clickSortDate}
                clickSortViews={this.clickSortViews}
                clickSortTitle={this.clickSortTitle}
                sortedPhotos={this.state.sortedPhotos}
                photos={this.state.photos}  
              />
            } /> 
          </Router>      
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;