import React from "react";
import "./ShowResults.css";

function ShowResults(props) {
  return (
    <div className="results-container">
      {props.results &&
        props.results.map((result) => (
          <div className="result-item" key={result.id}>
            <input
              type="checkbox"
              className="result-checkbox"
              onChange={props.onChange}
              value={result.id}
            />
            <p className="result-text">{result.todo}</p>
          </div>
        ))}
    </div>
  );
}

export default ShowResults;
