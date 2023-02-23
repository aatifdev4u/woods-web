import React, {useState, useRef} from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'

/**
* @author
* @function 
**/

export const Contact = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("")
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzs9I-oieC3AflXzbfjcdTxE4plZdNjNiCsFYhYcWUv6K0MSg9yRaikR9d-boBDUtEvww/exec";
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    setLoading(true)
    console.log(formRef.current);
    fetch(scriptUrl, {
    method: 'POST', 
    body: new FormData(formRef.current),
    }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
            setName("");
            setAge("");
            setEmail("");
            setPhone("");
            setMessage("");
        })
    .catch(err => console.log(err))
  }

  return(
    <div className='contact-wrapper'>
        <h2>Contact Details</h2>
        <Row>
          <Col className='contact-details'>
            <div className='title'>Leave a message</div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <Stack gap={3}>
                  <input type="text" id="name" name="Name" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                  <input type="email" id="email" name="Email" placeholder='Email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  <input  type="number" name="Phone" id="phone" placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                  <textarea name="Message" placeholder='Message' row={10} col={10} value={message} onChange={(e)=>setMessage(e.target.value)}>
                  </textarea>
                  <div style={{'textAlign': 'center'}}>
                    <button type='submit' className='active'>Submit</button>
                  </div>
              </Stack>
            </form>
          </Col>
          <Col className='location-details'>
            <div className='title'>Location</div>
            <Stack>
              <div>Address</div>
              <p>Unisco university
                Albany, NY
                USA. 11001</p>
              <div>EMail</div>
              <div>info@unisco.edu</div>
              <div>admin@unisco.edu</div>
              <div>phone</div>
              <div>+91 555 668 986</div>
            </Stack>
          </Col>
        </Row>
    </div>
   )

 }