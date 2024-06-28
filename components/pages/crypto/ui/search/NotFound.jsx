import React from "react";

const NotFound = ({ searchTerm }) => {
  return (
    <div className="text-center flex flex-col justify-center items-center w-full h-full">
      <h1 className="font-medium text-h4">Not found</h1>
      <p className="text-p1">
        No results found for{" "}
        <span className="font-medium">"{searchTerm}".</span>
      </p>
      <p className="text-p1">Try checking for typos or using complete words.</p>
    </div>
  );
};

export default NotFound;
