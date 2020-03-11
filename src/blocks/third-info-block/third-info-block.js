import React, {Component} from "react";

export default class ThirdInfoBlock extends Component {

    state = {
      show: false
    }

    showClick = () => {
      this.setState ((state) => {
        return {
          show: !state.show
        };
      });
    };

    render() { 

      const {fullInfoAboutTheEmployee} = this.props;
      const {show} = this.state;
      let classNames = "third-info-block__wrapper";
      if (show) {
        classNames += " third-info-block-show";
      }

    	return (
    		<React.Fragment>
          <div className="third-info-block">
  	  			<div className={classNames}>
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
          				<span className="third-info-block__value" key={fullInfoAboutTheEmployee.manager.id}>
            				{fullInfoAboutTheEmployee.manager.name.first} {fullInfoAboutTheEmployee.manager.name.patronymic} {fullInfoAboutTheEmployee.manager.name.last}
          				</span>
        			</div>       
      			</div>
            <div className="third-info-block__show-btn"
                onClick={this.showClick}
                >
              <input type="checkbox" className="third-info-block__checkbox"/>
              <span className="third-info-block__line third-info-block__line-1"></span>
              <span className="third-info-block__line third-info-block__line-2"></span>
              <span className="third-info-block__line third-info-block__line-3"></span>
            </div>
          </div>
    		</React.Fragment>
  		);
  	};
};
