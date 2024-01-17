import React from "react";
import { Link } from "react-router-dom";

function Feed() {
  return (
    <div className="Feed">
      <h1>Page Feed</h1>
      
      <Link to="/post"> <button>Add new post</button> </Link>
      
    </div>
  )
}

export default Feed