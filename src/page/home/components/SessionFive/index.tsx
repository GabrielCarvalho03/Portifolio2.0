import {  useLayoutEffect } from "react";
import { gsap } from "gsap";
import heart from "../../../../assets/svgs/heart.svg";
import like from "../../../../assets/svgs/like.svg";
import stars from "../../../../assets/svgs/stars.svg";



export const SessionFiver = () => {
  useLayoutEffect(() => {
    const initScrollTrigger = () => {
      gsap.to(".imgHeart", {
        opacity: 1,
        scale:1,
        duration:0.5,
       scrollTrigger:{
        scrub:1,
        trigger: '#containerFive', 
        start:"top 300",
        end:"top 200px"
       }
      });
      gsap.to(".BlockLike", {
        opacity: 1,
        x:`${window.innerWidth <= 600 ?'10' :190}` , 
        delay:0.5,
        duration:0.5,
       scrollTrigger:{
        scrub:1,
        trigger: '#containerFive', 
        start:"top 300",
        end:"top 200px"
       }
      });
      gsap.to(".Blockrose", {
        opacity: 1,
        y:-80,
        delay:0.8,
        duration:0.5,
       scrollTrigger:{
        scrub:1,
        trigger: '#containerFive', 
        start:"top 300",
        end:"top 200px"
       }
      });
      gsap.to(".BlockBlueBottom", {
        opacity: 1,
        y:-20,
        delay:0.9,
        duration:0.5,
       scrollTrigger:{
        scrub:1,
        trigger: '#containerFive', 
        start:"top 300",
        end:"top 200px"
       }
      });
      gsap.to(".BlockGrayBottom", {
        opacity: 1,
        y:10,
        delay:0.8,
        duration:0.5,
       scrollTrigger:{
        scrub:1,
        trigger: '#containerFive', 
        start:"top 300",
        end:"top 200px"
       }
      });
    };

    window.addEventListener("load", initScrollTrigger);

    return () => {
      window.removeEventListener("load", initScrollTrigger);
    };
  }, []);


  return (
    <main id="containerFive" className=" w-full  bg-white absolute  z-10 flex-col   flex  md:flex-col items-center mt-96" style={ {marginTop:`${window.innerWidth <= 600 &&'51rem'}` }}>
      <section className="mt-72 flex flex-col  gap-20 md:flex-row md:gap-0 justify-between items-center w-2/3">
        <div className="BlockLike w-80 h-72 md:-ml-52 opacity-0 bg-blue-400 rounded-tl-3xl flex flex-col justify-center items-center rounded-tr-3xl rounded-br-3xl">
          <div className="flex gap-5">
            <h1 className="text-white font-bold text-3xl">+500</h1>
            <img src={like} alt="" width={20} />
          </div>
          <h1 className="text-white font-bold text-3xl">acsses</h1>
        </div>
        <img src={heart} alt="" width={300} className="scale-0 imgHeart opacity-0 md:ml-52 " />
        <div className="Blockrose w-72 h-96 mt-20  opacity-0 bg-rose-200 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl">
          <div className="flex flex-col h-full justify-center items-center gap-5">
            <h1 className="  font-bold text-3xl">+500</h1>
            <h1 className="  font-bold text-3xl text-center  ">
              approval of all projects already created
            </h1>
          </div>
        </div>
        <div />
      </section>

      <section className=" mt-10 flex flex-col md:flex-row gap-5 justify-between items-center w-2/3">
        <div className="BlockBlueBottom w-52 h-60 ml-20 opacity-0 bg-blue-400 rounded-tl-3xl flex flex-col justify-center items-center rounded-tr-3xl rounded-bl-3xl">
          <div className="flex flex-col gap-5">
            <img src={stars} alt="" width={70} />
            <h1 className="text-white font-bold text-3xl">4.9/5 </h1>
          </div>
        </div>

        <div className="BlockGrayBottom h-72 opacity-0 mr-10 bg-gray-900 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl"
          style={{ width:`${window.innerWidth <= 600 ?'100%': '750px'}`, height:`${window.innerWidth <= 600 && 'auto '}`,  marginLeft:`${window.innerWidth <= 600 && '10% '}`}}
        >
          <div className=" px-5 py-5 h-full justify-center items-center gap-5">
            <h1 className="text-white pt-10 text-xl">
              I'm really pleased with the sales page you sent me! The
              eye-catching design and persuasive language captured my attention
              immediately. Clarifying purchasing options and warranty
              information reinforces confidence in the product. I am excited
              about the possibility of purchasing the product/service.
              Congratulations on the excellent work!
            </h1>
            
          </div>
        </div>
        <div />
      </section>

 <footer className="w-full h-12  mt-10 bg-gray-950 flex justify-center items-center">
          <h1 className="text-white font-semibold ">all directs reserved</h1>
</footer> 
    </main>
  );
};
