import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import GlobalStyle from '~/global';
import { StateProvider } from './hooks/StateProvider';
import reducer, { initialState } from './hooks/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </GlobalStyle>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
