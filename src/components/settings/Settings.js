import React from "react";
import Logo from "../Banner.png";
import "./Settings.css";



function App() {
    return (
      <body>
          <h1>Settings</h1>
          <p className="Diet">Diet Preferences</p>
          <form>
          <input type="radio" name="diet" id="vegan" value="vegan" class="diet-option"/><label for="vegan" class="diet-label"> Vegan </label>
          <input type="radio" name="diet" id="vegetarian" value="vegetarian" class="diet-option"/><label for="vegetarian" class="diet-label"> Vegetarian </label>
          <input type="radio" name="diet" id="pescetarian" value="pescetarian" class="diet-option"/><label for="pescetarian" class="diet-label"> Pescetarian </label>
          <input type="radio" name="diet" id="omnivore" value="omnivore" class="diet-option"/><label for="omnivore" class="diet-label"> Omnivore </label>
</form>

          <p className="Transport">Transport Preferences</p>
          <form>
          <input type="radio" name="transport" id="car" value="car" class="transport-option"/><label for="car" class="transport-label"> Car </label>
          <input type="radio" name="transport" id="bike" value="bike" class="transport-option"/><label for="bike" class="transport-label"> Bike </label>
          <input type="radio" name="transport" id="public" value="public" class="transport-option"/><label for="public" class="transport-label"> Public Transportation </label>
          <input type="radio" name="transport" id="walking" value="walking" class="transport-option"/><label for="walking" class="transport-label"> Walking </label>
</form>          

          <p className="Recycle">Recycling habbits</p>
          <form>

          <input type="radio" name="recycle" id="none" value="none" class="recycle-option"/><label for="none" class="recycle-label"> None </label>
          <input type="radio" name="recycle" id="bags" value="bags" class="recycle-option"/><label for="bags" class="recycle-label"> Plastic Bags </label>
          <input type="radio" name="recycle" id="others" value="others" class="recycle-option"/><label for="others" class="recycle-label"> Others </label>
          <input type="radio" name="recycle" id="all" value="all" class="recycle-option"/><label for="all" class="recycle-label"> All Plastics </label>
            <br /><br /><br />
</form>
      </body>
      
    );
  }

  function selectOnlyThis(id) {
    console.log("Select method called");
    /*for (var i = 1;i <= 4; i++)
    {
        document.getElementById("Check" + i).checked = false;
    }
    document.getElementById(id).checked = true;*/
  }

  
  export default App;