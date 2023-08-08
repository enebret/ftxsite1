/*jshint esversion: 8 */
import React, {useEffect, useState} from 'react';
import './styles/dashboard.css';
import axios from 'axios';
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

function Dashboard () {
    const [authenticated, setAuthenticated] = useState(null);
    const navigate = useNavigate();
    //const url = "https://api3.binance.com/api/v3/avgPrice?symbol=";
    const url = "https://api.coingecko.com/api/v3/coins/"
    const [btc, newBtc] = useState(null);
    const [th, newTH] = useState(null);
    const [ada, newAda] = useState(null);
    const [xrp, newXRP] = useState(null);
    var loggedInUser = localStorage.getItem('user')
    var bal = localStorage.getItem('bal')
    useEffect(()=>{
        if(loggedInUser){
          setAuthenticated(loggedInUser);
        } else {
          navigate('/login')
        };
        async function getApi (){
          try{
            const adaReturnedPrice = await axios.get(url+"ADAUSDT");
            const adaPrice = parseFloat(adaReturnedPrice.data.price);
            newAda(adaPrice.toFixed(2));
            const btcReturnedPrice = await axios.get(url+"bitcoin?tickers=true");
            const btcPrice = parseFloat(btcReturnedPrice.market_data.current_price.usd);
            newBtc(btcPrice.toFixed(2));
            const xrpReturnedPrice = await axios.get(url+"XRPUSDT");
            const xrpPrice = parseFloat(xrpReturnedPrice.data.price);
            newXRP(xrpPrice.toFixed(2));
          }
          catch (error) {
            console.error(error)
          }; 
        };
        setInterval(()=>{
          getApi()
        }, 3000)
    }, [])
    if(!authenticated){
      navigate('/login')
    };
    console.log(loggedInUser)
 
//dashboard component should be here and the user details be passed as props to the dashboard component once there is a response from the backend
    return (
      <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">FXT</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />

  <Navbar.Collapse id="responsive-navbar-nav" >
  
  <Nav.Link id='text' onClick={() => navigate('')}>Deposit</Nav.Link>
      <Nav.Link id='text'  onClick={() => navigate('')}>Withdraw</Nav.Link>
      <Nav.Link  id='text'  onClick={ () => {localStorage.clear();navigate('/')}}>Logout</Nav.Link>
  
  </Navbar.Collapse>
  </Container>
  </Navbar>
       <div>
        <Container>
       <Row>
       <p>Welcome to your page {loggedInUser}</p>
          <p>Your current investment balance is <span id='text-color'>${bal}.00</span></p>
          <p>coin prices in real time</p>
       </Row>
      <Row  id= 'margin-b'>
        <table>
          <tr>
           <td>cryptocurrency</td>
           <td>price</td>
          </tr>
          <tr>
          <td>bitcoin</td>
          <td>${btc}</td>
          </tr>
          <tr>
          <td>cardano</td>
           <td>${ada}</td>
          </tr>
          <tr>
          <td>ripple</td>
           <td>${xrp}</td>
          </tr>
        </table>
        </Row>
        </Container>
        <Navbar expand="lg" bg="dark" variant="dark">
  <Container>
  <Row id = 'margin-c'>
  &reg; fxt limited 2023
      </Row>
  </Container>
</Navbar>
</div>
        </div>
    )
}

export default Dashboard;