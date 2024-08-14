import React, { useRef } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import Heading from '../Heading';

const APIURL = process.env.REACT_APP_API_URL;
function LoginForm() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleSubmit= ()=>{
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if(email !=='' && password !==''){
            axios.post(`${APIURL}auth/login`, {
                email,
                password
              })
              .then(function (response) {
                if(response.status === 200){
                    if(response.data.accessToken){
                        toast.success("User logged in successfully!");
                        Cookies.set('accessToken', response.data.accessToken)
                    }
                    if(response.data.refreshToken){
                        Cookies.set('refreshToken', response.data.accessToken)
                    }
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
                <div className='d-none d-lg-block left-sidebar position-relative col-lg-6'>
                        <img src='/img/login.png'  />
                </div>
                <div className='col col-lg-6 right-sidebar d-flex align-items-center justify-content-center flex-column'>
                    <Heading className='fs-48' text='Logo' />
                    <div className="mb-3 w-100">
                        <label for="exampleFormControlInput1" className="form-label">Username or Email address</label>
                        <input ref={emailRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3 w-100">
                        <label for="exampleFormControlTextarea1" className="form-label">Password</label>
                        <input ref={passwordRef} type="password" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <button type="button" className='w-100 btn btn-danger text-white btn-rounded' onClick={handleSubmit}>
                        Sign in
                    </button>
                    <div className='d-flex align-items-center justify-content-center gap-3 my-3 w-100'>
                        <div className='line position-relative w-100 text-center'>or</div>
                    </div>
                    <p className='fs-5'>
                        Are you new?{' '}
                            <Link className='text-dark ' to="/signup">
                                Create an account
                            </Link>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginForm