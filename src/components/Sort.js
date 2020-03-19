import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Sort = (props) => (
    <Router>
        <div className="sort-container">
            <Route>
                <button
                    className="sort-button"
                    onClick={props.clickSortDate}
                >
                Sort by Date
                </button>
            </Route>
            <Route>
                <button
                    className="sort-button"
                    onClick={props.clickSortViews}
                >
                Sort by View
                </button>
            </Route>
            <Route>
                <button
                    className="sort-button"
                    onClick={props.clickSortTitle}
                >
                Sort by Name
                </button>
            </Route>
        </div>
    </Router>
);

export default Sort;