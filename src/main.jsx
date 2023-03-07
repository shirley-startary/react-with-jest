import React from "react";
import ReactDom from 'react-dom/client';

import CounterApp from "./CounterApp";
import FirstApp from "./FirstApp";

import "./styles.css";

ReactDom.createRoot( document.getElementById( 'root' ) ).render(
    <React.StrictMode>
        <FirstApp/>
        {/* <CounterApp value={10}/> */}
    </React.StrictMode>
);