import React from "react";
import { Link } from "react-router-dom";

function Post() {
  return (
    <div className="Post">
      <h1>Page Post</h1>
      <Link to="/"> <button>Voltar pro Feed</button> </Link>
    </div>
  )
}

export default Post