import React, { useRef } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import Heading from '../Heading';

const APIURL = process.env.REACT_APP_API_URL;

function SignupForm() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const handleSubmit= ()=>{
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        if(email !=='' && password !=='' && firstName !==''){
            axios.post(`${APIURL}auth/register`, {
                email,
                password,
                firstName,
                lastName
              })
              .then(function (response) {
                if(response.status === 200){
                        toast.success("User logged in successfully!");
                }
              })
              .catch(function (error) {
                toast.error("Some error Occured!");
                console.log(error);
              });
        }
    }
  return (
    <>
        <div className='d-flex justify-content-center align-items-center form-parent position-relative container'>
            <div className='row'>
                <div className='d-none d-lg-block left-sidebar signup-left-sidebar position-relative col-lg-6'>
                        <img src='/img/login.png' alt="" width={700} height={600} />
                </div>
                <div className='col col-lg-6 right-sidebar d-flex align-items-center justify-content-center flex-column'>
                    <Heading text='Logo' className='fs-48' />
                    <p>
                        You will need to create an account to make a purchase. Please
                            make     sure your information is accurate and correct,
                        otherwise you will not be able to checkout.</p>
                        <div className='row mx-0 w-100'>
                            <div className="mb-3 col-12 px-0 col-lg-6 ">
                                <label for="exampleFormControlInput1" className="form-label">First Name</label>
                                <input ref={firstNameRef} type="text" className="form-control" placeholder="" />
                            </div>
                            <div className="mb-3 col-12 col-lg-5 px-0 offset-lg-1">
                                <label for="exampleFormControlTextarea1" className="form-label">Last Name</label>
                                <input ref={lastNameRef} type="text" className="form-control" placeholder="" />
                            </div>
                        </div>
                        <div className="mb-3 col-12">
                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3 col-12">
                            <label for="exampleFormControlTextarea1" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="" />
                        </div>
                        <button type="button" onClick={handleSubmit} className='col-md-auto btn btn-warning text-white btn-rounded border-dark'>
                            Create Account
                        </button>
                    
                    
                    <div className='d-flex align-items-center justify-content-center gap-3 my-3 w-100'>
                        <div className='line position-relative w-100 text-center'>or</div>
                    </div>
                    <p className='fs-5'>
                        Already Register? {' '}
                        <Link className='text-dark' to="/login">
                            Click here to login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default SignupForm