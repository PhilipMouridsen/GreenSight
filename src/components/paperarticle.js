import React from "react";
import "./Explore.css";
import paper from "./img/paper.jpg";


function paperarticle() {
  return (
    <div>
     <h1 id="header">9 tips for living with less plastic</h1>
     <img id="stupidpicture" src={paper} alt="eco-picture" />
     <div className="article">
        <p>Christmas is a time of excess – too much food, too many presents, and way too much packaging. While the food and presents may be welcome, excess packing that adds to the ever-mounting pile of needless waste is certainly not. As well as being expensive, wrapping paper is unnecessary – no one really cares about it bar the initial polite comment by the receiver that it is well wrapped!</p>
        <p>If you haven't done your wrapping yet, why not go green this Christmas and try out some of these alternative and more eco-friendly wrapping alternatives.</p>
     <div className="tip">
        <h3>1. Newspaper</h3>
        <p>Every house has lots of old newspapers lying around so why not give them a second life to wrap a gift? Double wrapping the paper will add an extra layer of thickness to prevent it from ripping on transit and make use of more unwanted paper. You can also dress it up with ribbon or give it a more vintage feel of Christmas’ past with some twine.</p>
     </div>
     <div className="tip">
        <h3>2. Chose your wrapping wisely</h3>
        <p>Instead of using wrapping paper why not opt for a reusable tote bag or a scarf and incorporate the wrapping into the gift. That way you are gifting the person with an extra reusable gift. While some tote bags are expensive there are many far cheaper alternatives that will encourage your friend to use it as a shopping bag, too, to keep them to their new plastic-free resolutions in the New Year! A scarf can also be nicely tied up and make the present look more interesting and impressive.</p>
     </div>
     <div className="tip">
        <h3>3. Boxes</h3>
        <p>One I’ve tried before which was great fun - if somewhat messy - is to use old cereal boxes, empty bar boxes and brown paper bags and fit one inside the other so they have to keep unwrapping until they get to the gift. Although there is a lot of packaging involved, it should all be waste from other products and it’s great fun to watch your friend going box by box wondering if they are nearly at the end</p>
     </div>
     <div className="tip">
        <h3>4. Recycle</h3>
        <p>Use whatever kind of material you have around the house that you are likely to be getting rid of soon. This could be a map from a holiday you took years ago that you know you will never use again (except for some really cool wrapping paper!) or maybe a colorful old sheet that could sort you out for every present you need to wrap this year.</p>
     </div>
     </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default paperarticle;