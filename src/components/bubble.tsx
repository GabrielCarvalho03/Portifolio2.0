
import verificed from "../assets/verificed.jpg"; 
import scale from "../assets/svgs/scale.svg"
import {useLayoutEffect } from "react";
import { gsap } from "gsap";

type IProp ={

    variant: 'white' | 'black'
}

export const Blubble = ({variant}:IProp) =>{
    useLayoutEffect(() => {
         gsap.to(".ImgInfo", {
           opacity: 1,
           x: 128,
           duration:0.5,
          scrollTrigger:{
           trigger: '#SessionFor', 
           start:"top 600",
           end:"top 200px"
          }
         });
         gsap.to(".ImgInfo2", {
            opacity: 1,
            x: -128,
            duration:0.5,
           scrollTrigger:{
            trigger: '#SessionFor', 
            start:"top 600",
            end:"top 200px"
           }
          });
    
       
      }, []);

if(variant == 'white'){
    return(
        <div  className="ImgInfo w-64 h-96 border-0.5px absolute left-1/4 -ml-32 opacity-0 mt-20 gap-5 bg-white rounded-full flex flex-col justify-center items-center"
        style={{ left:`${window.innerWidth <= 600 &&'18%'}`}}
        >
            <img  src={verificed}/>
               <h1>Privacy in the center.</h1>
               <h1 className="text-center text-gray-500">Provide a foundation for privacy and compliance as dictated by vercel</h1>
            </div>
    )
}else{
    return(
        <div className=" ImgInfo2 w-64 h-96 border-0.5px absolute right-1/4  -mr-32 opacity-0 md:mt-20 gap-5 bg-grayMusted rounded-full flex flex-col justify-center items-center"
        style={{marginTop:`${window.innerWidth <= 600 &&'30rem'}`  , left:`${window.innerWidth <= 600 &&'50%'}`}}
        >
               <img  src={scale}/>
              <h1 className="text-white">Success in scale.</h1>
               <h1 className="text-center text-gray-400">We deliver the highest level of security and speed as an expectation.</h1>
            </div>
    )
}
}