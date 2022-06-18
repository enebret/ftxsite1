/*jshint esversion: 8 */


import './styles/aboutus.css';
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




function Investment () {
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
            <Container fluid id = 'ftx' style={{ backgroundImage: `url(${vw})`,  backgroundSize: '100% 100%', }}>
              <Row  >
            <h2 style={{ color: "white" }}>CFD Trading - Cryptocurrency</h2>
              </Row>
            </Container>

            <Container id = 'fda'>
            <Row id = 'mpm'>
                <Col md={{ span: 6}}>  
              
              <Row id = 'ftd'>
              <h2 style={{ fontWeight: '1000', color: 'black'}}>start with an <span   style={{ color: 'green', }}>Investment Plan.</span>
                </h2> 
            <p  id = 'lkq'>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests. Our support team will get assistance from AI-powered suggestions.</p>
            <p>FTX investment strategy is designed to deliver a well-balanced and globally diversified portfolio that will maximize sustained long-term returns without incurring undue risk. We offer a simple attitude to stock trading with an extraordinary Managed Account Platform that allows users to watch their accounts grow by logging in 24 hours a day. Clients have the ability to view their account anytime but are not required to make any trade accomplishment decisions on their own behalf.</p>
            <p>To reach the target of this strategy, our trading expert have designed multiple investment packages for you to choose from based on your financial needs. You can choose yourself which plan to invest into. But if you have some doubts and hesitate which plan to take, you can consult with our expert trading team.</p>
            <p>Our expert trading team studies the clients’ portfolio, financial history and stability of each investor and before recommending any package to you they look through all the aspects of your account. If you follow the expert advice you for sure get stable profit.</p>
              </Row>
        </Col>
    <Col md={6}><Row><img id="npq" src={droid} alt="q_option" /></Row></Col>
  </Row>
      </Container>
      
      <Container   fluid style={{ padding: "5%", backgroundColor:'#eee', marginBottom: '2%' }}>
      <Row style={{ margin: "auto" }}>
      <Col md={{ span: 3, }} > <Row>
      <Card style={{ width: '18rem' }}>
      
        <Card.Body>
        <Card.Title style={{ textAlign: 'center', }}>Classic</Card.Title>
        <Card.Img variant="top" src={inv} />
        <Card.Text  style={{ textAlign: 'center', }}>
        $300 - $9,999K
    </Card.Text>
    <Card.Text  style={{ textAlign: 'center', }}>
    All contracts are valid for 1 year and 100% guaranteed.
    </Card.Text>
    <Card.Text id = 'fcd'></Card.Text>
    <Card.Text  style={{ textAlign: 'center', }}>
    12% ROI
    </Card.Text>
    <Card.Text id = 'fcd'></Card.Text>
    <Card.Text  style={{ textAlign: 'center', }}>
    Unlimited Daily Trade
    </Card.Text>
    <Card.Text id = 'fcd'></Card.Text>
    <Card.Text  style={{ textAlign: 'center', }}>
    Personal Account Manager
    </Card.Text>
    <Button variant="primary" style={{ marginLeft: '25%', }}>Invest Now</Button>  
  </Card.Body>
</Card> </Row>
        </Col>

        <Col md={{ span: 3, }}  > <Row id = ''> 
              
        <Card style={{ width: '18rem' }}>
      
        <Card.Body>
        <Card.Title style={{ textAlign: 'center', }}>Platinum</Card.Title>
        <Card.Img variant="top" src={inv}  />
        <Card.Text  style={{ textAlign: 'center', }}>
        $10,000K - $49,999K
    </Card.Text>
    <Card.Text  style={{ textAlign: 'center', }}>
    All contracts are valid for 1 year and 100% guaranteed.
    </Card.Text>
    <Card.Text id = 'fcd'></Card.Text>
    <Card.Text  style={{ textAlign: 'center', }}>
    14% ROI
    </Card.Text>
    <Card.Text id = 'fcd'></Card.Text>
    <Card.Text  style={{ textAlign: 'center', }}>
    Unlimited Daily Trade
    </Card.Text>
    <Card.Text id = 'fcd'></Card.Text>
    <Card.Text  style={{ textAlign: 'center', }}>
    Personal Account Manager
    </Card.Text>
    <Button variant="primary" style={{ marginLeft: '25%', }}>Invest Now</Button>  
  </Card.Body>
</Card>  
              </Row>

    </Col>

    <Col md={{ span: 3, }}> <Row id = ''> 
              
              <Card style={{ width: '18rem' }}>
            
              <Card.Body>
              <Card.Title style={{ textAlign: 'center', }}>Gold</Card.Title>
              <Card.Img variant="top" src={inv}  />
              <Card.Text  style={{ textAlign: 'center', }}>
              $50K - $99,999K
          </Card.Text>
          <Card.Text  style={{ textAlign: 'center', }}>
          All contracts are valid for 1 year and 100% guaranteed.
          </Card.Text>
          <Card.Text id = 'fcd'></Card.Text>
          <Card.Text  style={{ textAlign: 'center', }}>
          16% ROI
          </Card.Text>
          <Card.Text id = 'fcd'></Card.Text>
          <Card.Text  style={{ textAlign: 'center', }}>
          Unlimited Daily Trade
          </Card.Text>
          <Card.Text id = 'fcd'></Card.Text>
          <Card.Text  style={{ textAlign: 'center', }}>
          Personal Account Manager
          </Card.Text>
          <Button variant="primary" style={{ marginLeft: '25%', }}>Invest Now</Button>  
        </Card.Body>
      </Card>  
                    </Row>
      
          </Col>

          <Col md={{ span: 3, }}> <Row id = ''> 
              
        <Card style={{ width: '18rem' }}>
      
        <Card.Body>
        <Card.Title style={{ textAlign: 'center', }}>Diamond</Card.Title>
        <Card.Img variant="top" src={inv}  />
        <Card.Text  style={{ textAlign: 'center', }}>
        $100K - $1M
    </Card.Text>
    <Card.Text  style={{ textAlign: 'center', }}>
    All contracts are valid for 1 year and 100% guaranteed.
    </Card.Text>
    <Card.Text id = 'fcd'></Card.Text>
    <Card.Text  style={{ textAlign: 'center', }}>
    18% ROI
    </Card.Text>
    <Card.Text id = 'fcd'></Card.Text>
    <Card.Text  style={{ textAlign: 'center', }}>
    Unlimited Daily Trade
    </Card.Text>
    <Card.Text id = 'fcd'></Card.Text>
    <Card.Text  style={{ textAlign: 'center', }}>
    Personal Account Manager
    </Card.Text>
    <Button variant="primary" style={{ marginLeft: '25%', }}>Invest Now</Button>  
  </Card.Body>
</Card>  
              </Row>

    </Col>






  </Row>
      </Container>


          
        </div>
    )
}

export default Investment;