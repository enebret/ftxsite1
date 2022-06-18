/*jshint esversion: 8 */
import axios from "axios";
//const axios = require('axios')
const url = "https://api3.binance.com/api/v3/avgPrice?symbol=";

async function Xrp () {
    try{
      const returnedPrice = await axios.get(url+"XRPUSDT");
      const rd = await parseFloat(returnedPrice.data.price);
      const fd = await rd.toFixed(2);
      const pd = await Number(fd);
      return pd;
      //console.log(pd) 
    }
    catch(error) {
      console.log (error);
    }
  }
  //Xrp()
  export default Xrp;