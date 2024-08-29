import React from "react";
import "./CountItems.css"; // Import your CSS file

function CountItems(props) {
  return (
    <>
      {props.results.length > 0 && (
        <div className="count-items">
          <p className="item-count">{props.results.length} item left!</p>
          <div className="button-group">
            <button onClick={props.handleAll} className="filter-button">
              All
            </button>
            <button onClick={props.handleActive} className="filter-button">
              Active
            </button>
            <button onClick={props.handleCompleted} className="filter-button">
              Completed
            </button>
          </div>
          <button className="clear-button" onClick={props.handleClear}>
            Clear Completed
          </button>
        </div>
      )}
    </>
  );
}

export default CountItems;
