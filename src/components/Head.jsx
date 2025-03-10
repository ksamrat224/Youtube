const Head =()=>{
    return (
    <div className=" grid grid-flow-col p-5 m-2 shadow-lg">
      <div className=" flex col-span-1  ">
         <img
          className="h-8 cursor-pointer"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
          alt="Menu"
        />
         <img
          className="h-8 mx-2 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
          />
      </div>

       <div className="col-span-10 px-10 ">
        <input className="w-2/3 border border-gray-700  p-2 rounded-l-full" type="text" placeholder="See What You Love" />  
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-200">Search🔍</button>
       </div>
       <div className="col-span-1">
       <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="User-Icon"
        /> 
       </div>
    </div>
    )
}
export default Head