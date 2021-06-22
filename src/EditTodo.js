import React from 'react'
import twitter from "./twitter.png";
import intsa from "./Insta.svg";
import linkin from "./linkin.png";

export const EditTodo=() =>{
    return <div className="contain">
    <h2 className="touch">Let's keep in touch!!</h2>
     <nav class="own">
     
    <a href="https://www.linkedin.com/in/kesavan-s-065ba820b"  class="con">
        <img width="25" height="25" class="in" src={linkin}/>
    </a>
    </nav>
    <nav class="own">
    <a href="https://twitter.com/ss_kesavan?lang=en"  class="con">
        <img width="30" height="30" class="in" src={twitter}/>
    </a>
    </nav>
    <nav class="own">
    <a href="https://www.instagram.com/keshav_designs/"  class="con">
        <img width="25" height="25" class="in" src={intsa}/>
    </a>
    </nav>
   
    </div>
}