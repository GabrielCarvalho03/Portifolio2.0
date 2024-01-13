import react from "../assets/react.svg";
import firebase from "../assets/svgs/firebase.svg";
import JS from "../assets/svgs/JS.svg";
import mongo from "../assets/svgs/mongo.svg";
import TS from "../assets/svgs/TS.svg";

export const Teste = () => {


  return (
   <>
   
   <section
    className="open opacity-0 w-full  absolute    "
  >
    <h1 className="textTeste text-white text-xl ml-16 mt-20">
      get to know more about me
    </h1>
    <h1 className="textTeste w-3/6 text-white text-base ml-16 mt-20">
      With 4 years of experience as a programmer, I bring a strong
      background in both front-end and back-end development. Passionate
      about my work, I am constantly striving to enhance my skills to
      tackle challenges and create innovative solutions. My expertise
      spans various technologies and programming languages, enabling me to
      develop robust and efficient applications. In addition to technical
      proficiency, I value teamwork, clear communication, and delivering
      high-quality results. I am always open to new opportunities that
      allow me to contribute and learn, solidifying my commitment to
      technological development and solving complex problems.
    </h1>

   
  </section >
  <section className="">
    <h1 className=" textSkill text-white absolute left-80 top-52 opacity-0">My skills</h1>
   <img className="imgReact absolute left-64 top-1/2 opacity-0" src={JS}/>
   <img className="imgFirebase absolute left-64 top-1/2 -mt-10  opacity-0" src={firebase}/>
   <img className="imgJS absolute left-64 top-1/2 -mt-10  opacity-0" src={react}/>
   <img className="imgMongo absolute left-64 top-1/2 -mt-10  opacity-0" src={mongo}/>
   <img className="imgTS absolute left-64 top-1/2 -mt-10  opacity-0" src={TS}/>
  </section>
   </>
  );
};
