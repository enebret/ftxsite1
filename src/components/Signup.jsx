/*jshint esversion: 8 */
import React, {useState} from 'react';
import './styles/signup.css';
import axios from 'axios';
import './styles/signup.css'
import firstDiv from './util/aboutusimages/first_div.jpg';
import vgDiv from './util/investment/undraw.png';
import pgDiv from './util/investment/external.png';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';
import qOption from './util/aboutusimages/q_option.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Feedback from 'react-bootstrap/Feedback';
import vw from './pix/vw.jpg';
import droid from './pix/droid.png';
import inv from './pix/inv.png';

function Signup () {
    const [Email, setUserEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Phone, setPhone] = useState('');

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            firstname: Firstname,
            lastname: Lastname,
            balance: 0,
            email: Email,
            phone: Phone,
            password: Password
          };
              //http://localhost:5045/user/signup
          axios.post('https://ftx-server-backup.eneikenna.repl.co/user/signup', user)
          .then(response => {
            if(response.data){
              var data = response.data
              if(data.firstname == undefined){
                  console.log('incorrect email');
                  navigate('/signup')
                  setUserEmail('')
                  setFirstname('')
                  setLastname('')
                  setPhone('')
                  setPassword('')
              }
             else if (data.firstname){
              var {firstname, lastname, balance} = data;
              let fname = firstname
              console.log(fname)
              localStorage.setItem('user', fname);
              localStorage.setItem('bal', balance);
              navigate('/dashboard'); 
             }
            }
          })
          
          .catch(err => {
            console.error(err);
        });

        };
//dashboard component should be here and the user details be passed as props to the dashboard component once there is a response from the backend
    return (
      <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">FXT</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link onClick={ () => navigate('/')}>Home</Nav.Link>
      <Nav.Link onClick={() => navigate('/aboutus')}>Company</Nav.Link>
      <Nav.Link onClick={() => navigate('/investment')}>Investment</Nav.Link>
      <Nav.Link onClick={() => navigate('/faq')}>Faq</Nav.Link>
      <Nav.Link onClick={() => navigate('/platform')}>Platform</Nav.Link>
      <Nav.Link onClick={() => navigate('/partnership')}>Partnership</Nav.Link>
      <Nav.Link onClick={() => navigate('/contactus')}>Contact us</Nav.Link>
    </Nav>
    <Nav>
  <Nav.Link  style={{ marginRight: '80%'}} onClick={ () => {localStorage.clear();navigate('/')}}>Login</Nav.Link>
  </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        <Container fluid >
            <Row lg={6} >
           
               <Form id='subdiv' onSubmit={handleSubmit}>
               <Form.Group className="mb-3" controlId="validationCustom03">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" size="lg" placeholder="enter first name" required value = {Firstname} onChange={e => setFirstname(e.target.value)}/>
    <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
  </Form.Group>
  <Form.Group className="mb-3" controlId="validationCustom03">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" size="lg" placeholder="enter last name" required value = {Lastname} onChange={e => setLastname(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="validationCustom03">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" size="lg" placeholder="enter email" required value = {Email} onChange={e => setUserEmail(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="validationCustom03">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" size="lg" placeholder="enter phone-number eg.+17007489934" required value = {Phone} onChange={e => setPhone(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="validationCustom03">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" size="lg" placeholder="enter password" value = {Password} required  onChange={e => setPassword(e.target.value)}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Form.Group id = 'txy' >
  <Form.Text >
  Already an existing user? <a href='' onClick={() => navigate('/login')}>Login</a>
    </Form.Text>
  </Form.Group>
</Form>
            </Row>
        </Container>
        <Navbar expand="lg" bg="dark" variant="dark">
  <Container>
  <p id ='footer-text'>&reg; fxt limited 2023</p>
  </Container>
</Navbar>
        </div>
    )
}

export default Signup;