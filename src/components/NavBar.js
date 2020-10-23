import React from 'react';
import '../App.css';
import home from './img/menu-home.png';
import wrld from './img/menu-world.png';
import plus from './img/menu-plus.png';
import account from './img/menu-account.png';
import settings from './img/menu-settings.png';


function NavBar() {
return (
<div className="NavBar">
<ul className="buttons">
    <li> <img src={home} alt="home-button"/></li>
    <li> <img src={wrld} alt="wrld-button"/></li>
    <li> <img src={plus} alt="plus-button"/></li>
    <li> <img src={account} alt="account-button"/></li>
    <li> <img src={settings} alt="settigns-button"/></li>
</ul>
    

</div>
)

}



export default NavBar;