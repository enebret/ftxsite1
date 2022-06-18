/*jshint esversion: 8 */
import axios from "axios";
//const axios = require ('axios');
const coins = ['bitcoin', 'ethereum', 'ripple'];

const get_coin_img = async () => {
    //let ep = await axios.get(`https://api.coingecko.com/api/v3/coins/${btc}?localization=false&tickers=true&market_data=false&community_data=false&developer_data=true`);
    //console.log((ep.data.image));
    var cl = [];
    for (const x of coins){
        let ep = await axios.get(`https://api.coingecko.com/api/v3/coins/${x}?localization=false&tickers=true&market_data=false&community_data=false&developer_data=true`);
        let fb = ep.data.image.large;
        cl.push(fb);
        
    }
    return cl;
    //console.log(cl);
};

export default get_coin_img;
//get_coin_img();