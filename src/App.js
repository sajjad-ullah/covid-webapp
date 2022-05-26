import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Chatbot from './components/chatbot';

import Emailconfirm from './components/email_confirm';
import Bloodcp from './components/upload_bloodcp_report';
import Crp from './components/upload_crp_report';
import D_dimer from './components/upload_Ddimer_report';
import Hrct from './components/upload_hrct';
import Hrct_report from './components/upload_hrct_report';
import Xray from './components/upload_xray';
import Xray_report from './components/upload_xray_report';
import Savedata from './components/savedata';
import Detection from './components/detection';
import StartPage from './components/front';
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";
import ThreeScene from './components/TDModel';

function App(){
  return(
    <Router>
    <Routes>
    <Route path="/" element={ <SplashScreen/> } />
    <Route path="/front" element={ <StartPage /> } />
    <Route path="/chatbot" element={ <Chatbot/> } />

    <Route path="/email" element={ <Emailconfirm/> } />
    <Route path="/xray" element={ <Xray/> } />
    <Route path="/xrayreport" element={ <Xray_report/> } />
    <Route path="/hrct" element={ <Hrct/> } />
    <Route path="/hrctreport" element={ <Hrct_report/> } />
    <Route path="/ddimer" element={ <D_dimer/> } />
    <Route path="/crp" element={ <Crp/> } />
    <Route path="/cp" element={ <Bloodcp/> } />
    <Route path="/savedata" element={<Savedata/>} />
    <Route path="/detect" element={<Detection/>}/>
    <Route path="/3dModel" element={<ThreeScene />}/>

    </Routes>
    </Router>
  );
}



export default App;
