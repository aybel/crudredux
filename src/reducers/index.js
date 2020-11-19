import {combineReducers} from 'redux';
import productosReduder from './productosReducer';


export default combineReducers({
    productos:productosReduder
});