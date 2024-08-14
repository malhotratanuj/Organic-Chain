import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';
import Heading from '../Heading';

function Footer() {
  return (
    <>
        <footer className=''>
            <div className='container py-5'>
                <div className='row justify-content-between'>
                    <div className='col-12 col-lg-2'>
                        <Heading text='Logo' className='fs-48 font-weight-bold' />
                    </div>
                    <div className='col-12 col-lg-5'>
                        <h3>Useful Links</h3>
                        <ul className='list-unstyled list-group text-secondary fs-5'>
                            <li>
                                <Link className='text-decoration-none text-secondary' to="/about">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-secondary' to="/services">
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-5'>
                        <h3>Social Media</h3>
                        <ul className='list-unstyled list-group text-secondary fs-5'>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Google</li>
                            <li>Pinterest</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer