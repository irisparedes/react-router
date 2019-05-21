import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render(){
    const {data} = this.props;
    return(
      <div>
      {data !== null 
        ?
        data.map((item, index) =>
          <li className="list-item" key={index}>
            <Link to={`/PersonDetail/${item.login.username}`}>
            <div className="link-container">
              <h2 className="card_name">{item.name.first} {item.name.last}</h2>
              <img src={item.picture.medium} alt={item.name.first}/>
            </div>
            </Link>
          </li>
            )
        :
        <p>ERROR</p>
      }
      </div>
    )
  }
}

export default Home;