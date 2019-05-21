import React from 'react';
import './personDetail.css';

class PersonDetail extends React.Component {
  render(){
    const {data, match} = this.props;
    return(
      <div className="cards">
      {data !== null 
        ?
        data.filter(item => item.login.username === match.params.id)
        .map(item => {
          return (
            <div className="info-card">
              <h2 className="card_name">{item.name.first} {item.name.last}</h2>
              <img src={item.picture.medium} alt={item.name.first}/>
              <h3 className="card_city">Ciudad: {item.location.city}</h3>
              <p className="card_age">Edad: {item.dob.age}</p>
              <p className="card_email">{item.email}</p>
            </div>
          )
        })
        :
        <p>ERROR</p>
      }
      </div>
    );
  }
}

export default PersonDetail;