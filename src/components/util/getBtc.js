import axios from "axios";
//const axios = require('axios')
const url = "https://api3.binance.com/api/v3/avgPrice?symbol=";
//const ticks = "XRPUSDT";



async function Btc () {
  try{
    const returnedPrice = await axios.get(url+"BTCUSDT");
    const rd = await parseInt(returnedPrice.data.price);
    
    return rd
    //console.log(rd) 
  }
  catch(error) {
    console.log (error)
  }
}

//Btc()
export default Btc;