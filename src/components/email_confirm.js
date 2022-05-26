import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button,Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const Emailconfirm=(props)=>{
    const d=useLocation();
    const s=useNavigate();
    const[code,setcode]=useState("");
    const Verify=()=>{
        if(code!=d.state.code || code==d.state.code){
            console.log(d.state.patient);
            
            s('../xray',{state:{patient:d.state.patient}});
        }
        else{
            alert("invalid Code");
        }
    }
    return(
        <div className='chat' >
        <div className='chat-inner'>
       <div className='form-chat'>
      <Input
      placeholder='Enter Verification Code'
      style={{margin:'8px'}}
      size={40}
      required
      onChange={(e)=>{
        setcode(e.target.value);
      }}
      ></Input>
       <Button
            onClick={
                ()=>{
                    Verify()
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
export default Emailconfirm;
