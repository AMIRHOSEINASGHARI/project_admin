import React from "react";

const LikesTab = ({ likes }) => {
  if (likes.length === 0) {
    return (
      <div>
        <p className="text-center text-p1 font-bold">No Likes Yet!</p>
      </div>
    );
  }
  return <div>LikesTab</div>;
};

export default LikesTab;
