/*jshint esversion: 8 */
import React, {useState} from 'react';
import './signupStyles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  
function Signup () {
    const [Email, setUserEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Username, setUsername] = useState('');

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            firstname: Firstname,
            lastname: Lastname,
            email: Email,
            username: Username,
            password: Password
          };

          axios.post('http://localhost:8082/user/signup', user)
          .then(response => {
            if(response.data!=='already registered'){
              //redirect to homepage or dashboard page
              console.log(response.data);
              navigate('/'); //navigate to dashboard with user details passed as prop parameters
            }else if(response.data!=='welcome'){
              //display error msg to user here by updating the dom
              console.log(response.data);
            }
          })
          
          .catch(err => {
            console.error(err);
        });

        };
//dashboard component should be here and the user details be passed as props to the dashboard component once there is a response from the backend
    return (
        <div class='pd'>
            <div class = 'fr'>
            <form onSubmit={handleSubmit}>
              <label for="firstname">Firstname</label>
              <input type="text" name = 'firstname' value = {Firstname} onChange={e => setFirstname(e.target.value)}></input>
              <label for="lastname">Lastname</label>
              <input type="text" name = 'lastname' value = {Lastname} onChange={e => setLastname(e.target.value)}></input>
              <label for="email">Email</label>
              <input type="text" name = 'email' value = {Email} onChange={e => setUserEmail(e.target.value)}></input>
              <label for="username">Username</label>
              <input type="text" name = 'username' value = {Username} onChange={e => setUsername(e.target.value)}></input>
              <label for="password">password</label>
              <input type="text" name = 'Password' value = {Password} onChange={e => setPassword(e.target.value)}></input>
              <input type="submit" value="Submit"></input>
              </form>
            </div>
              
        </div>
    )
}

export default Signup;