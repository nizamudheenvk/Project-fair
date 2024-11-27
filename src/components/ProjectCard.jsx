import React, { useState } from 'react'
import { Card, Modal} from 'react-bootstrap'
const ProjectCard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  return (
<>
<Card onClick={handleShow} className='btn shadow'>
      <Card.Img height={"200px"} variant="top" src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
          <div className="col-lg-6">
            <img className='img-fluid' src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" alt="" />

          </div>
          <div className="col-lg-6">
            <h3> Title</h3>
            <h6>Languages are used : <span className='text-danger'>Languase</span></h6>
            <p style={{textAlign:"justify"}}> <span className='fw-bolder'> Project View : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, error quidem ab quaerat ad vitae voluptatum minus. Praesentium unde quos soluta obcaecati nostrum accusantium ab expedita totam ipsum, eum enim.</p>
          </div>
          </div>
          <div className="mt-2 float-start">
            <a  href="https://github.com/nizamudheenvk/VRV-assignment.git" target='_blank' className='btn btn-secondary me-2'>
            <i className=" fa-brands fa-github"></i></a>
            <a  href="https://food-cart-delta.vercel.app/" target='_blank' className='btn btn-secondary'>
            <i className="fa-solid fa-link"></i></a>
          </div>
        </Modal.Body>
      </Modal>
</>  
)
}

export default ProjectCard