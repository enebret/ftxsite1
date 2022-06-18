/*jshint esversion: 8 */


import firstDiv from './util/aboutusimages/first_div.jpg';
import './styles/faq.css';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';
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
import af from './pix/fq.jpg';



function Faq () {
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
            
<Container fluid id = 'lox' style={{ backgroundImage: `url(${af})`, backgroundSize: '100% 100%',}}>
      <Row >
        <h2 id = 'faxd'>Frequent <span  style={{ fontWeight: '1000'}}>Questions.</span></h2>
      </Row>
</Container>

<Container fluid id = 'faxe'>
      <Row >
        <h2 id = 'faxee'>Frequent Questions.</h2>
      </Row>
</Container>

<Container id = 'raq'>
      <Row>
        <h3>If we see that this section is useful for you and there is a need, we will add new questions here. Please, before contacting <span  style={{ fontWeight: '1000', color: 'yellowgreen'}}>Customer Support</span> read carefully this section.</h3>
      </Row>
      <Row></Row>
      <Row>
        <Col  md={7}  ><Row >
            <h2  style={{ color: 'black'}}>General Questions</h2>
          </Row>
          <Row>
          <Accordion  flush>
             <Accordion.Item eventKey="0">
                <Accordion.Header id = 'ekk'>What is this website about?</Accordion.Header>
                    <Accordion.Body>
                    FTX LTD is a managed stock trading platform with user friendly interface and attractive offer, that aids client invest with minimal or no risk.
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>

                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>What Markets do you trade?</Accordion.Header>
                                                          <Accordion.Body>
                                                          We trade on gold, cannabis, forex and bitcoin.
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>

                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>Can I create more than one account?</Accordion.Header>
                                                          <Accordion.Body>
                                                          No. you are allowed to create only one account. For special situations please contact our <span style={{ fontWeight: '700'}}>Customer Support.</span>
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>

                                            <Row></Row>
                                            <Row><h2  style={{ color: 'black'}} id = 'hox'>Account Questions</h2></Row>

                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>How to create a new account?</Accordion.Header>
                                                          <Accordion.Body>
                                                          It’s not difficult at all. Click on the following button, fill in the registration form and create a new account.
                                                         <Row> <Button variant="primary" type="submit"  style={{ backgroundColor: '#fff',  fontWeight: '600', color: 'green', border: '1px, white', width: '200px'}}>Contact us now</Button></Row>
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>

                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>If I do not have a computer can I use my mobile device to track my account?</Accordion.Header>
                                                          <Accordion.Body>
                                                          Yes. Our website is all fully responsive and functional with Apple/Android phones and tablets.
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>
                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>How can I keep my account safe?</Accordion.Header>
                                                          <Accordion.Body>
                                                          We take all security measures to protect your account and keep it safe from third parties intrusion.
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>
                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>Can I create more than one account?</Accordion.Header>
                                                          <Accordion.Body>
                                                          No. you are allowed to create only one account. For special situations please contact our <span style={{ fontWeight: '700'}}>Customer Support.</span>
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>
                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>How to change my password?</Accordion.Header>
                                                          <Accordion.Body>
                                                          Enter your account and change your e-mail address and password in “Account Settings” section.
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>
                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>I forgot my password. What should I do?</Accordion.Header>
                                                          <Accordion.Body>
                                                          Go to Password Reminder section, enter your registration e-mail address and follow the instructions.
                                                          <Row> <Button variant="primary" type="submit"  style={{ backgroundColor: '#fff',  fontWeight: '600', color: 'green', border: '1px, white', width: '200px'}}>Password Reminder</Button></Row>
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>
                                            <Row></Row>
                                            <Row><h2  style={{ color: 'black'}} id = 'hox'>Investment Questions</h2></Row>
                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>What is the process of investing?</Accordion.Header>
                                                          <Accordion.Body>
                                                          To make investments you should register with us, create an account and then you can make your deposit. All the investments are made in your personal account after login.
                                                          <Row> <Button variant="primary" type="submit"  style={{ backgroundColor: '#fff',  fontWeight: '600', color: 'green', border: '1px, white', width: '200px'}}>Apply Now</Button></Row>
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>
                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>What Currencies can I use to invest?</Accordion.Header>
                                                          <Accordion.Body>
                                                          We accept <span style={{ fontWeight: '700'}}>Bitcoin, Dollars, Euro</span> and <span style={{ fontWeight: '700'}}>Pounds.</span>
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>
                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>How much is the minimum allowed amount to start investing?</Accordion.Header>
                                                          <Accordion.Body>
                                                          You can start investing with as low as 500 USD.
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>
                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>How fast are my deposits added to my account?</Accordion.Header>
                                                          <Accordion.Body>
                                                          Transactions will be credited on your account after payment have been confirmed. This might take upto 30 minutes for payment to reflect in your account
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>
                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>Is our initial investment guaranteed?</Accordion.Header>
                                                          <Accordion.Body>
                                                          Yes, all initial investments are guaranteed to be paid back to the investor when ever he/she wants to withdraw|terminate their contract.
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                              </Row>
                                              <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>How is the interest calculated?</Accordion.Header>
                                                          <Accordion.Body>
                                                          Your interest is calculated every business day based on the return's of your trade.
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>
                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>Can I make additional deposits?</Accordion.Header>
                                                          <Accordion.Body>
                                                          Yes, but note that all the transactions are handled separately.
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>
                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>How to check my account balance?</Accordion.Header>
                                                          <Accordion.Body>
                                                          You can check your balance in your personal account any time you need.
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>
                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>Are there risks to lose money?</Accordion.Header>
                                                          <Accordion.Body>
                                                          There are certain risks in any investment programs. However, there are some simple ways that can help you to reduce risks of losing your money. First, set a certain financial goal and deposit such sum of money that you can afford. Remember that our expert trading team is always ready to help you.
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>
                                            <Row id = 'dfg'>
                                                <Accordion  flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>Who manages the funds?</Accordion.Header>
                                                          <Accordion.Body>
                                                          Our expert team of TradeMax LTD are managing your funds.
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>
                                           
                                                                  <Row></Row>
                                                                  <Row><h2  style={{ color: 'black'}} id = 'hox'>Withdrawal Questions</h2></Row>

                                                                  <Row id = 'dfg'>
                                                                      <Accordion  flush>
                                                                        <Accordion.Item eventKey="0">
                                                                            <Accordion.Header>How to withdraw funds?</Accordion.Header>
                                                                                <Accordion.Body>
                                                                                You can withdraw your money in your personal account in the Withdraw Section.
                                                                          </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                                  </Row>

                                                                  <Row id = 'dfg'>
                                                                      <Accordion  flush>
                                                                        <Accordion.Item eventKey="0">
                                                                            <Accordion.Header>How fast is my withdrawal processed?</Accordion.Header>
                                                                                <Accordion.Body>
                                                                                Withdrawal requests for sums up to $500.00 will be paid in less than 2 hours. Withdrawal requests with more than $500 of amount will take up to 24 hours to be processed.
                                                                          </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                                  </Row>
                                                                  <Row id = 'dfg'>
                                                                      <Accordion  flush>
                                                                        <Accordion.Item eventKey="0">
                                                                            <Accordion.Header>Are there any fees to make withdrawal?</Accordion.Header>
                                                                                <Accordion.Body>
                                                                                No, there are no fees for withdrawing funds.
                                                                          </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                                  </Row>
                                                                  <Row id = 'dfg'>
                                                                      <Accordion  flush>
                                                                        <Accordion.Item eventKey="0">
                                                                            <Accordion.Header>Is there a minimum sum for withdrawal?</Accordion.Header>
                                                                                <Accordion.Body>
                                                                                Yes, a minimum amount you can request for a withdrawal is $1 US Dollar.
                                                                          </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                                  </Row>

                                                                  <Row></Row>
                                                                  <Row><h2  style={{ color: 'black'}} id = 'hox'>Affiliate Withdrawal Questions</h2></Row>

                                                                  <Row id = 'dfg'>
                                                                      <Accordion  flush>
                                                                        <Accordion.Item eventKey="0">
                                                                            <Accordion.Header>How Affiliate Program Works?</Accordion.Header>
                                                                                <Accordion.Body>
                                                                                You will earn up to 6% commission from the invested funds of your referred members. Any additional investment made by your affiliate will generate. Commission is credited to your account balance instantly, without any delays.
                                                                                <Row> <Button variant="primary" type="submit"  style={{ backgroundColor: '#fff',  fontWeight: '600', color: 'green', border: '1px, white', width: '200px'}}>Read More</Button></Row>
                                                                          </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                                  </Row>

                                                                  <Row id = 'dfg'>
                                                                      <Accordion  flush>
                                                                        <Accordion.Item eventKey="0">
                                                                            <Accordion.Header>How can I promote my referral link?</Accordion.Header>
                                                                                <Accordion.Body>
                                                                                All members have an individual referral link. You are able to promote your referral link by placing our banners or text ads on your website, blog or just put the affiliate link in message forum signatures, email signatures or any other places.
                                                                          </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                                  </Row>
                                                                  <Row id = 'dfg'>
                                                                      <Accordion  flush>
                                                                        <Accordion.Item eventKey="0">
                                                                            <Accordion.Header>Should I have an active investment to participate in the Referral program?</Accordion.Header>
                                                                                <Accordion.Body>
                                                                                No, as a standard member, you are not obligated to have an active investment in order to participate in affiliate program and earning commissions. However, as a standard member, you will earn 6% commission.
                                                                          </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                                  </Row>
                                                                  <Row id = 'dfg'>
                                                                      <Accordion  flush>
                                                                        <Accordion.Item eventKey="0">
                                                                            <Accordion.Header id = 'tdr'>Should I have an active investment to participate in the Representatives program?</Accordion.Header>
                                                                                <Accordion.Body>
                                                                                No, it’s not an obligation to have an active deposit in order to become our regional representative. All you have to do is willing to promote TradeMax LTD in the best of your abilities. You will earn 6% commission for every investment making by your referrals
                                                                          </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                                  </Row>

          </Col>                                  
                <Col md = {4} id = 'tdr' style={{ marginLeft:'2%', marginTop: '3%'}}><Row id = 'rex'>
                      <p  >CAN'T FIND YOUR QUESTION?</p>
                      <p  style={{  color: '#777',}}>Our customer support team are ready to answer your questions.</p>
                      <Button variant="primary" type="submit"  style={{ backgroundColor: '#fff',  fontWeight: '600', color: 'green', border: '1px, white', }}>Contact us now</Button>
                  </Row>
                  </Col>
        </Row>
            </Container>
           
            
              




          
        </div>
    )
}

export default Faq;