import React from "react";
import FirstInfoBlock from "./../first-info-block/first-info-block.js";
import SecondInfoBlock from "./../second-info-block/second-info-block.js";
import ThirdInfoBlock from "./../third-info-block/third-info-block.js";

const InfoBlocks = ({fullInfoAboutTheEmployee}) => {
  return (
	<div className="info-blocks">
		<FirstInfoBlock fullInfoAboutTheEmployee={fullInfoAboutTheEmployee}/>
		<SecondInfoBlock fullInfoAboutTheEmployee={fullInfoAboutTheEmployee}/>
		<ThirdInfoBlock fullInfoAboutTheEmployee={fullInfoAboutTheEmployee}/>
	</div>
  );
};

export default InfoBlocks;