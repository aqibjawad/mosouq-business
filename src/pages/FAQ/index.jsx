import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AccordionComponent from '../../components/AccordionComponent'

const FAQ = () => {
  return (
    <div className=' my-5 ' id='faq'>


        <Container fluid className=' p-0'>
            <Row  className=' g-4'>
                <Col  lg="6">
                <div className=' p-3 p-md-5'>
                <div className=' mb-4'>
                    <h1>Relax we’re always here for you!</h1>
                    <p className=' py-3'>Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti.</p>
                </div>
                   <AccordionComponent/> 
                   </div> 
                </Col>
                <Col  lg="6">
                     <img src='/accordion.png' className=' w-100' alt='' />
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default FAQ
