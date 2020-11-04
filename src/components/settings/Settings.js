import React from "react";

import "./Settings.css";



function App() {
    return (
      <body>
          <h1>Settings</h1>
          <p className="Diet">Diet Preferences</p>
          <form>
            <input type="checkbox" id="Diet1" name="myCheckbox" value="Vegan" onClick={selectOnlyThis()}/>
            <label for="Diet1">Vegan</label>
            <input type="checkbox" id="Diet2" name="myCheckbox" value="Vegetarian" onClick={selectOnlyThis()}/>
            <label for="Diet2">Vegetarian</label>
            <input type="checkbox" id="Diet3" name="myCheckbox" value="Omnivore" onClick={selectOnlyThis()}/>
            <label for="Diet3">Omnivore</label>
            <input type="checkbox" id="Diet4" name="myCheckbox" value="Pescetarian" onClick={selectOnlyThis()}/>
            <label for="Diet4">Pescetarian</label>
</form>

          <p className="Transport">Transport Preferences</p>
          <form>
            <input type="checkbox" id="Transport1" name="Transport-1" value="Car"/>
            <label for="Transport1">Car</label>
            <input type="checkbox" id="Transport2" name="Transport-2" value="Bike"/>
            <label for="Transport2">Bike</label>
            <input type="checkbox" id="Transport3" name="Transport-3" value="Public" />
            <label for="Transport3">Public Transportation</label>
            <input type="checkbox" id="Transport4" name="Transport-4" value="Walking"/>
            <label for="Transport4">Walking</label>
</form>          

          <p className="Recycle">Recycling habbits</p>
          <form>
            <input type="checkbox" id="Recycle1" name="Recycle-1" value="None"/>
            <label for="Recycle1">None</label>
            <input type="checkbox" id="Recycle2" name="Recycle-2" value="Bags"/>
            <label for="Recycle2">Plastic Bags</label>
            <input type="checkbox" id="Recycle3" name="Recycle-3" value="Others" />
            <label for="Transport3">Others</label>
            <input type="checkbox" id="Recycle4" name="Recycle-4" value="All"/>
            <label for="Recycle4">All Plastics</label>
</form>
      </body>
      
    );
  }

  function selectOnlyThis() {
    console.log("Select method called");
    /*for (var i = 1;i <= 4; i++)
    {
        document.getElementById("Check" + i).checked = false;
    }
    document.getElementById(id).checked = true;*/
  }

  
  export default App;