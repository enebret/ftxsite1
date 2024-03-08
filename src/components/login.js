/*jshint esversion: 8 */
import React, {useState} from 'react';
import './styles/signup.css';
import axios from 'axios';
import './styles/login.css'
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
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import vw from './pix/vw.jpg';
import droid from './pix/droid.png';
import inv from './pix/inv.png';
function Login () {
  const navigate = useNavigate();
  const [Email, setUserEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [waiter, setWaiter] = useState(false)
  const handleSubmit = (e) => {
      e.preventDefault();
      const y = ()=>setWaiter(true);
      y()
      const user = {
          email: Email,
          password: Password
        };
        //https://ftx-server-backup.eneikenna.repl.co/signin
        //http://localhost:5045/user/signin
        axios.post('https://ftx-server-backup.onrender.com/user/signin', user)
        .then(response => {
          if(!response.data.firstname){
            console.log(response.data);
            navigate('/login');
            setPassword('')
            setShow(true);
          }
        else if(response.data){
            var data = response.data
            var {firstname, lastname, balance, profit} = data;
            let fullname = firstname;
            localStorage.setItem('user', fullname);
              localStorage.setItem('bal', balance);
              localStorage.setItem('pr', profit);
            navigate('/dashboard'); //navigate to dashboard with user details passed as prop parameters
          }
        })
        
        .catch(err => {
          console.error(err);
      });

      };
    

    return (
        <div>
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container >
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
{
  show? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
  <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
  <p>
   You entered an incorrect password. Please try again.
  </p>
</Alert> : ''
}

{
  waiter? <Alert variant="success" onClose={() => setShow(false)} dismissible>
  <p>
   Kindly wait while we process your information
  </p>
</Alert> : ''
}

<Container fluid  id='form-container'>
  <Col lg={5} id="fs">
  <Form   onSubmit={handleSubmit}>
  <Form.Group  className="mb-3" controlId="validationCustom03">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required value = {Email} onChange={e => setUserEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="validationCustom03">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" requiredus value = {Password} onChange={e => setPassword(e.target.value)}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Signin
  </Button>
  <Form.Group>
  <Form.Text >
  Don't have an account yet? <a href='' onClick={() => navigate('/signup')}>SIGN UP</a>
    </Form.Text>
  </Form.Group>
</Form>   
  </Col>

  </Container>  
  <Navbar style={{marginTop: '100%', color:'#777',  }} expand="lg" bg="dark" variant="dark">
 
 <p style={{textAlign:'center', margin:'auto'}}>&reg; fxt limited 2023</p>
 
</Navbar>
        </div>
    )
}

export default Login;