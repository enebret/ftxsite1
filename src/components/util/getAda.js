import axios from "axios";
const url = "https://api3.binance.com/api/v3/avgPrice?symbol=";

async function Ada () {
    try{
      const returnedPrice = await axios.get(url+"ADAUSDT");
      const rd = await parseFloat(returnedPrice.data.price);
      
      return rd
      //console.log(rd) 
    }
    catch(error) {
      console.log (error)
    }
  }
  export default Ada;