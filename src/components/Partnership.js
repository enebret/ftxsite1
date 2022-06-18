/*jshint esversion: 8 */

import './styles/partnership.css';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';

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
            <Container fluid id = 'ftx' style={{ backgroundImage: `url(${wb})`,  backgroundSize: '100% 100%', }}>
              <Row id = 'tf'>
            <h2 id = 'btr0'>Use the leverage of <span style={{ color: 'green',  fontWeight: '1000'}}>Referrals</span></h2>
            <Row md={6}>
            <Button variant="primary" type="submit"  style={{ backgroundColor: '#fff',  fontWeight: '600', color: 'green', border: 'none',}}>
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
              <Button variant="primary" type="submit"  style={{ backgroundColor: 'green',  fontWeight: '600', border: 'none'}}>
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

          
        </div>
    )
}

export default Partnership;