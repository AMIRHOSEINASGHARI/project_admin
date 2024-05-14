import React from "react";

const CommentsTab = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <div>
        <p className="text-center text-p1 font-bold">No Comments Yet!</p>
      </div>
    );
  }
  return <div>CommentsTab</div>;
};

export default CommentsTab;
