import React from "react";

const FirstInfoBlock = () => {
  return (
  	<div className="first-info-block">
  		<div className="first-info-block__name">
  			<div className="first-info-block__name-text">
  				Сидор Петрович Ручкин
  			</div>
  		</div>
  		<div className="first-info-block__lists">
  			<ul className="first-info-block__list first-info-block__list--branch">
  				<li className="first-info-block__list-item">
  					<span className="first-info-block__list-text">
  						Филиал 1
  					</span>
  					<ul className="first-info-block__list first-info-block__list--department">
  						<li className="first-info-block__list-item">
  							<span className="first-info-block__list-text">
  								Департамент 5
  							</span>
  							<ul className="first-info-block__list first-info-block__list-unit">
  								<li className="first-info-block__list-item">
  									<span className="first-info-block__list-text">
  										Отдел 7
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
  				Начальник отдела
  			</span>
  		</div>	
  	</div>
  );
};

export default FirstInfoBlock;