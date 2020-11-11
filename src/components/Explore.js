import React from "react";
import { Link } from "react-router-dom";
import "./Create.css";
import "./Explore.css";
import studenteco from "./img/ecostudents.jpg";
import lessplastic from "./img/lessplastic.jpg";
import paper from "./img/paper.webp";


function Explore() {
  return (
    <div >
      <div className="popoular">
      <h1>POPULAR ARTICLES</h1>
      </div>
      <div className="ArticleComponent">
        <Link to="/studentecco">
        <img id="ecostudentspicture" src={studenteco} alt="eco-picture" />
        </Link>
        <div className="textblog">
          <h3>10 Eco-Friendly Tips for Students!</h3>
        </div>
      </div>
      <div className="ArticleComponent">
        <Link>
        <img id="ecostudentspicture" src={lessplastic} alt="eco-picture" />
        </Link>
        <div className="textblog">
          <h3>9 tips for living with less plastic</h3>
        </div>
      </div>
      <div className="ArticleComponent">
        <Link>
        <img id="ecostudentspicture" src={paper} alt="eco-picture" />
        </Link>
        <div className="textblog">
          <h3>Is Wrapping Paper Recyclable?</h3>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Explore;
