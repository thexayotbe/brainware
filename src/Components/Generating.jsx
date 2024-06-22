import React from "react";
import { loading } from "../assets";

const Generating = () => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 ro`}>
      <img src={loading} alt="loading" className="w-5 h-5 mr-4" />
      AI is generating
    </div>
  );
};

export default Generating;
