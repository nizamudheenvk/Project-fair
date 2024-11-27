import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uploadProjectImg from '../assets/uploadProject.svg'


const Edit = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={handleShow} className='btn'><i className='fa-solid fa-edit'></i></button>

    <Modal size='lg' centered  show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit project Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
             <label>
              <input style={{display:"none"}} type="file" />
              <img height={'200px'} className='img-fluid' src={uploadProjectImg} alt="" />
             </label>
             <div className="text-warning">*Upload Only the Following File types(jpeg,jpg,png)Here!!!</div>
            </div>
            <div className="col-lg-8">

            <div className="mb-2">
               <input type="text" className="form-control" placeholder='Project title' />
              </div><div className="mb-2">
               <input type="text" className="form-control" placeholder='Languages' />
              </div><div className="mb-2">
               <input type="text" className="form-control" placeholder='Over view' />
              </div><div className="mb-2">
               <input type="text" className="form-control" placeholder='gitHub Link' />
              </div><div className="mb-2">
               <input type="text" className="form-control" placeholder='Website link' />
              </div>

            </div>
          </div>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit