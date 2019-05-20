import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render(){
    const {data} = this.props;
    return(
      <div>
      {data.map((item, index) =>
        <li className="link" key={index}>
          <Link to={`/PersonDetail/${item.login.username}`}>
          <div>
            <h2 className="card_name">{item.name.first} {item.name.last}</h2>
            <img src={item.picture.medium} alt={item.name.first}/>
            <h3 className="card_city">Ciudad: {item.location.city}</h3>
            <h4 className="card_age">Edad: {item.dob.age}</h4>
          </div>
          </Link>
        </li>
      )}
      </div>
    )
  }
}

export default Home;