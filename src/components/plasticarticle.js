import React from "react";
import "./Explore.css";
import plastic from "./img/plasticbad.jpg";
import back from "../components/img/arrow.png";
import { Link } from "react-router-dom";

function plasticarticle() {
  return (
    <div>
      <div className="back">
        <Link to="/explore">
          <img src={back} alt="back-button" id="backbutton" />
        </Link>
      </div>
      <h1 id="header">9 tips for living with less plastic</h1>
      <img id="stupidpicture" src={plastic} alt="eco-picture" />
      <div className="article">
        <p>
          When we read about the scale of plastic waste clogging our landfills,
          and polluting our oceans, it’s tempting to feel overwhelmed, and
          question whether anything we can personally do would realistically
          make a difference to this mammoth issue. However, the truth is that
          even small changes of habit, accumulated over time, add up to a big
          difference. Then when you factor in that there are lots of like-minded
          people making the same positive changes as you, to reduce the plastic
          waste they are creating, you can see that together we can make a
          massive difference for the better
        </p>
        <div className="tip">
          <h3>1. Bring your own shopping bag</h3>
          <p>
            Plastic bags are generally used for a matter of minutes before being
            discarded, and then take hundreds of years to break down. Most of us
            own reusable bags, but the challenge is remembering to have them
            with us when we need them. One easy way to remember is to always
            keep a reusable bag (or bags) by your front door, in your handbag,
            laptop bag, coat pocket, glove compartment… wherever works for you.
            If you do forget, instead of accepting a plastic bag on auto pilot,
            see if you can manage without. Often we can simply carry the items
            loose. Once you have successfully adopted the habit to always bring
            your own reusable bag, consider going one step further and
            persuading your local town to go plastic bag-free!
          </p>
        </div>
        <div className="tip">
          <h3>2. Carry a reusable water bottle</h3>
          <p>
            Plenty of research has highlighted that as well as being less
            eco-friendly, bottled water is actually less healthy than tap water,
            despite the bottled water companies’ best marketing efforts to
            convince us otherwise. The bottled water industry is far less
            regulated than tap water in the UK, so when we buy bottled water we
            have much less reassurance about the quality of the water we are
            drinking. Meanwhile the toxins from the plastic water bottles have
            been found to leach into the water, particularly when the bottle is
            used more than once, or has been left in the light or heat for
            anytime, which could have happened during transit. The healthier,
            and more planet-friendly, option is to carry your own reusable water
            bottle that you refill with tap water at home, work, the gym, or
            even by popping into a local café
          </p>
        </div>
        <div className="tip">
          <h3>3. Bring your own cup</h3>
          <p>
            Today it’s common to spend our days racing from one commitment to
            the next without making time for a coffee break, which explains why
            many of us like to grab a take-out tea or coffee to enjoy on-the-go.
            However this is relatively new explosion in take-away hot drinks is
            having devastating consequences on our environment. An estimated 2.5
            billion coffee cups are thrown away in the UK alone every year,
            which equates to almost 5,000 a minute! Over 99% of takeaway coffee
            cups don’t get recycled (even the paper cups are lined with plastic
            which makes them harder to recycle), so the disposable cups and
            their lids either end up in landfill, or become plastic pollution in
            our waterways and oceans. The simple way to make sure you aren’t
            contributing to the problem is to find a reusable cup or insulated
            bottle that you like, and be sure to carry it with you all the time.
            You might even save money as there are a growing number of
            eco-minded coffee shops offering a discount to customers who bring
            their reusable cups. Choosing a reusable coffee cup might also
            encourage you to make your own hot drink at home before setting off,
            and save you the cost of at least one take-out drink a day.
          </p>
        </div>
        <div className="tip">
          <h3>4. Pack your lunch in reusable containers</h3>
          <p>
            There are many reasons to take your own lunch to work, school, the
            park, the beach, or on any outdoor adventure. You will undoubtedly
            save money by making your own lunch, and you also are likely to make
            more healthy choices preparing your lunch ahead of time, instead of
            looking to buy something when you are already really hungry! However
            for us, the most compelling reason is that buying take-out involves
            lots of single-use plastic packaging that we can avoid if we bring
            our own lunch. Which brings us to the next challenge – disposable
            plastic sandwich bags and cling film don’t make our homemade lunch
            more eco-friendly than a take-out
          </p>
        </div>
        <div className="tip">
          <h3>5. Say no to disposable straws and cutlery</h3>
          <p>
            Disposable plastic cutlery and straws are among the worst plastic
            pollution culprits. Just like plastic bags and bottles, single-use
            utensils and straws are usually used just once, for a couple of
            minutes, before they are thrown away, and then they either litter
            our towns and countryside, pile up in landfill, or enter our
            waterways and oceans. However, it’s actually really easy to get in
            the habit of carrying your own cutlery with you, and leave a set in
            the car. There are lots of options, and you don’t necessarily need
            to spend any money. You could simply grab a stainless steel knife,
            fork and spoon (or chopsticks!) from your home cutlery drawer and
            keep them rolled in a napkin with a rubber band around it.
            Alternatively you could purchase bamboo cutlery in a travel pouch, a
            spork, or stainless steel cutlery in a travel case – whatever works
            for you so you have it when you need it
          </p>
        </div>
        <div className="tip">
          <h3>6. Slow down and dine in</h3>
          <p>
            Our obsession with eating and drinking on-the-go is a relatively
            recent development. Although modern technology has been positive in
            so many ways, one of the downsides is that we expect everything
            instantaneously. We try to cram so much into our days that we forget
            the simple pleasures, such as slowing down to properly taste and
            appreciate our food, or taking a lunch hour (or half hour) to catch
            up in person with a friend or colleague . Why not try structuring
            your day so you make time to stop when it is time to eat or drink,
            and enjoy it by dining in your favourite café, pub or restaurant.
            You will be surprised how much more refreshed you will feel from
            taking a short break out of your day. If you can’t afford the time,
            or added cost, of dining in, you could grab one of the reusable
            glass, stainless steel (or plastic) containers sitting in your
            cupboards and see if your local café or restaurant will fill it for
            you rather than using their single-use take-out containers. You
            could always call ahead to have a chat about wanting to use your own
            containers if it makes you feel more comfortable. If you work in an
            office it’s handy to keep a clean, empty food container at your desk
            for days when you don’t manage to bring your own lunch, and can’t
            take time out to dine in
          </p>
        </div>
        <div className="tip">
          <h3>7. Skip the plastic produce bags</h3>
          <p>
            When we are shopping for fresh fruit and veg, most of us are in the
            habit of either choosing the ready-packaged options (in plastic!),
            or tearing off one of the fiddly lightweight plastic produce bags
            that the store offers to carry our fruit and vegetables in our
            basket or trolley to the checkout. However, when you stop to think
            about it, do you really need a plastic produce bag? It’s really not
            that much more effort to put your fruit and veg loose in your
            trolley or basket, unload it loose onto the conveyor belt, and then
            pack it in your reusable shopping bags along with the rest of your
            shopping.{" "}
          </p>
        </div>
        <div className="tip">
          <h3>8. Store leftovers in glass jars</h3>
          <p>
            As we’ve already mentioned, we really prefer not to use plastic
            containers to store our food due to the risk of toxins leaching into
            it, especially when the food is either hot, or frozen. Glass is a
            very safe food storage option, and we have recently discovered that
            instead of sending our glass jars to be recycled, we can easily
            re-purpose them for all sorts of uses including: storing leftovers
            in the fridge, freezing cooked or uncooked food, storing any dry
            goods in our cupboards, as take-out containers, and for bringing our
            lunch to work, or on our travels. You can re-purpose any size or
            shape of jar, but you will soon find which ones are most useful for
            you, and may even find yourself buying a particular brand of jam or
            condiment based on how useful the jar it comes in is, rather than
            because of its contents!
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default plasticarticle;
