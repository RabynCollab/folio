import React, { useContext } from 'react'
import './Card.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../context/data-provider';


const Card = () => {

  const ctx = useContext(DataContext);

  const renderList = ctx.map((item) => {
    return <div className="card" key={item.id}>
      <Link to={`/detail/${item.id}`}>
        <i className={item.icon}></i>
        <h3>{item.label}</h3>
        <p>{item.description}</p>
      </Link>
    </div>
  });


  return (
    <div className="card-container">
      {renderList}
    </div>
  )
}

export default Card
