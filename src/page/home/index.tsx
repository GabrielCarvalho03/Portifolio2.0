import React, { useEffect } from "react";
import "../../styles/animation.css";
import { gsap } from "gsap";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";
import { TextAnimateds } from "./components/TextsAnimateds";

import background from "../../assets/background.jpg";
import backgromanWithComputerund from "../../assets/svgs/manWithComputer.svg";
import whatsApp from "../../assets/WhatsApp.jpg";
import { SessionTwo } from "./components/SessionTwo";
import { SessionFor } from "./components/SessionFor";
import { SessionThree } from "./components/SessionThree";
import {NavigationMenu} from '../../@/ui/navigation-menu'
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { SessionFiver } from "./components/SessionFive";

export const Home: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    const initScrollTrigger = () => {
      gsap.to(".textHero", {
        opacity: 1,
        y: -50,
        delay: 0.1,
      });

      gsap.to(".textDelay1", {
        opacity: 1,
        y: -50,
        delay: 0.2,
      });
      gsap.to(".textHeroDelay", {
        opacity: 1,
        y: -50,
        delay: 0.3,
      });
      gsap.to(".ImgManHeader", {
        opacity: 1,
        rotate:40,
        delay: 1,
      
      });
      gsap.to(".ImgManHeader", {
        opacity: 1,
        rotate:-50,
        delay: 0.5,
      
      });
      gsap.to(".ImgManHeader", {
        opacity: 1,
        rotate:-0,
        delay: 1.5,
      
      });
      gsap.to(".textBottom1", {
        opacity: 1,
        y: -50,
        delay: 0.4,
      });

      gsap.to(".textBottom2", {
        opacity: 1,
        y: -50,
        delay: 0.6,
      });

      gsap.to(".textBottom3", {
        opacity: 1,
        y: -50,
        delay: 0.7,
      });

      gsap.fromTo(".buttonActionHero", {
        y: -20,
        delay: 0.7,
        duration:1
      }, {
        opacity: 1,
        y: 20,
        delay: 0.7,
        duration:0.5
      });
      gsap.to(".textHeader1", {
        opacity: 1,
        y: 10,
        delay: 0.7,
      });
      gsap.to(".textHeader2", {
        opacity: 1,
        y: 10,
        delay: 0.8,
      });
      gsap.to(".textHeader3", {
        opacity: 1,
        y: 10,
        delay: 0.9,
      });
      gsap.to(".ButtonHero", {
        opacity: 1,
        y: 10,
        delay: 0.9,
      });
      gsap.to(".logoHeader", {
        opacity: 1,
        y: 10,
        delay: 0.6,
      });

      gsap.to(".imgSessionTwo", {
        opacity: 1,
        y:-30,
        duration:0.5,
       scrollTrigger:{
        trigger: '#SessionTwo', 

        start:"top 100px",
        end:"top 200px"
       }
      });
      gsap.to(".TitleSessionTwo", {
        opacity: 1,
        y: 10,
        duration:0.5,
       scrollTrigger:{
        trigger: '#SessionTwo', 
        start:"top 400px",
        end:"top 200px"
       }
      });
      gsap.to(".TitleSessionTwo2", {
        opacity: 1,
        y: 10,
        delay:0.2,
        duration:0.5,
       scrollTrigger:{
        trigger: '#SessionTwo', 
        start:"top 400px",
        end:"top 200px"
       }
      });
      const path = [ { x: 0, y: -600 }]; // Defina o caminho que você deseja
      gsap.to(".BgSessionFor", {
        opacity: 1,
        motionPath:{
          path,
        },
        duration: 0.5,
        ease: 'power1.inOut', // Adicione uma função de easing para suavizar o movimento
        scrollTrigger: {
          trigger: '#ContainerFlexInfos',
          start: "top 480px",
          end: "top 200px",
          scrub: 1, // Permita que a animação seja proporcional à rolagem
        },
      });
    };

    window.addEventListener("load", initScrollTrigger);

    return () => {
      window.removeEventListener("load", initScrollTrigger);
    };
  }, []);

  return (
    <>
    <div className="w-full overflow-x-hidden">

      <div
        className="w-full h-screen  bg-cover bg-center relative overflow-hidden "
        style={{ backgroundImage: `url(${background})` }}
        >
        <header className=" w-full flex justify-between items-center px-10 pt-2">
              <div className="logoHeader opacity-0">
               <div className="ImgManHeader w-10 h-10 bg-gray-400 rounded-full">
                <img src={backgromanWithComputerund} alt="" />
               </div>
              </div>

              <div className=" ">
              <NavigationMenu>
      <NavigationMenuList  className="hidden  md:flex w-full gap-x-20 -pt-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger  className="text-white">about</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink >
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <h1  title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </h1>
              <h1  title="Installation">
                How to install dependencies and structure your app.
              </h1>
              <h1  title="Typography">
                Styles for headings, paragraphs, lists...etc
              </h1>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger  className="text-white">about</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">

              <h1  title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </h1>
              <h1  title="Installation">
                How to install dependencies and structure your app.
              </h1>
              <h1  title="Typography">
                Styles for headings, paragraphs, lists...etc
              </h1>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

       
      </NavigationMenuList>
    </NavigationMenu>
              </div>

              <div>
              <button className="ButtonHero opacity-0 px-5 py-2 bg-white rounded-xl">
            <div className="w-full flex items-center gap-5">
           <h1 className=" text-base">Send Message</h1>{" "}
            </div>
          </button>
              </div>
        </header>

        <div className="-mt-40 md:-mt-10  w-full h-full flex flex-col justify-center items-center">
          <div className=" md:ml-52 w-2/4">
            <div className="flex gap-4">
              <h1 className="text-2xl opacity-0 textHero text-white md:text-6xl font-semibold ">
                Creating
              </h1>
              <span className="text-2xl opacity-0 textDelay1 text-white  md:text-6xl font-semibold">
                technological
              </span>
            </div>
            <h1 className="text-2xl opacity-0 textHeroDelay text-white  md:text-6xl font-semibold">
              solutions for human services.
            </h1>
          </div>

          <button className="buttonActionHero opacity-0 px-10 py-2 bg-white rounded-xl">
            <div className="w-full flex items-center gap-5">
              <img src={whatsApp} alt="" /> <h1 className=" text-xl">Send Message</h1>{" "}
            </div>
          </button>

          <TextAnimateds />
        </div>
      </div>
    </div>
   

    <SessionTwo/>
<SessionThree/>
<SessionFor/>
<SessionFiver/>


        </>
  );
};
