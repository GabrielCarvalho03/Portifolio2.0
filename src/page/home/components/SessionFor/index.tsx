
import { Blubble } from "../../../../components/bubble";
import { Card } from "../../../../components/card";

export const SessionFor = () =>{

    return(
     <div id="SessionFor" className=" BgSessionFor w-full  bg-gray-900 absolute pl-5 " style={{height:'50rem'}}>
            <h1 className="TitleSessionTwow-6/12  text-white text-4xl font-semibold text-center mt-10 ">Discover some projects </h1>
          <div className="flex flex-col items-center md:flex-row justify-center  gap-10">
          <Card/>
        
          </div>

          <Blubble variant="white"/>
          <Blubble variant="black"/>




   </div>
    )
 }