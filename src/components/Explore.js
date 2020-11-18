import React from "react";
import { Link } from "react-router-dom";
import "./Explore.css";
import studenteco from "./img/ecostudents.jpg";
import lessplastic from "./img/lessplastic.jpg";
import paper from "./img/paper.webp";
import Leaf from "./Leaf.js";


function Explore() {
  return (
    <div className="popoular" >
       <Leaf></Leaf>
      <h1>Popular Articles</h1>
     
      <hr/>
      <br/>
      <div className="ArticleComponent">
        <Link to="/studentecco">
        <img id="ecostudentspicture" src={studenteco} alt="eco-picture" />
        <h3>10 Eco-Friendly Tips for Students!</h3>
        </Link>
      </div>
      <div className="ArticleComponent">
        <Link to="/plasticarticle">
        <img id="ecostudentspicture" src={lessplastic} alt="eco-picture" />
        <h3>9 tips for living with less plastic</h3>
        </Link>
      </div>
      <div className="ArticleComponent">
        <Link to="/paperarticle">
        <img id="ecostudentspicture" src={paper} alt="eco-picture" />
        <h3>Is Wrapping Paper Recyclable?</h3>
        </Link>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Explore;
