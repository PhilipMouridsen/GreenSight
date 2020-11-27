import React from "react";
import "./Explore.css";
import stupidpicture from "./img/green.jpeg";
import back from "../components/img/arrow.png";
import { Link } from "react-router-dom";

function studentecco() {
  return (
    <div>
      <div className="back">
        <Link to="/explore">
          <img src={back} alt="back-button" id="backbutton" />
        </Link>
      </div>
      <h1 id="header">10 Eco-Friendly Tips for Students</h1>
      <img id="stupidpicture" src={stupidpicture} alt="eco-picture" />
      <div className="article">
        <p>
          Leading an environmentally friendly lifestyle when you're at uni can
          be a challenge. That’s why we’ve come up with 10 easy ways to become a
          more eco-friendly student. The best part? You won't have to spend a
          fortune or put loads of effort in!
        </p>
        <div className="tip">
          <h3>1. Use canvas bags</h3>
          <p>
            We know plastic bags haven’t been free from supermarkets or large
            retailers for about two years now, but this is still a point worth
            reiterating! If you can use a canvas bag or reuse a plastic one so
            that you’re getting lots of use out of it rather than buying a new
            one that just ends up in landfill, then this is an easy way to
            lessen your impact on the environment.
          </p>
        </div>
        <div className="tip">
          <h3>2. Eat less meat</h3>
          <p>
            Hear us out! We’re not saying that you have to turn veggie
            indefinitely or adopt the diet of this bunny (however cute he may
            be!), but by cutting down on your meat consumption, you’ll be
            helping the environment.
          </p>
        </div>
        <div className="tip">
          <h3>3. Don’t always buy new</h3>
          <p>
            As a society, it’s often our instinct to buy new because it’s so
            easy. But that’s not always the best option for the environment. Why
            not borrow books from the library instead of buying them or read
            digital versions of your course texts?
          </p>
        </div>
        <div className="tip">
          <h3>4. Bin the microbeads</h3>
          <p>
            These are the little plastic beads that can often be found in face
            and body scrubs, as well as toothpastes. Research in recent years
            has found just how damaging these tiny pieces of plastic (up to
            100,000 of which flow through the sewage system following a single
            use of a product containing them) are to marine life, as well as the
            extensive impact they have all the way up the food chain after being
            ingested by animals in the sea.
          </p>
        </div>
        <div className="tip">
          <h3>5. Say No! To Paper</h3>
          <p>
            While most of us are comfortably living in the 21st century by now,
            some companies still haven't got the memo. They insist on sending
            you physical product catalogues in the post and we're wondering just
            when they're going to discover email? We don’t need paper copies for
            anything any more, so an easy way to become more eco-friendly is to
            unsubscribe from catalogues like this and go paperless for things
            like bills.
          </p>
        </div>
        <div className="tip">
          <h3>6. Make yourself a packed lunch</h3>
          <p>
            We know it can be difficult to get organised enough to do this, and
            it definitely seems easier to buy yourself some lunch and a coffee
            once you get to uni. However, you might change your mind when you
            stop to think about how much packaging and materials that uses and
            how much money you’re spending!
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default studentecco;
