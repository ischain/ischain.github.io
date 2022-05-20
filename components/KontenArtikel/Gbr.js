import Image from 'next/image';
import PropTypes from "prop-types";

export default function Gbr({
  Gambarx,
}) {
  return (
    <>
        <div className="w-auto align-middle rounded-t-lg">
          <Image unoptimized
            src = {Gambarx}
            alt = ""
          />
        </div>
    </>
  );
}

Gbr.defaultProps = {
    Gambarx: "",
  };
  
Gbr.propTypes = {
    Gambarx: PropTypes.string,
  };