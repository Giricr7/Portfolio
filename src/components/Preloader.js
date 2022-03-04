import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <Loader
        type="Plane"
        color="#343e47"
        height={200}
        width={200}
      />
    </div>
  );
}

export default Preloader;
