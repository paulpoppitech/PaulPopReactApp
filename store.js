import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

//import logger from 'redux-logger';
import promise from 'redux-promise-middleware';


import reducer from './src/reducers';
import defaultConfig from "./src/constants/config";

const client = axios.create({
  baseURL: defaultConfig.apiUrl,
  responseType: 'json'
});

const middleware = applyMiddleware(promise(), axiosMiddleware(client));

export default createStore(reducer, middleware);
