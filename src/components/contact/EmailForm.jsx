import React from 'react'
import { Form } from "react-bootstrap";

const EmailForm = () => {
    return (
        <section className="emailJS">
        <Form>
          <Form.Group controlId="FormName">
          <Form.Control required type="text"/>
            <Form.Label>YOUR NAME / COMPANY</Form.Label>            
          </Form.Group>
          <Form.Group controlId="FormEmail">
          <Form.Control required type="email"/>
            <Form.Label>YOUR EMAIL</Form.Label>            
          </Form.Group>
          <Form.Group controlId="FormMessage">
              <Form.Control required as="textarea" rows={5}/>
            <Form.Label>MESSAGE</Form.Label>            
          </Form.Group>
          <button className="orange-btn" type="submit">SEND</button>
        </Form>
      </section>
    )
}

export default EmailForm
