import React from 'react';

class PersonDetail extends React.Component {
  render(){
    const {item} = this.props;
    return(
      <div>
        <h2 className="card_name">{item.name.first} {item.name.last}</h2>
        <img src={item.picture.medium} alt={item.name.first}/>
        <h3 className="card_city">Ciudad: {item.location.city}</h3>
        <h4 className="card_age">Edad: {item.dob.age}</h4>
      </div>
    );
  }
}

export default PersonDetail;