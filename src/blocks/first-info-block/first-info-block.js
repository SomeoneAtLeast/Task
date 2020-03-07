import React from "react";

const FirstInfoBlock = ({fullInfoAboutTheEmployee}) => {
  return (
  	<div className="first-info-block">
  		<div className="first-info-block__name">
  			<div className="first-info-block__name-text">
  				{fullInfoAboutTheEmployee.names.name.first} {fullInfoAboutTheEmployee.names.name.patronymic} {fullInfoAboutTheEmployee.names.name.last}
  			</div>
  		</div>
  		<div className="first-info-block__lists">
  			<ul className="first-info-block__list first-info-block__list--branch">
  				<li className="first-info-block__list-item">
  					<span className="first-info-block__list-text">
            {fullInfoAboutTheEmployee.department[2].name}
  					</span>
  					<ul className="first-info-block__list first-info-block__list--department">
  						<li className="first-info-block__list-item">
  							<span className="first-info-block__list-text">
  								{fullInfoAboutTheEmployee.department[1].name}
  							</span>
  							<ul className="first-info-block__list first-info-block__list-unit">
  								<li className="first-info-block__list-item">
  									<span className="first-info-block__list-text">
  										{fullInfoAboutTheEmployee.department[0].name}
  									</span>
  								</li>
  							</ul>
  						</li>
  					</ul>
  				</li>
  			</ul>
  		</div>
  		<div className="first-info-block__position">
  			<span className="first-info-block__position-text">
  				{fullInfoAboutTheEmployee.position.jobTitle}
  			</span>
  		</div>	
  	</div>
  );
};

export default FirstInfoBlock;