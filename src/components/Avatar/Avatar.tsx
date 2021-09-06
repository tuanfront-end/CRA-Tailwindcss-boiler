import {
  _getPersonNameRd,
  _getAvatarRd,
  avatarColors,
} from "contains/fakeData";
import React, { FC } from "react";

export interface AvatarProps {
  containerClassName?: string;
  sizeClass?: string;
  radius?: string;
  imgUrl?: string;
  userName?: string;
}

const Avatar: FC<AvatarProps> = ({
  containerClassName = "ring-2 ring-white",
  sizeClass = "h-6 w-6",
  radius = "rounded-full",
  imgUrl,
  userName,
}) => {
  const url = imgUrl || _getAvatarRd();
  const name = userName || _getPersonNameRd();
  const _setBgColor = (name: string) => {
    const backgroundIndex = Math.floor(
      name.charCodeAt(0) % avatarColors.length
    );
    return avatarColors[backgroundIndex];
  };

  return (
    <div
      className={`wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-gray-800 uppercase font-bold ${radius} ${sizeClass} ${containerClassName}`}
      style={{ backgroundColor: url ? undefined : _setBgColor(name) }}
    >
      {url && (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={url}
          alt={name}
        />
      )}
      <span className="wil-avatar__name">{name[0]}</span>
    </div>
  );
};

export default Avatar;
