import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-465B1M5Z5X"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

ReactGA.send("pageview");

function App() {

   return (
      <div>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
