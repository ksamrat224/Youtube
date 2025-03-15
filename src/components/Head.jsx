import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    console.log(searchQuery);
    setTimeout(() => getSearchSuggestions(), 200);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" grid grid-flow-col p-5 m-2 shadow-lg">
      <div className=" flex col-span-1  ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
          alt="Menu"
        />
        <a href="link">
          <img
            className="h-8 mx-2 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
          />
        </a>
      </div>

      <div className="col-span-10 px-10 ">
        <input
          className="w-2/3 border border-gray-700  p-2 rounded-l-full"
          type="text"
          placeholder="See What You Love"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-200">
          Search🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="User-Icon"
        />
      </div>
    </div>
  );
};
export default Head;
