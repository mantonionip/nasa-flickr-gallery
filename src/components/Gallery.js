import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Gallery extends Component {
    state = {
        isLoaded: false
    }

    truncate = (str) => {
        return str.length > 30 ? str.substring(0, 25) + "..." : str;
    }

    render() {
        return (
            <div>
                <div className="sort-container">
                    <Router>
                        <Route>
                            <Link to="/" onClick={() => this.props.clickSortDate()} style={{ textDecoration: 'none' }}>
                                <h4 className="">Sort by Date</h4>
                            </Link>
                                <Link to="/" onClick={() => this.props.clickSortViews()} style={{ textDecoration: 'none' }}>
                                <h4 className="">Sort by View</h4>
                            </Link>
                                <Link to="/" onClick={() => this.props.clickSortTitle()} style={{ textDecoration: 'none' }}>
                                <h4 className="">Sort by Name</h4>
                            </Link>
                        </Route>
                    </Router>
                </div>
                <div className="gallery-container wrapper">
                    {this.props.sortedPhotos.map((item, index) =>
                        <div className="" key={item.id}>
                            <div className="card-container">
                                <div className="img-container">
                                    <img className="img-card" src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg}`} alt="{item.title}"/>
                                </div>
                                <div className="info-container">
                                    <h3>{this.truncate(item.title)}</h3>
                                    <p>Date taken: <span>{item.datetaken}</span></p>
                                    <p>Views on Flickr: <span>{item.views}</span></p>
                                </div>
                            </div>
                        </div>
                        )}
                </div>
            </div>
        );
    }
}

export default Gallery;