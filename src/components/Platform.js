/*jshint esversion: 8 */

import './styles/platform.css';
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './util/logo.JPG';
import firstDiv from './util/aboutusimages/first_div.jpg';
import secondDiv from './util/aboutusimages/second_div.jpg';
import firstPng from './util/aboutusimages/first_png.png';
import fourthDiv from './util/aboutusimages/fourth_div.jpg';
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
import ec from './pix/ec.png';
import fx from './pix/fx.png';
import wrm from './pix/wrm.png';
import pca from './pix/pca.png';


function Platform () {
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
    <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<Container fluid id = 'fdq'>
              <Row  >
            <h2 style={{ color: "white" }}>FXT LTD Platform.</h2>
              </Row>
            </Container>
    
    <Container id = 'ltx'>
    <Row id = ''>
      <Col md={6} ><Row><img id="npq" src={qOption} alt="q_option" style={{ height: '100%', width: '100%',}}/></Row></Col>

              <Col md={{ span: 6 }}>  <Row id = 'fta'>
              <h2>Discover Smart Investing 
              With the FXT
              Limited.
                </h2> 
              </Row>
              <Row id = 'ftd'>
            <p>The FXT Limited trading platform combines simplicity with sophistication to connect you to the world’s most volatile financial markets. Our dashboard display delivers one-click order execution and is equipped with the latest trading tools. Your trading is backed up by live charts and real-time data feeds, as well as trading signals and the latest market news and analysis.</p>
              </Row>

    </Col>

  </Row>
    </Container>

      <Container style={{ paddingBottom: '4%', }}>
      <Row id = 'ftg'>
          <h2>Optimise your Trading
          Experience.</h2>
          <p>The FXT Max Limited platform is flexible enough to meet every trading style and requirement.</p>
           </Row>
 
      </Container>


      <Container>
      <Row id = ''>
      <Col md={{ span: 6 }}>  <Row id = ''>
              <h2>Economic Calender
                </h2> 
              </Row>
              <Row id = ''>
            <p>Create a personal investment schedule and prepare for market volatility around key economic events, news and major decisions. The economic calendar is continually updated and events are rated by importance and relevance.</p>
              </Row>

    </Col>
    <Col md={6}><Row><img id="npq" src={ec} alt="q_option" style={{ height: '100%', width: '100%',}}/></Row></Col>
  </Row>
      </Container>

      <Container>

      <Row id = ''>
      <Col md={6}><Row><img id="npq" src={pca} alt="q_option" style={{ height: '100%', width: '100%',}}/></Row></Col>

              <Col md={{ span: 6}}>  <Row id = ''>
              <h2>Price Alerts and
                  Analysis
                </h2> 
              </Row>
              <Row id = ''>
                </Row>
              <Row id = ''>
            <p>FXT Limited price alerts give you the freedom to step back from the markets until they meet your requirements. Set the rate at which you want to enter the markets and receive immediate notification when it’s time to trade.</p>
              </Row>

    </Col>

  </Row>
      </Container>

      <Container>
      <Row id = ''>
      <Col md={{ span: 6}}>  <Row id = ''>
              <h2>Risk Management
                </h2> 
              </Row>
              <Row id = ''>
                </Row>
              <Row id = ''>
            <p>The automatic stop loss, take profit and order entry tools allow you to maximise your profit potential while reducing your risk of loss. The ‘set and forget’ tools will run in the background, relieving you from the need to monitor open trades.</p>
              </Row>

    </Col>
    <Col md={6}><Row><img  src={wrm} alt="q_option" style={{ height: '100%', width: '100%',}}/></Row></Col>
  </Row>

      </Container>
    <Container id = 'fmain'>

 
  <Row id = ''>
      <Col md={6}><Row><img id="" src={fx} alt="q_option" style={{ height: '100%', width: '100%',}}/></Row></Col>

              <Col md={{ span: 6}}>  <Row id = ''>
              <h2>Trading Signals
                </h2> 
              </Row>
              <Row id = ''>
                </Row>
              <Row id = ''>
            <p>Trading signals are provided by one of the financial industry’s leading research houses. They immediately alert you about possible trading opportunities on a real time basis. Although not infallible, trading signals are used by many experienced investors to enhance their own trading strategies.</p>
              </Row>

    </Col>

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

export default Platform;