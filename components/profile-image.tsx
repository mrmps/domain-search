"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface ProfileImageProps {
  imageUrl: string | null; // imageUrl can be null
  initials: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ imageUrl, initials }) => {
    // State to track if image has loaded correctly
    const [imageError, setImageError] = useState<boolean>(false);
  
    return (
      <>
        {imageError || !imageUrl ? ( // Check if there's an error or if imageUrl is null
          // Render a fallback if the image fails to load or is null
          <div className="h-full w-full flex items-center justify-center bg-gray-300">
            <span className="text-white text-xl font-semibold">{initials}</span>
          </div>
        ) : (
          // Render the image normally
          <Image
            className="h-full w-full object-cover"
            src={imageUrl}
            alt="Profile Picture"
            referrerPolicy="no-referrer"
            style={{ background: "none" }}
            onError={() => setImageError(true)} // Set error state if image fails to load
            width={100}
            height={100}
          />
        )}
      </>
    );
  };
  
  export default ProfileImage;