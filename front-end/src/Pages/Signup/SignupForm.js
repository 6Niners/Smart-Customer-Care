import React from 'react'
import{Form, Button, Card, Container} from 'react-bootstrap'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


export default function SignupForm() {
  const navigate= useNavigate()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  return (
    <Container className = "d-flex align-items-center justify-content-center"
      style = {{minHeight: "100vh"}}>
     <div classname = "w-100" style = {{maxWidth: '400px'}}>
    <>
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form>
                <Form.Group id = "email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type = "email" ref = {emailRef}required/>
                </Form.Group>

                <Form.Group id = "password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type = "password" ref = {passwordRef}required/>
                </Form.Group>

                <Form.Group id = "password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type = "password" ref = {passwordConfirmRef}required/>
                </Form.Group>
                <h2>   </h2>
                

                <Button className = "w-100" type="submit" onClick={()=>{navigate('/Home')}}>Sign Up
                </Button>
            </Form>
        </Card.Body>
    </Card>
    
    <div className="w-100 text-center mt-2">Already have an account? <a href = "/Login"> Login</a>
    </div>
      
      </>
    </div>
    </Container>

  )
}
