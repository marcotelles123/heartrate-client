import React from "react";
import { Player } from "video-react";

import "./../../../node_modules/video-react/dist/video-react.css";
export default (props) => {
  console.log(props);
  return (
    <>
      <Player playsInline poster="/assets/poster.png" src={props.url} />
    </>
  );
};
