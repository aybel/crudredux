import { combineReducers } from 'redux';
import productosReduder from './productosReducer';
import alertaReducer from './alertaReducer';

export default combineReducers({
    productos: productosReduder,
    alerta: alertaReducer
});