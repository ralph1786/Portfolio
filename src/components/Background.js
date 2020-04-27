import React, { Fragment } from "react";
import "./Background.scss";

function Background(props) {
  return (
    <Fragment>
      {props.children}
      <svg className="big-circle"></svg>
      <svg className="small-circle"></svg>
    </Fragment>
  );
}

export default Background;
