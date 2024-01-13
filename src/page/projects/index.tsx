import { useState } from "react";
import githubIcon from "../../assets/svgs/github.svg";
import linkIcon from "../../assets/svgs/link.svg";
import { useProjects } from "../../hooks/useProjects";



export const Projects = () => {
  const[search, setSearch] = useState<string>('')
  const { list } = useProjects();

  const newlist = list?.filter(item =>{
    if(search == ''){
      return item
    }if(item.title.includes(search)){
      return item
    }
  })


  return (
    <div className="open w-full min-h-screen bg-gradient-to-br from-primary to-black  opacity-0">
      <div className="mt-32 pl-5">
        <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name"
          className=" sm:w-96 h-9 outline-none bg-white bg-opacity-10 text-white px-5 rounded-md "
          type="text"
        />
      </div>
     
              
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-9/12 pb-10 flex justify-center overflow-hidden md:gap-12  flex-wrap xl:gap-16">
          {newlist?.map((item) => {
            return (
              <div className="w-64">
                <img
                  style={{
                    maxHeight: "40%",
                    minHeight: "40%",
                    minWidth: "100%",
                  }}
                  src={item.photo}
                  alt=""
                />

                <div className="w-full bg-black  ">
                  <h1 className="text-white text-center py-5 ">{item.title}</h1>
                  <h1 className="text-white text-opacity-10 text-sm px-2">
                    {item.description.length > 100
                      ? item.description.substring(0, 100) + "..."
                      : item.description}
                  </h1>

                  <div className="px-1 flex justify-between mt-10 pb-3">
                    <img className="cursor-pointer" src={githubIcon} alt="" />
                    <img
                      onClick={() => window.open(item.link)}
                      className="cursor-pointer"
                      src={linkIcon}
                      alt=""
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <button className="w-full h-12 bg-blueExtraBold text-white rounded-md">
                    View more
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
