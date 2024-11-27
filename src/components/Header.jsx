import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = ({insideDashboard}) => {
  return (
    <Navbar style={{zIndex:1}} className="shadow border rounded position-fixed w-100">
    <Container>
      <Navbar.Brand >
        <Link to={'/'} className='text-decoration-none fw-bolder'><i className="fa-brands fa-node-js  "></i>Project Fair</Link>

      </Navbar.Brand>
      {
      insideDashboard &&
      <button className='btn btn-link fw-bolder me-2'>Logout
      <i className='fa-solid fa-right-from-bracket ms-1'></i>
      </button>
    }

    </Container>
  </Navbar>
  )
}

export default Header