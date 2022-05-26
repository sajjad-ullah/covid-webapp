import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button,Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
const Savedata=()=>{
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
           <h3 style={{color:'black'}}>Save Patient Detail</h3>
     
     <br></br>
     <div style={{backgroundColor:'grey'}}>
     
        </div>
        <br>
        </br>
        
       <Button
        onClick={
            ()=>{
                const temp=d.state.patient;
                temp.cp=item;
               console.log(temp);
              
                fetch('http://127.0.0.1:5000/add_patient', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(temp)
                })
                  .then((response) => {console.log(response);
                s('../detect')  
                }
                    )
                  .then((data) => console.log(data));
            }
            
            
        }
  active
  block
  color="primary"
  outline
  size="lg"
>
  Save Data
</Button>

       </div>
    
        </div>
        
    </div>
        );
}
export default Savedata;

