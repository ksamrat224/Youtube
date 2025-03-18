import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "samrat karki",
    text: "lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "samrat karki",
    text: "lorem ipsum dolor sit amet",
    replies: [
      {
        name: "samrat karki",
        text: "lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "samrat karki",
        text: "lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "samrat karki",
        text: "lorem ipsum dolor sit amet",
        replies: [
          {
            name: "samrat karki",
            text: "lorem ipsum dolor sit amet",
            replies: [
              {
                name: "samrat karki",
                text: "lorem ipsum dolor sit amet",
                replies: [
                  {
                    name: "samrat karki",
                    text: "lorem ipsum dolor sit amet",
                    replies: [],
                  },
                  {
                    name: "samrat karki",
                    text: "lorem ipsum dolor sit amet",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "samrat karki",
    text: "lorem ipsum dolor sit amet",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <Comment data={commentsData[0]} />
    </div>
  );
};

export default CommentsContainer;
