import React, { Component, Fragment } from 'react';
import './styles/Style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Sort from './components/Sort';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.clickSortDate = this.clickSortDate.bind(this);
    this.clickSortViews = this.clickSortViews.bind(this);
    this.clickSortTitle = this.clickSortTitle.bind(this);
    this.state = {
      photos: props.photos,
      sortedPhotos: props.sortedPhotos
    };
    this.apiKey = `a5e95177da353f58113fd60296e1d250`;
    this.nasaUserID = `24662369@N07`;
  }

  // Lifecycle Method - Fetching the Data
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
    this.setState(() => ({ sortedPhotos: sortedDates })); // implicit return
  };

  // Sorting photos by numnber of views using ternary operator
  clickSortViews = () => {
    const sortByViews = this.state.sortedPhotos.sort((a, b) => b.views - a.views);
    this.setState(() => ({ sortedPhotos: sortByViews })); // implicit return
  }

  // Sorting photos by title using ternary operator
  clickSortTitle = () => {
    const sortByTitle = this.state.sortedPhotos.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
    this.setState(() => {
      return {
        sortedPhotos: sortByTitle
      } //explicit return
    });
  }

  render() {
    return (
      <Fragment>
      <Header />
      <Router>
        <Route path="/" exact render={() => 
          <Sort 
          clickSortDate={this.clickSortDate}
          clickSortViews={this.clickSortViews}
          clickSortTitle={this.clickSortTitle}
          />
        } />
        <Route path="/" exact render={() => 
          <Gallery 
          sortedPhotos={this.state.sortedPhotos}
          photos={this.state.photos}  
          />
        } /> 
      </Router>      
      <Footer />
      </Fragment>
    );
  }
}

App.defaultProps = {
  photos: [],
  sortedPhotos: []
}

export default App;