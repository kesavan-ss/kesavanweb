import React from 'react'
import { useForm} from "react-hook-form";
import draw from "./draw.jpg";
import BB from "./BB.jpg";
import c from "./c.png";
import html from "./html.png";
import css from "./css.jpg";
import react from "./react.png";
import and from "./android.png";
import ps from "./ps.png";
import ddd from "./3d.jpg";
import blend from "./blender.png";
export const CreateTodo = () => {
    return (
    <div>
  <div className="mt-3">
            
        <h2 className="title">ABOUT:</h2>
        <nav className="abt">
           <h6>     This is kesavan, doing B.E on Computer Science & Engineering at Government College of Engineering, Tirunelveli.

        This is my first static webpage which shows my small portfolio.</h6>
        </nav>
        <nav className="edu">
        <nav className="study">
            <h3>SSLC</h3>
            <h5><a className="std" href="https://www.facebook.com/MinervaHigherSecondarySchoolKadichambadiKumbakonam/">Minerva higher secondar school</a></h5>
        </nav>
        <nav className="study">
            <h3 >DIPLOMA</h3>
            <h5><a className="std" href="http://arasupolytechnic.org/">Arasu polytechnic college</a></h5>
        </nav>
        <nav className="study">
            <h3>BACHELOR OF ENGINEERING</h3>
            <h5><a className="std" href="https://www.gcetly.ac.in/">Government college of engineering</a></h5>
        </nav>
        </nav>
        <br></br>
        <nav className="skills">
        <h3 className="abh">SKILLS AND INTREST</h3>
         <img className="skill" width="320" height="245" src={c}/>
         <img className="skill" width="320" height="245" src={html}/>
         <img className="skill" width="320" height="245" src={css}/>
         <img className="skill" width="320" height="245" src={react}/>
         <img className="skill" width="320" height="245" src={and}/>
         
         <img className="skill" width="320" height="245" src={blend}/>
        </nav>
       
        <nav className="hob">
        <h3 className="abh">HOBBIES</h3>
        <img className="skill" width="320" height="245" src={ps}/>
         <img className="skill" width="320" height="245" src={ddd}/>
         <img className="skill" width="320" height="245" src={draw}/>
         <img className="skill" width="320" height="245" src={BB}/>
        </nav>
       <nav className="anim">
       <h3 className="abh">SAMPLE 3D ANIMATION WORKS</h3>
       <iframe width="320" height="245" id="rb" 
       src="https://www.youtube.com/embed/CZbPHfivcFg">
       </iframe>

       <iframe width="320" height="245" id="rb" 
       src="https://www.youtube.com/embed/t-WKPZ9FjKY">
       </iframe>       
       </nav>
    </div>
</div>
    );
};