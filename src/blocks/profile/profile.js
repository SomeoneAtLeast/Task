import React from "react";

import ProfileImg from "./../profile-img/profile-img.js";
import InfoBlocks from "./../info-blocks/info-blocks.js";


const Profile = () => {
  return (
	<section className="profile">
		<ProfileImg />
		<InfoBlocks />
	</section>
  );
};

export default Profile;