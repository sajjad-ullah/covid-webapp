import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
// Importing loader
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useNavigate } from "react-router-dom";
import App1 from './start';
import StartPage from './front';

const SplashScreen = () => {
  const s= useNavigate();
// Loading state
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {

	// Wait for 3 seconds
	setTimeout(() => {
	setIsLoading(false);
	}, 2000);
}, []);

// Custom css for loader
const override = `
display: flex;
justify-content:center;
align-items: 'center';
margin: 0 auto;
margin-top:300px;
`;

return( isLoading ?

	// If page is still loading then splash screen
	<ClimbingBoxLoader  color={'#36D7B7'} isLoading={isLoading}
	css={override} size={25} /> :
 <App1  shift={s}> </App1>
)



}


  export default SplashScreen;
