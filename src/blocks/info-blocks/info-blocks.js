import React from "react";
import FirstInfoBlock from "./../first-info-block/first-info-block.js";
import SecondInfoBlock from "./../second-info-block/second-info-block.js";
import ThirdInfoBlock from "./../third-info-block/third-info-block.js";

const InfoBlocks = () => {
  return (
	<div className="info-blocks">
		<FirstInfoBlock />
		<SecondInfoBlock />
		<ThirdInfoBlock />
	</div>
  );
};

export default InfoBlocks;