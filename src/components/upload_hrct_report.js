import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button,Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
const Hrct_report=()=>{
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
           <h3 style={{color:'black'}}>Upload HRCT Report</h3>
       {item?<img className="activator" style={{ width: 300, height: 300 }} src={item} />:<p>Hello</p>}
     <br></br>
     <br></br>
     <div style={{backgroundColor:'grey'}}>
       <FileBase64
          type="file"
          multiple={false}
          
          onDone={({ base64 }) => setItem(base64) }
        />
        </div>
        <br>
        </br>
        
       <Button
        onClick={
            ()=>{
                
               s('../ddimer')
            }
        }
  active
  block
  color="primary"
  outline
  size="lg"
>
  Next Step
</Button>

       </div>
    
        </div>
        
    </div>
        );
}
export default Hrct_report;
