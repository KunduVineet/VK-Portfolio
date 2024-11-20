import React from "react";

const ProfileImage = () => {
  return (
    <div
      className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-300 transition-all duration-300 hover:"
    >
      {/* Main Image */}
      <img
        src="./Vineet-Latest.svg" // Replace with your main image path
        alt="Vineet Kundu"
        className="w-full h-full object-cover"
      />      
    </div>
  );
};

export default ProfileImage;
