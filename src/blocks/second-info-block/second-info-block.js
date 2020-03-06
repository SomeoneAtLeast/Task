import React from "react";

const SecondInfoBlock = () => {
  return (
      <div className="second-info-block">
        <div className="second-info-block__contacts">
          <span className="second-info-block__definition">
            email
          </span>
          <span className="second-info-block__value">
             peter.ivanov@exmaple.com
          </span>
        </div>
        <div className="second-info-block__contacts">
          <span className="second-info-block__definition">
            Телефон
          </span>
          <span className="second-info-block__value">
            +7999123123
          </span>
        </div>
        <div className="second-info-block__contacts">
          <span className="second-info-block__definition">
            Кабинет
          </span>
          <span className="second-info-block__value">
            314
          </span>
        </div>      
      </div>
  );
};

export default SecondInfoBlock;