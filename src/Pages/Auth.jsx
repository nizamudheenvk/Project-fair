import React from 'react'
import authImg from '../assets/authImg.avif'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Auth = ({insideReginster}) => {
  return (
    <div style={{minHeight:'100vh', width:"100%"}} className='d-flex justify-content-center align-items-center'>
      <div className='conatiner w-75 card shadow p-2'>
        <div className='row align-items-center' >
          <div className="col-6">
            <img  src={authImg} alt="" className='img-fluid' />
          </div>
          <div className="col-6">
            <h1 className='my-2'><i className="fa-brands fa-node-js me-2 fonst-2xl"></i>Project Fliar</h1>
            <h5>sign { insideReginster?'Up': 'in'} to your account</h5>
            <Form>
              {
                insideReginster &&
                <FloatingLabel controlId="floatingInputUsername" label="username" className='mb-3'>
                <Form.Control type="text" placeholder="username" />
              </FloatingLabel>
              }
        <FloatingLabel controlId="floatingInput"label="Email Address"className="mb-3" >
        <Form.Control type="email" placeholder="Email" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
     {
      insideReginster ?
      <div className="mt-3">
        <button className='btn btn-primary mb-2'>Register</button>
        <p>Existing user ? Please Click Here to  <Link to={'/login'}>Login</Link> </p>
      </div>
      :
      <div className="mt-3">
      <button className='btn btn-primary mb-2'>Login</button>
      <p>New user ? Please Click Here to  <Link to={'/register'}>Register</Link></p>
    </div>


      }
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth