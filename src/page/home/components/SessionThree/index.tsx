
import speed from "../../../../assets/svgs/speed.svg";
import male from "../../../../assets/svgs/male.svg";
import rocket from "../../../../assets/svgs/rocket.svg";
import imgScroll from "../../../../assets/imageScroll.jpg";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";

export const SessionThree = () =>{
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);
   useLayoutEffect(() => {
      const initScrollTrigger = () => {
        gsap.to(".item1", {
          opacity: 1,
          y: -30,
          delay:0.2,
          duration:0.5,
         scrollTrigger:{
          trigger: '#ContainerFlexInfos', 
          start:"top bottom",
          end:"top 200px"
         }
        });
        gsap.to(".item2", {
         opacity: 1,
         y: -30,
         delay:0.4,
         duration:0.5,
        scrollTrigger:{
         trigger: '#ContainerFlexInfos', 
         start:"top bottom",
         end:"top 200px"
        }
       });
       gsap.to(".item3", {
         opacity: 1,
         y: -30,
         delay:0.6,
         duration:0.5,
        scrollTrigger:{
         trigger: '#ContainerFlexInfos', 
         start:"top bottom",
         end:"top 200px"
        }
       });
      };
  
      window.addEventListener("load", initScrollTrigger);
  
      return () => {
        window.removeEventListener("load", initScrollTrigger);
      };
    }, []);

    return(
        <>
     <div id="SessionTwo" className="w-full mb-96  bg-white relative ">
            <h1 className="text-2xl  TitleSessionTwo opacity-0 w-full mt-5  md:text-5xl font-semibold text-center ">We <span className="bg-gradient-to-r from-purple to-pink-800 bg-clip-text text-transparent" >imagine</span>  </h1>
            <h1 className="text-2xl TitleSessionTwo2 opacity-0 w-full   md:text-5xl font-semibold text-center ">a better way.</h1>
      
           <div className="w-full flex justify-center mt-20">
            <button className="  px-10 py-2 bg-purple rounded-xl">
            <div className="w-full flex items-center gap-5">
              <img  alt="" /> <h1 className=" text-xl text-white">Send Message</h1>{" "}
            </div>
          </button>
           </div>

<div>
   <div className="absolute left-1/2 right-1/2">
   <img src={imgScroll}/>
   </div>
    <div id="ContainerFlexInfos" className=" mt-40  flex flex-col gap-10 md:flex-row md:gap-0 justify-around">
       <div className="item1 opacity-0  flex flex-col justify-center items-center" >
        <img width={'20%'} src={speed} alt="" />
        <h1 className="text-3xl font-bold">maximum delivery speed</h1>
        <h1>maximum delivery speed</h1>
       </div>

       <div className="item2 opacity-0  flex flex-col justify-center items-center" >
      <img width={'20%'} src={male} alt="" />
        <h1 className="text-3xl font-bold">maximum delivery speed</h1>
        <h1>maximum delivery speed</h1>
       </div>

       <div className="item3 opacity-0  flex flex-col justify-center items-center" >
      <img width={'20%'} src={rocket} alt="" />
        <h1 className="text-3xl font-bold">maximum delivery speed</h1>
        <h1>maximum delivery speed</h1>
       </div>
    </div>
   


</div>
   </div>

        </>
    )
 }