import React from "react";
import PropTypes from "prop-types";

export default function Gbr({
  Gambarx,
}) {
  return (
    <>
        <img
            src = {Gambarx}
            className="w-auto align-middle rounded-t-lg"
        />
    </>
  );
}

Gbr.defaultProps = {
    Gambarx: "",
  };
  
Gbr.propTypes = {
    Gambarx: PropTypes.string,
  };