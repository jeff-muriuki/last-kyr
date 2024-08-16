import React from "react";

const Button = () => {
  return (
    <>
    <div className="md:flex gap-3 text-xs">
    <button className= "text-white  px-3 py-1 rounded border-solid border-2 border-indigo-600">
          Log in
      </button>
      <button className="bg-amber-300 text-white  px-3 py-1 rounded">
          Sign up
      </button>
    </div>
      

    </>
    
  );
};

export default Button;
