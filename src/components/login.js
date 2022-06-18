/*jshint esversion: 8 */
import React, {useState} from 'react';
import './loginStyles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form () {
    const [Email, setUserEmail] = useState('');
    const [Password, setPassword] = useState('');
    
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: Email,
            password: Password
          };
          //console logging here is browser console
          axios.post('http://localhost:8082/login', user)
            .then(response => {
              if(response.data==='welcome'){
                //redirect to homepage or dashboard page
                navigate('/');
              }else if(response.data!=='welcome'){
                //display error msg to user here by updating the dom
                console.log(response.data);
              }
            })
            
            .catch(err => {
              console.error(err);
          });
      };
    

    return (
        <div class='pd'>
            <div class = 'fr'>
            <form onSubmit={handleSubmit}>
              <label for="fname">Enter Email address</label>
              <input type="text" name ='email' value ={Email} onChange={e => setUserEmail(e.target.value)} />
              <input type="text" name ='password' value ={Password} onChange={e => setPassword(e.target.value)} />
              <input type="submit" value="Submit"></input>
              </form>
            </div>
              
        </div>
    )
}

export default Form;