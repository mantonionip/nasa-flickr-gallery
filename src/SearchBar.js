import React, { Component } from 'react';

class SearchBar extends Component {

    render() {
        return (
            <label className="search-label" htmlFor="search-input">
                <input 
                    className="search-input"
                    type="text" 
                    name="search"
                    value=""
                    id="search-input"
                    placeholder="Search..." 
                />
                <i className="fa fa-search search-icon" aria-hidden="true"></i>
            </label>
        );
    }
}

export default SearchBar;       