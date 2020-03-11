import React, {Component} from "react";

export default class ThirdInfoBlock extends Component {

    render() { 

      const {fullInfoAboutTheEmployee} = this.props;

    	return (
    		<React.Fragment>
          <div className="third-info-block">
  	  			<div className="third-info-block__wrapper">
        			<div className="third-info-block__additional-info">
          				<span className="third-info-block__definition">
            				Сотовый
          				</span>
          				<span className="third-info-block__value">
             				{fullInfoAboutTheEmployee.contacts.phoneMobile}
          				</span>
        				</div>
                <div className="third-info-block__additional-info">
                  <span className="third-info-block__definition">
                    Факс
                  </span>
                  <span className="third-info-block__value">
                    {fullInfoAboutTheEmployee.contacts.fax}
                  </span>
                </div>
        				<div className="third-info-block__additional-info">
          				<span className="third-info-block__definition">
            				День рождения
          				</span>
          				<span className="third-info-block__value">
            				{fullInfoAboutTheEmployee.dayOfBirth.birthday}
          				</span>
        				</div>
        				<div className="third-info-block__additional-info">
          				<span className="third-info-block__definition">
            				Дата найма
          				</span>
          				<span className="third-info-block__value">
            				{fullInfoAboutTheEmployee.hiringDay.hireDate}
          				</span>
        				</div>
        				<div className="third-info-block__additional-info">
          				<span className="third-info-block__definition">
            				Руководитель
          				</span>
          				<span className="third-info-block__value">
            				{fullInfoAboutTheEmployee.manager.name.first} {fullInfoAboutTheEmployee.manager.name.patronymic} {fullInfoAboutTheEmployee.manager.name.last}
          				</span>
        			</div>       
      			</div>
      			<button type="button">Fsaadsdas</button>
          </div>
    		</React.Fragment>
  		);
  	};
};
