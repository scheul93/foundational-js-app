import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import dbService from './services/dbService';
import appService from './services/appService';

dbService.initializeFirebaseApp();
appService.init();
ReactDOM.render(<App />, document.getElementById('root'));
