import React from 'react';

const ProfileImage = ({ profileImage, handleImageChange }) => {
  return (
    <div className="w-32 h-32 bg-gray-300 rounded-full flex-shrink-0 mb-4">
      {profileImage ? (
        <img src={profileImage} alt="Profile" className="w-full h-full rounded-full" />
      ) : (
        <div className="w-full h-full rounded-full flex items-center justify-center text-gray-500">No Image</div>
      )}
      <input
        type="file"
        onChange={handleImageChange}
        className="mt-2"
      />
    </div>
  );
};

export default ProfileImage;
