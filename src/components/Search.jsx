import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import "./Search.css"; // Make sure to import your CSS file

function Search(props) {
  return (
    <form onSubmit={props.onSubmit} className="search-form">
      <div className="icon">
        {props.showItem ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
      </div>
      <input
        type="text"
        value={props.todo}
        onChange={props.onChange}
        placeholder="What needs to be done?"
        className="search-input"
      />
    </form>
  );
}

export default Search;
