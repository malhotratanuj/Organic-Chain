/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function Card({heading = '', btnText='', text='', className = '', img=''}) {
  return (
    <div className={`${className}`}>
    <img className="card-img-top img-fluid mb-3" src={`${img ? img : `https://placehold.co/300x150`}`} alt="Card image cap" />
    <div className="card-body text-center">
        <h5 className="card-title mb-3">{heading}</h5>
        <p className="card-text">{text}</p>
        
    </div>
    </div>
  )
}

export default Card