import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers';
import {useSelector} from 'react-redux';
import thunk from 'redux-thunk';


export default store = createStore(reducer, applyMiddleware(thunk));



