import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/image2.jpg'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
const Home = () => {
  return (
   <>
   {/* Landing */}
   <div style={{minHeight:"100vh"}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
<div className='container'>
    <div className='row align-items-center'>
        <div className='col-lg-6'>
            <h1><i className='fa-brands fa-docker me-2'></i>Project Fair</h1>
            <p>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!
            STARTS TO EXPLORE</p>
            <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
        </div>
        <div className='col-lg-6'>
            <img className='img-fluid' src={img1} alt="" />
        </div>
    </div>
</div>
   </div>
   {/* explore our page */}
   <div className='my-5 text-center'>
    <h1 className='mb-5'>Explore our page</h1>
    <marquee>
        <div className='d-flex'>
            <div className='me-5'>
                <ProjectCard/>
            </div>
        </div>
    </marquee>
    <button className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS.......</button>
   </div>
   {/* Our Tesimonials */}
   <div className="d-flex justify-content-center align-items-center my-5 flex-column">
    <h1>Our Testimonial</h1>
    <div className='d-flex justify-content-evenly align-items-center mt-3 w-100'>
        {/* card */}

        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
            <img width={'60px'} height={"60px"} className='rounded-circle img-fuid' src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="" />
            <div className='d-flex justify-content-center my-2'>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            </div>
          <p style={{textAlign:"justify"}}>Some quick example text to build on the card title and make up the
          bulk of the card's content.</p>        
          </Card.Text>
      </Card.Body>
    </Card>

    </div>
   </div>
   </>
  )
}

export default Home