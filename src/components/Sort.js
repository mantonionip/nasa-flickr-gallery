import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <div className="App">
                <div className="sort-container">
                    <button
                        className="sort-button"
                        onClick={this.props.clickSortDate}
                    >
                        Sort by Date
                    </button>
                    <button
                        className="sort-button"
                        onClick={this.props.clickSortViews}
                    >
                        Sort by View
                    </button>
                    <button
                        className="sort-button"
                        onClick={this.props.clickSortTitle}
                    >
                        Sort by Name
                    </button>
                </div>
            </div>
        );
    }
}

export default Sort;