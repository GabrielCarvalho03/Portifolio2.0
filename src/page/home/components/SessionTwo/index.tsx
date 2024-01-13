
import computer from "../../../../assets/svgs/computer.svg";

export const SessionTwo = () =>{

    return(
        <>
     <div id="SessionTwo" className="w-full h-screen bg-purple relative ">
        <div className="w-full h-screen flex flex-col    items-center  bg-purpleExtraBold rounded-tl-core rounded-tr-core ">
            <h1 className="text-2xl TitleSessionTwo opacity-0 w-6/12 mt-4 text-white md:text-4xl font-semibold text-center ">Everything you imagine, we </h1>
            <h1 className="text-2xl TitleSessionTwo2 opacity-0 w-6/12  text-white md:text-4xl font-semibold text-center ">think, develop and deliver ready for use</h1>
            <h1 className="mt-3 SubTitleSessionTwo text-white">from small landing pages to large systems</h1>


            <img src={computer} alt=""   className="imgSessionTwo opacity-0 absolute bottom-0"/>
       </div>
   </div>

        </>
    )
 }