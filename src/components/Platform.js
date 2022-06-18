/*jshint esversion: 8 */

import './styles/platform.css';
import { useNavigate } from 'react-router-dom';
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
    <NavDropdown title="My Account" id="collasible-nav-dropdown" >
      <Form id = 'fc'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
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
<Container fluid id = 'ftx'>
              <Row  >
            <h2 style={{ color: "white" }}>TradeMax LTD Platform.</h2>
              </Row>
            </Container>
    
    <Container id = 'ltx'>
    <Row id = ''>
      <Col md={6} ><Row><img id="npq" src={qOption} alt="q_option" /></Row></Col>

              <Col md={{ span: 6 }}>  <Row id = 'fta'>
              <h2>Discover Smart Investing 
              With the FTX
              Limited.
                </h2> 
              </Row>
              <Row id = 'ftd'>
            <p>The FTX Limited trading platform combines simplicity with sophistication to connect you to the world’s most volatile financial markets. Our dashboard display delivers one-click order execution and is equipped with the latest trading tools. Your trading is backed up by live charts and real-time data feeds, as well as trading signals and the latest market news and analysis.</p>
              </Row>

    </Col>

  </Row>
    </Container>

      <Container style={{ paddingBottom: '4%', }}>
      <Row id = 'ftg'>
          <h2>Optimise your Trading
          Experience.</h2>
          <p>The FTX Max Limited platform is flexible enough to meet every trading style and requirement.</p>
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
    <Col md={6}><Row><img id="npq" src={ec} alt="q_option" /></Row></Col>
  </Row>
      </Container>

      <Container>

      <Row id = ''>
      <Col md={6}><Row><img id="npq" src={pca} alt="q_option" /></Row></Col>

              <Col md={{ span: 6}}>  <Row id = ''>
              <h2>Price Alerts and
                  Analysis
                </h2> 
              </Row>
              <Row id = ''>
                </Row>
              <Row id = ''>
            <p>FTX Limited price alerts give you the freedom to step back from the markets until they meet your requirements. Set the rate at which you want to enter the markets and receive immediate notification when it’s time to trade.</p>
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
    <Col md={6}><Row><img  src={wrm} alt="q_option" /></Row></Col>
  </Row>

      </Container>
    <Container id = 'fmain'>

 
  <Row id = ''>
      <Col md={6}><Row><img id="" src={fx} alt="q_option" /></Row></Col>

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
            
            

          
        </div>
    )
}

export default Platform;