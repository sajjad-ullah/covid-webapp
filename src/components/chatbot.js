import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";
const Chatbot=(props)=>{
    const s=useNavigate();
    return(
        <div className='chat' >
            <div className='chat-inner'>
            <h1>
               AI Based Chatbot
               <br></br>
               <br></br>
               <Button
            onClick={
                ()=>{
                    s("../chatinfo")
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
           </h1>


            </div>

        </div>
    );

}
export default Chatbot;
