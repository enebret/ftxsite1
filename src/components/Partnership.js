/*jshint esversion: 8 */

import './styles/partnership.css';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import firstDiv from './util/aboutusimages/first_div.jpg';
import secondDiv from './util/partnershipimages/cryptocurrency.png';
import thirdDiv from './util/partnershipimages/remote.png';
import fourthDiv from './util/partnershipimages/slack.png';
import fifthDiv from './util/partnershipimages/spreadsheet.png';
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
import wb from './pix/wb.jpg';

function Partnership () {
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
    <div>
       
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">FTX</Navbar.Brand>
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
    <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            <Container fluid id = 'ftx' style={{ backgroundImage: `url(${wb})`,  backgroundSize: '100% 100%', }}>
              <Row id = 'tf'>
            <h2 id = 'btr0'>Use the leverage of <span style={{ color: 'green',  fontWeight: '1000'}}>Referrals</span></h2>
            <Row md={6}>
            <Button variant="primary" type="submit"  onClick={() => navigate('/signup')} style={{ backgroundColor: '#fff',  fontWeight: '600', color: 'green', border: 'none',}}>
                  START EARNING TODAY
              </Button>
            </Row>
              </Row>
            </Container>
            <Container fluid id = 'rftc'>
              
                <h2 id = 'tr' style={{ color: 'white',  fontWeight: '200'}}>Affiliate Program</h2>
            
            </Container>
            <Container fluid id = 'rfte'>
              <Row >
                <p id = 'rftf'>With our affiliate program you can make money by referring clients to FTX LTD platform. Promote FTX LTD website by placing our banners or text ads on your website, blog or just put the affiliate link in message forum signatures, email signatures or any other places.</p>
                <p id = 'rftf'>If any visitor clicks on the banner or text ad, opens a new account with FTX LTD and makes an investment, you will get a   <span style={{ color: 'green',  fontWeight: '600'}}>6% commission</span> from the total of their invested funds. Any additional investment made by your affiliate will generate further 6% commission. Commission is credited to your account balance instantly, without any delays.</p>
              </Row>

              <Row id = 'rftg'>
              <Col md={{ span: 5}}> 
              <Row id = 'ftc'>
                </Row>
              <Row id = 'ftd'>
                <h4 style={{ color: 'green',  fontWeight: '200'}}><span style={{ fontWeight: '700'}}>6%</span> Commission for standard members</h4>
            <p>Trading signals are provided by one of the financial industry’s leading research houses. They immediately alert you about possible trading opportunities on a real time basis. Although not infallible, trading signals are used by many experienced investors to enhance their own trading strategies.</p>
              </Row>
            </Col>
            <Col md={4}></Col>
          </Row>
          <Row md={5} id = 'btr4'>
              <Button variant="primary" type="submit" onClick={() => navigate('/signup')} style={{ backgroundColor: 'green',  fontWeight: '600', border: 'none'}}>
                  GET STARTED TODAY
              </Button>
              </Row>
             
            </Container>


            <Container id = 'lrow'>
              <Row>
                <p style={{ color: 'green',  fontWeight: '700'}}  id = 'mgx'>Spamming, unsolicited emails</p>
                <p >We do not endorse or permit our affiliates to send out unsolicited emails to promote FTX LTD. If we find out that any affiliate is doing this, we immediately close this account. Any unpaid earnings generated by that affiliate are forfeited.</p>
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

export default Partnership;