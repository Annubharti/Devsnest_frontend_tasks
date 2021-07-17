import React from "react";
import CommonFooter from "../common_components/footer";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import Button3 from "./components/Button3";
import Button4 from "./components/Button4";

const Day19App = () => {
  return (
    <div>
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />

      <br />
      <br />
      <hr />
      <br />
      <br />
      <center>
        <h4>
          <i>This was task of Day 19, on click of button its value will get incremented.</i>
          <br />
          <br />
          <br />
          <br />
        
        The concept of following is being used in this task.
        <br />
        <br />
        <ul>
          <li>props</li>
          <li>state</li>
          <li>class components</li>
          <li>functional components</li>
        </ul>
      </h4>
      </center>
      <CommonFooter />
    </div>
  );
};

export default Day19App;
