/*jshint esversion: 8 */
//{/* use this to comment inside jsx*/}
import './styles/body.css';
import './styles/faq.css';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Cg from './coingecko/cg.js';
import logo from './util/logo.JPG';
import usplash from './util/usplash.jpg';
import axios from 'axios';
import ab from './pix/ab.jpg';
import mp from './pix/mp.png';
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



function Body () {
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
            var {firstname, lastname} = data;
            let fullname = firstname + " "+lastname
            console.log(fullname)
            localStorage.setItem('user', fullname);
            let pr = localStorage.getItem('user');
            console.log(pr)
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
     <div class=''>
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
    <Nav id = 'fr'>
    <NavDropdown title="My Account" id="collasible-nav-dropdown" >
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
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

       <Container fluid id = 'gep'  style={{ backgroundImage: `url(${ab})` }}>
       <Col md={{ span: 5}}>
       <Row  id = 'hel'>
            <h2 id = 'het'  style={{ color: 'white',  fontWeight: '700'}}>Automate Cryptocurrency trading with our <span  style={{ color: 'black'}}>Simple</span> & flexible platform.</h2>
            <p style={{ color: 'white',  fontWeight: '200'}}>Our team of experienced traders does the research and trading for all ours members with our winning business models to skyroket earnings.</p>
            <Button variant="primary" type="submit"  style={{ backgroundColor: '#5cb85c',  fontWeight: '600', color: 'white', border: 'none', width: '200px', marginTop: '4%'}} onClick={() => navigate('/signup')}>
                  GET STARTED TODAY
              </Button>
        </Row>
       </Col>
       </Container>

       <Container id = 'pr'>
        <Row>
        <Col md={{ span: 3}}>
            <Row>
              <h2 style={{ color: 'black',  fontWeight: '700', fontFamily: 'cursive'}}><span style={{ color: '#777',  }}>Trading made</span> easy with us</h2>
              <p  style={{ marginTop: '2%'}}>With us trading has been made easy. Choose from 250+ financial instruments with a trusted, award-winning broker.</p>
            </Row>
         </Col>
         
         <Col md={{ span: 3}}>
         
          <Row id = 'tex'>
          
            <h4 style={{ color: '#777',  fontWeight: '700'}}><img src= '/pix/fp.png' />GOLD</h4>
            <p  style={{ marginTop: '5%'}}>We offer a wide range of gold stock trading. Based on our business model we ensure and guarantee returns on every trade</p>
          </Row>
          <Row id = 'tex'>
            <h5 style={{ color: '#777',  fontWeight: '700'}}><img src= '/pix/spp.png' />CRYPTOCURRENCY</h5>
            <p  style={{ marginTop: '5%'}}>We also trade on other Cryptocurrencies to help increase our clients profit margin.</p>
          </Row>
         </Col>

         <Col md={{ span: 4}}>
          <Row id = 'lex'>
            <h4 style={{ color: '#777',  fontWeight: '700'}}><img src= '/pix/sp.png' />FOREX</h4>
            <p  style={{ marginTop: '5%'}}>With our experience in trading, we have been able to build trust with over 4k clients all over the world, as we do the tasking job for you.</p>
          </Row>
          <Row id = 'dex'>
            <h4 style={{ color: '#777',  fontWeight: '700'}}><img src= '/pix/th.png' />STOCK BOND</h4>
            <p  style={{ marginTop: '5%'}}>Invest in Stock and Bonds, the safest and widely accepted investment platform.</p>
          </Row>
          <Row id = 'lex'>
            <h4 style={{ color: '#777',  fontWeight: '700'}}><img src= '/pix/thh.png' />CANABIS</h4>
            <p  style={{ marginTop: '5%'}}>FXT LTD has turned cannabis stock trading into a very comfortable, speedy, easy, safe, and relatively risk free process</p>
          </Row>
         </Col>
        </Row>
         <Row></Row>
       </Container>


       <Container fluid id = 'msk'  >
       <Row style={{ padding: '5%'}}>
       <Col md={5}>
         <Row id = 'ct'>
            <h2 style={{ color: '#fff',  fontWeight: '700', fontFamily: 'cursive'}}><span style={{ color: 'black',}}>Reliability</span> & Security</h2>
            <p  style={{ marginTop: '2%', color: '#fff'}}>We take pride in our solutions. And this because we have contributed numerous resources and efforts in designing, testing and modeling them. For our automized arbitrage bot, exchanges have been carefully studied and selected based on specific characteristics such as reliability and trustworthiness, among others. A similar strict selection process has been allocated to the cryptocurrencies that the bot takes into account. These currencies must demonstrate real foundations.</p>
         </Row>
         </Col>
         <Col md={7}>
         <img src= '/pix/lp.png' style={{ height: 'auto', width: '100%'}}/>
         </Col>
       </Row>
         
       </Container>

       <Container id = 'ifx'>
         <Row></Row>
         <Row style={{  textAlign: 'center'}}>
           <Row  md = {4} style={{ marginTop: '4%',margin: 'auto'}}><h2  style={{  fontWeight: '700',  backgroundColor: '#5cb85c', color: 'white', padding: '2%', borderRadius: '5px',  margin: 'auto'}}>Our Features</h2></Row>
           <Col md={{ span: 4}} style={{ marginTop: '4%',}}>
            <Row>
              <h2>Model Portfolio</h2>
              <p>Diversified portfolio of cannabis stock hand-picked and thoroughly researched</p>
            </Row>
           </Col>
           <Col md={{ span: 4}}  style={{  marginTop: '4%'}} >
           <Row>
              <h2>Stock Analysis</h2>
              <p>We tell you exactly when we're buying or selling a stock for our model portfolio</p>
            </Row>
           </Col>
           <Col md={{ span: 4}} style={{  marginTop: '4%'}}>
           <Row>
              <h2>Access to an expert</h2>
              <p>Ask questions, make requests, and even chat with our customer service via life chat support</p>
            </Row>
           </Col>
         </Row>
       </Container>

      <Container  fluid style={{ backgroundImage: `url(${mp})` }}>
        <Row  style={{ marginTop: '10%'}}>
          <h2 style={{ textAlign: 'center', fontWeight: '700'}}>COMPANY SUCCESS</h2>
          <h3 style={{ textAlign: 'center', fontWeight: '700', marginTop: '5%'}}>Some fun facts about our company</h3>
          <Col  md={{ span: 3}}>
            <h2 style={{ textAlign: 'center', fontWeight: '700', marginTop: '8%'}}>5</h2>
            <p  style={{ textAlign: 'center', }}>Years of Excellence</p>
          </Col>
          <Col  md={{ span: 3}}>
          <h2 style={{ textAlign: 'center', fontWeight: '700', marginTop: '8%'}}>100%</h2>
            <p  style={{ textAlign: 'center', }}>Client Satisfaction</p>
          </Col>
          <Col  md={{ span: 3}}>
          <h2 style={{ textAlign: 'center', fontWeight: '700', marginTop: '8%'}}>1023k</h2>
            <p  style={{ textAlign: 'center', }}>Active Clients</p>
          </Col>
          <Col  md={{ span: 3}}>
          <h2 style={{ textAlign: 'center', fontWeight: '700', marginTop: '8%'}}>590500</h2>
            <p  style={{ textAlign: 'center', }}>Payouts (USD)</p>
          </Col>
        </Row>
      </Container>
        <Row id = 'cl'>
          <h2 style={{ fontWeight: '700',  textAlign: 'center'}}>What Our Client Say?</h2>
          
        </Row>
        <Row >
        <h6  style={{ fontWeight: '700',textAlign: 'center', width: '600px', margin: 'auto'}}>View the testimonials of our happy clients who have worked with us and enjoyed the trading system with FXT LTD</h6>
        </Row>

       
      <Container  id = 'qt'>
      <Row  >
          <Col md={{ span: 4,}} style={{ margin: 'auto' }}>
          <Card style={{   marginTop: '3%', }} >
      
      <Card.Body  >
      
      <Card.Img variant="top" src="/pix/ke.png" style={{ height: 'auto', width: 'auto', marginLeft: '25%'}}/>
      <Card.Title style={{ textAlign: 'center', }}>ADAMS WILSON</Card.Title>
      <Card.Text  style={{ textAlign: 'center', }}>
      I am in a group who has made a number of investments in FXT LTD. I find them to be quite knowledgeable and professional about their business. They run it profitably, and they pay on time.
          </Card.Text>
  
        </Card.Body>
          </Card>  
      
          </Col>
          <Col md={{ span: 4}}>
          <Card style={{  marginTop: '3%'}}>
      
      <Card.Body>
      
      <Card.Img variant="top" src="/pix/ke.png" style={{ height: 'auto', width: 'auto', marginLeft: '25%'}}/>
      <Card.Title style={{ textAlign: 'center', }}>PAUL BLISS</Card.Title>
      <Card.Text  style={{ textAlign: 'center', }}>
      I am in a group who has made a number of investments in FXT LTD. I find them to be quite knowledgeable and professional about their business. They run it profitably, and they pay on time.
          </Card.Text>
  
        </Card.Body>
          </Card> 
          </Col>
          <Col md={{ span: 4}}>
          <Card style={{ marginTop: '3%'}}>
      <Card.Body>
      
      <Card.Img variant="top" src="/pix/kate.png" style={{ height: 'auto', width: 'auto', marginLeft: '25%'}}/>
      <Card.Title style={{ textAlign: 'center', }}>MATHIAS KATE</Card.Title>
      <Card.Text  style={{ textAlign: 'center', }}>
      I am in a group who has made a number of investments in FXT LTD. I find them to be quite knowledgeable and professional about their business. They run it profitably, and they pay on time.
          </Card.Text>
  
        </Card.Body>
          </Card> 
          </Col>
        </Row>
      </Container>
            {/*the below div is last div/ function component div*/}
          </div>
    )
}

export default Body;