import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Header />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
