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
import vw from './pix/vw.jpg';
import droid from './pix/droid.png';
import inv from './pix/inv.png';
function Login () {
  const navigate = useNavigate();
  const [Email, setUserEmail] = useState('');
  const [Password, setPassword] = useState('');
  const handleSubmit = (e) => {
      e.preventDefault();
      const user = {
          email: Email,
          password: Password
        };

        axios.post('http://localhost:5045/user/signin', user)
        .then(response => {
          if(response.data){
            var data = response.data
            var {firstname, lastname, balance} = data;
            let fullname = firstname + " "+lastname;
            localStorage.setItem('user', fullname);
              localStorage.setItem('bal', balance);
            navigate('/dashboard'); //navigate to dashboard with user details passed as prop parameters
          }else if(response.data&&response.data=='incorrect user password, try again'){
            //display error msg to user here by updating the dom inform of a caution message drop down stating the error message
            console.log(response.data);
            navigate('/login');
          }
        })
        
        .catch(err => {
          console.error(err);
      });

      };
    

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
  </Navbar.Collapse>
  </Container>
</Navbar>
      <div class = 'signinDiv'>
      <Form id = 'fc' onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value = {Email} onChange={e => setUserEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value = {Password} onChange={e => setPassword(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Signin
  </Button>
  <Form.Group id = 'txy' >
  <Form.Text >
  Don't have an account yet? <a href='' onClick={() => navigate('/signup')}>CREATE AN ACCOUNT NOW</a>
    </Form.Text>
  </Form.Group>
</Form>
        </div>        
        </div>
    )
}

export default Login;