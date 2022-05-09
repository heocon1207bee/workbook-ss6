import React from 'react'
import './style.css'

const Render = ( {id, title, price, description, category, image, rate, count} ) => {
  return (
    <li className='productsList'>
        <p>N.o: {id}</p>
        <h3>Name: {title}</h3>
        <p>Price: {price}$</p>
        <p>About: {description}</p>
        <p>Category: {category}</p>
        <img src={image}/>
        <small>Rate: {rate} *</small>
        <small>Count: {count}</small>
    </li>
  )
}

export default Render