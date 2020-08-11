import React from "react";
import { Link, Route } from "react-router-dom";

// Nested Routing. Creating new navigation just in the Category component.
const Category = ({ match }) => {
  return (
    <div>
      {" "}
      <ul>
        <li>
            {/* match.url will be used for building nested links */}
          <Link to={`${match.url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${match.url}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${match.url}/footwear`}>Footwear</Link>
        </li>
      </ul>
      <Route
    //   match.path is used for nested routes
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            {" "}
            <h3> {match.params.name} </h3>
          </div>
        )}
      />
      {/* add a console.log to see the match object contents. */}
    { console.log(match) }
    </div>
  );
};

export default Category;