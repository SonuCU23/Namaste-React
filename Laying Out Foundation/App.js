import React from "react";
import  ReactDOM  from "react-dom/client";
import './style.css';


const logo = (
  <h1 id="logo">LOGO</h1>
);
const Searchbar = () => { 
  return(
    <div id="search-bar">
      <input type="search" id="gsearch" name="gsearch"></input>
    </div>
  )
}

const UserIcon = () => {
  return (
    <ul id="user-icon">
      <li>Home</li>
      <li>About</li>
      <li>Work</li>
      <li>Contact</li>
    </ul>
  )
}


const HeaderComponent = () => {
  return(
   <header id="header">
      {logo}
      <Searchbar/>
      <UserIcon/>
   </header>  
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>)
