import React from 'react'
import Header from "../components/Header"
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

const Project = () => {
  return (
    <>
    <Header/>
    <div className='container-fluid'>
      <div className='d-flex justify-content-between align-items-center py-5'>
        <h1>All Projects</h1>
        <input className='form-control w-25' type="text" placeholder='search projuts by languages used ' />
      </div>
      <Row>
        <Col className='mb-3' sm={12} md={6} lg={4}>
        <ProjectCard/>
        </Col>
        </Row>
    </div>
    </>
  )
}

export default Project