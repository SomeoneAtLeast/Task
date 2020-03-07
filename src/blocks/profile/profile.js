import React from "react";

import ProfileImg from "./../profile-img/profile-img.js";
import InfoBlocks from "./../info-blocks/info-blocks.js";


const Profile = () => {

    const fullInfoAboutTheEmployee = {
        names: { 
            id: 12345, 
            name: 
            { 
                first: "Петр", 
                patronymic: "Сидорович", 
                last: "Иванов" 
            }
        },      

        department: [ 
            { 
                id: 100500, 
                name: "Отдел 7" 
            }, 
            { 
                id: 1234, 
                name: "Департамент 5" 
            }, 
            { 
                id: 11, 
                name: "Филиал 1" 
            } 
        ],

        position: {
            jobTitle: "Начальник отдела" 
        },

        contacts: { 
            phoneWork: "123", 
            phoneMobile: "+7 111 555 55 55", 
            email: "peter.ivanov@exmaple.com", 
            office: "314", 
            fax: "+7 111 555 55 66" 
        },

        dayOfBirth: {
            "birthday": "1990-03-05"
        },

        hiringDay: {
            "hireDate": "2010-05-15"
        },

        manager: { 
            "id": 1256, 
            "name": 
            { 
                "first": "Сидор", 
                "patronymic": "Иванович", 
                "last": "Петров" 
            } 
        },

        profileImg: {
            pictureUrl: "./assets/img/profile-img.jpg" 
        } 
    };

  return (
	<section className="profile">
		<ProfileImg fullInfoAboutTheEmployee={fullInfoAboutTheEmployee}/>
		<InfoBlocks fullInfoAboutTheEmployee={fullInfoAboutTheEmployee}/>
	</section>
  );
};

export default Profile;