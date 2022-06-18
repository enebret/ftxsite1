import './styles/Dropdown.css';
import { useState, useRef} from 'react';

const colors = {
  Azure: '#0087BD',
  Gray: '#F0F0F0',
};

function Dropdown(props) {
    const lk = props.tx;
///

  const pj = 'TradeMax LTD is a managed stock trading platform with user friendly interface and attractive offer, that aids client invest with minimal or no risk.';
  const bn = 'We trade on gold, cannabis, forex and bitcoin.';
  const yj = 'No. you are allowed to create only one account. For special situations please contact our Customer Support.';


    //hooks for the dropdowns
    const [isActive, setIsActive] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [le, setLe] = useState(false);

    const box = useRef();
    const nox = useRef();
    const lox = useRef();




    //////////////////////////////////////////
    //FIRST DIV
    //function for first div color change onclick
    const handleClick = () => {
      // 👇️ toggle
      setIsActive(current => !current);
      
    };
    //function for child element slidedown
    const toggleF = () => {
      if(box.current.style.maxHeight !== '100px'){
        box.current.style.maxHeight = '100px';
      }else {
        box.current.style.maxHeight = '0px';
      }
      
    };
/////////////////////////////////////////////////////



    //SECOND DIV
    //function for second div color change onclick
    const kandleClick = () => {
      // 👇️ toggle
      setToggle(current => !current);
      
    };
     //function for child element slidedown
    const noggleF = () => {
      if(nox.current.style.maxHeight !== '100px'){
        nox.current.style.maxHeight = '100px';
      }else {
        nox.current.style.maxHeight = '0px';
      }
      
    };
//////////////////////////////////////////////////////////////

        //SECOND DIV
    //function for second div color change onclick
    const zandleClick = () => {
      // 👇️ toggle
      setLe(current => !current);
      
    };
     //function for child element slidedown
    const zoggleF = () => {
      if(lox.current.style.maxHeight !== '100px'){
        lox.current.style.maxHeight = '100px';
      }else {
        lox.current.style.maxHeight = '0px';
      }
      
    };















    return (
      <div class = 'qr'>
        {/* first bar */}
          <div class = 'kd'  style={{
          backgroundColor: isActive ? '#0087BD' : '',
        }}
        onClick={() => {
          handleClick();
          toggleF();
        }}>  <span id = 'spw'>What is this website about?</span>
        </div>

       <div class = 'texxt' ref={box}>  
          <p>{pj}</p>
       </div>
       
       {/* second bar */}
        <div  class = 'kd'     style={{
          backgroundColor: toggle ? '#0087BD' : '',
        }}
        onClick={() => {
          kandleClick();
          noggleF();
        }}> <span id = 'spw'>What Markets do you trade?</span>
        </div>

        <div class = 'texxt' ref={nox}>  
          <p>{bn}</p>
       </div>

       {/* third bar */}
       <div  class = 'kd'     style={{
          backgroundColor: le ? '#0087BD' : '',
        }}
        onClick={() => {
          zandleClick();
          zoggleF();
        }}> <span id = 'spw'>Can I create more than one account?</span>
        </div>

        <div class = 'texxt' ref={lox}>  
          <p>{yj}</p>
       </div>

           {/* ground bar */}
       <div  class = 'bar'     style={{
          
        }}
        onClick={() => {
          
        }}>
        </div>







       
      </div>
      
    )
  };

  export default Dropdown;