import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-lg bg-gray-200 p-2 rounded-lg">
      <img
        className="w-12 h-12"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="User"
      />
      <div>
        <p className="font-bold">Name:{name}</p>
        <p>Comment:{text}</p>
      </div>
    </div>
  );
};

export default Comment;
