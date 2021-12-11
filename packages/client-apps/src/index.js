import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { getSDKInstance, setSDK } from './helper/widget-sdk.helper';
import App from './App';

setSDK();
getSDKInstance().then((item) => {
  item.init();
});

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);
