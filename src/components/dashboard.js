/*jshint esversion: 8 */
import React, {useEffect, useState} from 'react';
import './styles/dashboard.css';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import CloseButton from 'react-bootstrap/CloseButton';
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
    //for first modal
    const [show, setShow] = useState(false);
    const [withdraw, setWithdraw] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleExit = () => setWithdraw(false);
    const handleWithdraw = () => setWithdraw(true);
    //const url = "https://api3.binance.com/api/v3/avgPrice?symbol=";
    const url = "https://api.coingecko.com/api/v3/coins/"
    const [btcLogo, newBtcLogo] = useState(null);
    const [btc, newBtc] = useState(null);
    const [btcTwentyFourHigh, newBtcTwentyFourHigh] = useState(null);
    const [btcTwentyFourLow, newBtcTwentyFourLow] = useState(null);
    const [btcmarketCap, newBtcMarketCap] = useState(null);
    const [eth, newEth] = useState(null);
    const [ethLogo, newEthLogo] = useState(null);
    const [ethTwentyFourHigh, newEthTwentyFourHigh] = useState(null);
    const [ethTwentyFourLow, newEthTwentyFourLow] = useState(null);
    const [ethmarketCap, newEthMarketCap] = useState(null);
    const [xrp, newXrp] = useState(null);
    const [xrpLogo, newXrpLogo] = useState(null);
    const [xrpTwentyFourHigh, newXrpTwentyFourHigh] = useState(null);
    const [xrpTwentyFourLow, newXrpTwentyFourLow] = useState(null);
    const [xrpmarketCap, newXrpMarketCap] = useState(null);
    const [sol, newSol] = useState(null);
    const [solLogo, newSolLogo] = useState(null);
    const [solTwentyFourHigh, newSolTwentyFourHigh] = useState(null);
    const [solTwentyFourLow, newSolTwentyFourLow] = useState(null);
    const [solmarketCap, newSolMarketCap] = useState(null);
    const [usdt, newUsdt] = useState(null);
    const [usdtLogo, newUsdtLogo] = useState(null);
    const [usdtTwentyFourHigh, newUsdtTwentyFourHigh] = useState(null);
    const [usdtTwentyFourLow, newUsdtTwentyFourLow] = useState(null);
    const [usdtmarketCap, newUsdtMarketCap] = useState(null);
    //const [availableBal, newAvailableBal] = useState(null);
    //const [dailyProfit, newDailyProfit] = useState(null);
    var loggedInUser = localStorage.getItem('user');
    var bal = localStorage.getItem('bal');
    var pr = localStorage.getItem('pr');
    async function getCoinData () {
      let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
      const btcReturnedPrice = await axios.get(url+"bitcoin?tickers=true");
            const btcLogo = btcReturnedPrice.data.image.small;
            newBtcLogo(btcLogo);
            const btcPrice = parseFloat(btcReturnedPrice.data.market_data.current_price.usd);
            newBtc(USDollar.format(btcPrice));
            const twentyFourHourHigh = btcReturnedPrice.data.market_data.high_24h.usd;
            newBtcTwentyFourHigh(USDollar.format(twentyFourHourHigh))
            const twentyFourHourLow = btcReturnedPrice.data.market_data.low_24h.usd;
            newBtcTwentyFourLow(USDollar.format(twentyFourHourLow))
            const marketCAp = btcReturnedPrice.data.market_data.market_cap.usd;
            newBtcMarketCap(USDollar.format(marketCAp))
            //const totalVol = btcReturnedPrice.data.market_data.total_volume.usd;
            const ethReturnedData = await axios.get(url+"ethereum?tickers=true");
            const ethLogo = ethReturnedData.data.image.small;
            newEthLogo(ethLogo);
            const ethPrice = parseFloat(ethReturnedData.data.market_data.current_price.usd);
            newEth(USDollar.format(ethPrice));
            const ethDataTwentyFourHourHigh = ethReturnedData.data.market_data.high_24h.usd;
            newEthTwentyFourHigh(USDollar.format(ethDataTwentyFourHourHigh))
            const ethDataTwentyFourHourLow = ethReturnedData.data.market_data.low_24h.usd;
            newEthTwentyFourLow(USDollar.format(ethDataTwentyFourHourLow))
            const ethDatamarketCAp = ethReturnedData.data.market_data.market_cap.usd;
            newEthMarketCap(USDollar.format(ethDatamarketCAp))
        ///////////////////////////////////////////////////////////////////////////////////////////
        const xrpReturnedData = await axios.get(url+"ripple?tickers=true");
        const xrpLogo = xrpReturnedData.data.image.small;
        newXrpLogo(xrpLogo);
        const xrpPrice = parseFloat(xrpReturnedData.data.market_data.current_price.usd);
        newXrp(USDollar.format(xrpPrice));
        const xrpDataTwentyFourHourHigh = xrpReturnedData.data.market_data.high_24h.usd;
        newXrpTwentyFourHigh(USDollar.format(xrpDataTwentyFourHourHigh))
        const xrpDataTwentyFourHourLow = xrpReturnedData.data.market_data.low_24h.usd;
        newXrpTwentyFourLow(USDollar.format(xrpDataTwentyFourHourLow))
        const xrpDatamarketCAp = xrpReturnedData.data.market_data.market_cap.usd;
        newXrpMarketCap(USDollar.format(xrpDatamarketCAp))
      //////////////////////////////////////////////////////////////////////////////////////////////
      const solReturnedData = await axios.get(url+"solana?tickers=true");
      const solLogo = solReturnedData.data.image.small;
      newSolLogo(solLogo);
      const solPrice = parseFloat(solReturnedData.data.market_data.current_price.usd);
      newSol(USDollar.format(solPrice));
      const solDataTwentyFourHourHigh = solReturnedData.data.market_data.high_24h.usd;
      newSolTwentyFourHigh(USDollar.format(solDataTwentyFourHourHigh))
      const solDataTwentyFourHourLow = solReturnedData.data.market_data.low_24h.usd;
      newSolTwentyFourLow(USDollar.format(solDataTwentyFourHourLow))
      const solDatamarketCAp = solReturnedData.data.market_data.market_cap.usd;
      newSolMarketCap(USDollar.format(solDatamarketCAp))
      /////////////////////////////////////////////////////////////////////////////////////////////
      const usdtReturnedData = await axios.get(url+"tether?tickers=true");
      const usdtLogo = usdtReturnedData.data.image.small;
      newUsdtLogo(usdtLogo);
      const usdtPrice = parseFloat(usdtReturnedData.data.market_data.current_price.usd);
      newUsdt(USDollar.format(usdtPrice));
      const usdtDataTwentyFourHourHigh = usdtReturnedData.data.market_data.high_24h.usd;
      newUsdtTwentyFourHigh(USDollar.format(usdtDataTwentyFourHourHigh))
      const usdtDataTwentyFourHourLow = usdtReturnedData.data.market_data.low_24h.usd;
      newUsdtTwentyFourLow(USDollar.format(usdtDataTwentyFourHourLow))
      const usdtDatamarketCAp = usdtReturnedData.data.market_data.market_cap.usd;
      newUsdtMarketCap(USDollar.format(usdtDatamarketCAp))


    };
    getCoinData()
    useEffect(()=>{
        if(loggedInUser){
          setAuthenticated(loggedInUser);
        } else {
          navigate('/login')
        };
        async function getApi (){
          try{
            let USDollar = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
          });
           const btcReturnedPrice = await axios.get(url+"bitcoin?tickers=true");
            const btcPrice = parseFloat(btcReturnedPrice.data.market_data.current_price.usd);
            newBtc(USDollar.format(btcPrice));
            const twentyFourHourHigh = btcReturnedPrice.data.market_data.high_24h.usd;
            newBtcTwentyFourHigh(USDollar.format(twentyFourHourHigh))
            const twentyFourHourLow = btcReturnedPrice.data.market_data.low_24h.usd;
            newBtcTwentyFourLow(USDollar.format(twentyFourHourLow))
            const marketCAp = btcReturnedPrice.data.market_data.market_cap.usd;
            newBtcMarketCap(USDollar.format(marketCAp))
            //////////////////////////////////////////////////////////////////////
            const ethReturnedData = await axios.get(url+"ethereum?tickers=true");
            const ethPrice = parseFloat(ethReturnedData.data.market_data.current_price.usd);
            newEth(USDollar.format(ethPrice));
            const ethDataTwentyFourHourHigh = ethReturnedData.data.market_data.high_24h.usd;
            newEthTwentyFourHigh(USDollar.format(ethDataTwentyFourHourHigh))
            const ethDataTwentyFourHourLow = ethReturnedData.data.market_data.low_24h.usd;
            newEthTwentyFourLow(USDollar.format(ethDataTwentyFourHourLow))
            const ethDatamarketCAp = ethReturnedData.data.market_data.market_cap.usd;
            newEthMarketCap(USDollar.format(ethDatamarketCAp))
            /////////////////////////////////////////////////////////////////////////
            const xrpReturnedData = await axios.get(url+"ripple?tickers=true");
            const xrpPrice = parseFloat(xrpReturnedData.data.market_data.current_price.usd);
            newXrp(USDollar.format(xrpPrice));
            const xrpDataTwentyFourHourHigh = xrpReturnedData.data.market_data.high_24h.usd;
            newXrpTwentyFourHigh(USDollar.format(xrpDataTwentyFourHourHigh))
            const xrpDataTwentyFourHourLow = xrpReturnedData.data.market_data.low_24h.usd;
            newXrpTwentyFourLow(USDollar.format(xrpDataTwentyFourHourLow))
            const xrpDatamarketCAp = xrpReturnedData.data.market_data.market_cap.usd;
            newXrpMarketCap(USDollar.format(xrpDatamarketCAp))
            ///////////////////////////////////////////////////////////////////////////////
            const  solReturnedData = await axios.get(url+"solana?tickers=true");
            const solPrice = parseFloat(solReturnedData.data.market_data.current_price.usd);
            newSol(USDollar.format(solPrice));
            const solDataTwentyFourHourHigh = solReturnedData.data.market_data.high_24h.usd;
            newSolTwentyFourHigh(USDollar.format(solDataTwentyFourHourHigh))
            const solDataTwentyFourHourLow = solReturnedData.data.market_data.low_24h.usd;
            newSolTwentyFourLow(USDollar.format(solDataTwentyFourHourLow))
            const solDatamarketCAp = ethReturnedData.data.market_data.market_cap.usd;
            newSolMarketCap(USDollar.format(solDatamarketCAp))
            ///////////////////////////////////////////////////////////////////////////////
            const usdtReturnedData = await axios.get(url+"tether?tickers=true");
            const usdtPrice = parseFloat(usdtReturnedData.data.market_data.current_price.usd);
            newUsdt(USDollar.format(usdtPrice));
            const usdtDataTwentyFourHourHigh = usdtReturnedData.data.market_data.high_24h.usd;
            newUsdtTwentyFourHigh(USDollar.format(usdtDataTwentyFourHourHigh))
            const usdtDataTwentyFourHourLow = usdtReturnedData.data.market_data.low_24h.usd;
            newUsdtTwentyFourLow(USDollar.format(usdtDataTwentyFourHourLow))
            const usdtDatamarketCAp = usdtReturnedData.data.market_data.market_cap.usd;
            newUsdtMarketCap(USDollar.format(usdtDatamarketCAp))
      
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
  <Navbar.Brand href="">FXT</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
  <Nav className="me-auto">
  <Nav.Link  id='text' onClick={handleShow} >Deposit</Nav.Link>
  <Nav.Link  id='text'  onClick={handleWithdraw}>Withdraw</Nav.Link>
  </Nav>
  <Nav>
  <Nav.Link  style={{ marginRight: '80%'}} onClick={ () => {localStorage.clear();navigate('/')}}>Logout</Nav.Link>
  </Nav>
  </Navbar.Collapse>
  </Container>
  </Navbar>
       <div>
        <Container id = 'main' fluid>
       <Row id = 'margin-text'>
       <p>Welcome to your dashboard <span style={{fontWeight: '700', color: 'rgb(33, 37, 41)'}}>{loggedInUser}</span></p>
       </Row>
       <Row  className="justify-content-md-center ">
       <Table striped bordered hover>
         <thead style={{ fontWeight: '700', color: 'rgb(33, 37, 41)', textAlign: 'center'}}>
         <tr>
           <td><span >Available Balance</span></td>
           <td><span >Weekly Profit</span></td>
           <td><span >Estimated Monthly Profit</span></td>
          </tr>
         </thead>
      <tbody  style={{textAlign: 'center'}}>
      <td >${bal}.00</td>
           <td  style={{ color: 'rgb(113,201,70)'}}>${pr}</td>
           <td>25%</td>
      </tbody>
      </Table>
      
      <Modal show={show}  backdrop="static" onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Deposit Bitcoin to the address below</Modal.Title>
        </Modal.Header>
        <Modal.Body>bc1q3uwx58wtmxt7jqdnacr9v4ps7gteqk75xygmcw</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={withdraw}
        //onHide={handleExit}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter" centered
        
      >
          <Form  id="ms" >
          <CloseButton style={{ marginLeft: '90%'}} onClick={() => {setWithdraw(false)}}/>
  <Form.Group  className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter wallet address</Form.Label>
    <Form.Control type="text" placeholder="enter bitcoin address" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Enter amount</Form.Label>
    <Form.Control type="text" placeholder="enter amount" />
  </Form.Group>     
  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>   
      </Modal>
      
      <Row id = 'margin-text2'>
      <p  >Top traded cryptocurrencies in real time</p>
      </Row>
       </Row>
      <Row  id= 'margin-b'>
      <Table responsive striped bordered hover variant="dark">
         <thead>
         <tr>
            <td></td>
           <td>Coin</td>
           <td>Last Price</td>
           <td>24H High</td>
           <td>24H Low</td>
           <td>Market Cap</td>
          </tr>
         </thead>
      <tbody>
      <tr>
          <td><Image src={btcLogo} rounded /></td>
          <td> <span style={{ fontWeight: 'bold'}}>Bitcoin</span> BTC</td>
          <td>{btc}</td>
          <td>{btcTwentyFourHigh}</td>
          <td>{btcTwentyFourLow}</td>
          <td>{btcmarketCap}</td>
          </tr>
          <tr>
          <td><Image src={ethLogo} rounded /></td>
          <td> <span style={{ fontWeight: 'bold'}}>Ethereum</span> ETH</td>
          <td>{eth}</td>
          <td>{ethTwentyFourHigh}</td>
          <td>{ethTwentyFourLow}</td>
          <td>{ethmarketCap}</td>
          </tr>
          <tr>
          <td><Image src={xrpLogo} rounded /></td>
          <td> <span style={{ fontWeight: 'bold'}}>Ripple</span> XRP</td>
          <td>{xrp}</td>
          <td>{xrpTwentyFourHigh}</td>
          <td>{xrpTwentyFourLow}</td>
          <td>{xrpmarketCap}</td>
          </tr>
          <tr>
          <td><Image src={solLogo} rounded /></td>
          <td> <span style={{ fontWeight: 'bold'}}>Solana</span> SOL</td>
          <td>{sol}</td>
          <td>{solTwentyFourHigh}</td>
          <td>{solTwentyFourLow}</td>
          <td>{solmarketCap}</td>
          </tr>
          <tr>
          <td><Image src={usdtLogo} rounded /></td>
          <td> <span style={{ fontWeight: 'bold'}}>Tether</span> USDT</td>
          <td>{usdt}</td>
          <td>{usdtTwentyFourHigh}</td>
          <td>{usdtTwentyFourLow}</td>
          <td>{usdtmarketCap}</td>
          </tr>
      </tbody>
          </Table>
        </Row>
        </Container>
        <Navbar expand="lg" bg="dark" variant="dark">
  <Container fluid>
  <p id ='margin-c'>&reg; fxt limited 2023</p>
  </Container>
</Navbar>
</div>
        </div>
    )
}

export default Dashboard;