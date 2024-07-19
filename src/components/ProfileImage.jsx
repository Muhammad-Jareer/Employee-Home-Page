import React from 'react';

const ProfileImage = ({ profileImage, handleImageChange }) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="w-32 h-32 bg-gray-300 rounded-full flex-shrink-0 mb-2 relative">
        {profileImage ? (
          <img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
        ) : (
          <div className="w-full h-full rounded-full flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
        <input
          type="file"
          onChange={handleImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      <label className="mt-2 text-sm text-gray-600">Change Profile Image</label>
    </div>
  );
};

export default ProfileImage;
