import React from "react";
import Button from "./Button";
//  const List=["all","live"] do mapping
const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Music" />
      <Button name="Mixes" />
      <Button name="Premier League" />
      <Button name="JavaScript" />
      <Button name="Algorithms" />
      <Button name="Dinners" />
      <Button name="Masala Films" />
      <Button name="Indie Rocks" />
      <Button name="Stadiums" />
    </div>
  );
};

export default ButtonList;
