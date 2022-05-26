import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button,Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
const Detection=()=>{
    const s=useNavigate();
    const d=useLocation();
    const [item, setItem] = useState("");
   
        const style = {
          color: 'red',
          fontSize: 200
        };
    return(
        <div className='xray' >
        <div className='xray-inner'>
       <div className='form-xray'>
           <h3 style={{color:'black'}}>Detection Screen</h3>
     
     <br></br>
     <div style={{backgroundColor:'grey'}}>
     
        </div>
        <br>
        </br>
        
     
       </div>
    
        </div>
        
    </div>
        );
}
export default Detection;

