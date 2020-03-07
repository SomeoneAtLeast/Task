import React from "react";

const ProfileImg = ({fullInfoAboutTheEmployee}) => {
  return (
  	<div className="profile-img">
  		<img className="profile-img__img" src={fullInfoAboutTheEmployee.profileImg.pictureUrl} alt="Изображение профиля"></img>
  	</div>
  );
};

export default ProfileImg;