import React from "react";

const SecondInfoBlock = ({fullInfoAboutTheEmployee}) => {
  return (
      <div className="second-info-block">
        <div className="second-info-block__contacts">
          <span className="second-info-block__definition">
            email
          </span>
          <a href={fullInfoAboutTheEmployee.contacts.mailtoEmail} className="second-info-block__value">
             {fullInfoAboutTheEmployee.contacts.email}
          </a>
        </div>
        <div className="second-info-block__contacts">
          <span className="second-info-block__definition">
            Телефон
          </span>
          <span className="second-info-block__value">
            {fullInfoAboutTheEmployee.contacts.phoneWork}
          </span>
        </div>
        <div className="second-info-block__contacts">
          <span className="second-info-block__definition">
            Кабинет
          </span>
          <span className="second-info-block__value">
            {fullInfoAboutTheEmployee.contacts.office}
          </span>
        </div>      
      </div>
  );
};

export default SecondInfoBlock;