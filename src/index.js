import React from 'react';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import  App  from 'components/App';
import './index.css';
import {Theme} from './components/Theme';
// import {ToastContainer} from 'react-toastify';


const Global = createGlobalStyle`
*,
*::before,
*::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global/>
    <ThemeProvider theme={Theme}>
      {/* <ToastContainer autoClose={1000}/> */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
