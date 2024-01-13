

export const Card = () =>{

    return(
        <div className="w-72 h-96 border-0.5px relative bg-white mt-10">
              <div className="w-full">
                {/* <img
                className="max-h-44"
                src={item.photo} width={"100%"} alt="" /> */}
                <div  />
              </div>
              <div className="w-full flex flex-col  items-center">
                <h1 className="font-semibold ">{'test'}</h1>
                <h1 className=" text-center pt-5 text-gray-500">
                  {'tesdte'}
                </h1>
                <div className="w-11/12 absolute bottom-2 ">
                 <button className="bg-blue-500 w-full h-10 rounded-sm text-white">View more</button>
                </div>
              </div>
            </div>
    )
}