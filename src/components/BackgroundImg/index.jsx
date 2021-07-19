import React from "react";
import "./BackgroundImg.css";
/*
  props: isReadOnly , control the contents in this component whether should hidden
  if this component is used in calculator page, isReadOnly=>false show
  else this component is used in result page, isReadOnly=>false hidden

*/
const BackgroundImg = ({ isReadOnly }) => {
  return (
    <div className="backgroundImg">
      {isReadOnly ? (
        " "
      ) : (
        <div className="img-contents">
          <h2>Pay Calculator</h2>
          <p>The free and simple online tax calculator.</p>
        </div>
      )}
    </div>
  );
};
export default BackgroundImg;
