import React from 'react';

const Sort = (props) => (
    <div>
        <div className="sort-container">
            <button
                className="sort-button"
                onClick={props.clickSortDate}
            >
            Sort by Date
            </button>
            <button
                className="sort-button"
                onClick={props.clickSortViews}
            >
            Sort by View
            </button>
            <button
                className="sort-button"
                onClick={props.clickSortTitle}
            >
            Sort by Name
            </button>
        </div>
    </div>
);

export default Sort;