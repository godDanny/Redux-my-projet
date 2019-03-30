// 1.引入createStore方法，用于创建store对象
import {createStore} from 'redux';
import {createStore,applyMiddleware} from 'redux';
// 3.引入reducer函数，将它放入createStore函数中作为第一个参数
import { numReducer } from './reducers';
import logger from 'redux-logger';

//2.调用createStore方法，创建store对象,传递reducer函数作为第一个参数
let store=new createStore(numReducer)

export default store;