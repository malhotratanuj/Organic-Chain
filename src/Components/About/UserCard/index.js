/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './index.css'
function UserCard({imgPath, name, role}) {
  return (
    <div className='card card-body d-flex align-items-center justify-content-center border-0'>
        <div className='position-relative mb-4'>
            <img src={imgPath} alt={`${name} photo`} width={250} height={250}  />
            <img className='user-shadow-img' src={'/img/user-shadow.png'} alt={`${name} photo`} width={250} height={120} />
        </div>
        <h4>{name}</h4>
        <p className='text-center text-secondary' dangerouslySetInnerHTML={{__html:role}} />
    </div>
  )
}

export default UserCard