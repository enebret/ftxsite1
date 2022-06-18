//animal farm - george orwell, tuesdays with morrie - mitch albom, to kill a mocking bird - harper lee, the kite runner - khaled hosseini, wild - cheryl strayed, pride and prejudice - jane austen, 1984 - george orwell, brave new world - aldous huxley, a short history of nearly everything - bill bryson, 
/*jshint esversion: 8 */
import axios from "axios";
//const axios = require ('axios');
const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cripple&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true';

const get_data = async function () {
    let data = await axios.get(url);
    let object_to_array = Object.values(data.data);
    //convert to single point %, (map into new array)
    //add commas to the figures price, 24h volume and market cap,
    //get png logo of coin asset,
    //send the rest of data
    //send total result as object
   var convert_to_percent = ()=>{
    let tv = [];
    tv = object_to_array.map(x=> {
        return x.usd_24h_change.toFixed(2)+'%';
    });
    return tv;
   };

   var figures_to_string = () => {
       let fts = [];
       fts = object_to_array.map(x=>{
        let usd = '$'+x.usd.toLocaleString();
        let market_cap = '$'+x.usd_market_cap.toLocaleString();
        let vol = '$'+x.usd_24h_vol.toLocaleString();
        return {
            usd: usd,
            market_cap: market_cap,
            vol: vol
        };
       });
       return fts;
   };

   var main = {
       data: figures_to_string(),
       convert: convert_to_percent()
   };
   //console.log(main);
    return main;
};

export default get_data;
//get_data();