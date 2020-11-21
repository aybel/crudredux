import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITO,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR
} from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';
//crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());
        try {
            //Usar la Api para insertar
            await clienteAxios.post('/productos', producto);
            //si todo sale bien actualizar el stete
            dispatch(agregarProductoExito(producto));
            //alerta
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(agregarProductoError(true));
            Swal.fire(
                {
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo en error intenta de nuevo'
                }
            );
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});


//Función que descarga los productos de la base de datos

export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos());
        //consulta API
        try {

            const respuesta = await clienteAxios.get('/productos');
            dispatch(descargaProductosExitosa(respuesta.data));


        } catch (error) {
            console.log(error);
            dispatch(descargaProductosError(true));
            Swal.fire(
                {
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo en error intenta de nuevo'
                }
            );
        }
    }
}
const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});
const descargaProductosExitosa = (productos) => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});


//Seleccionar y elimina el prodcuto

export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));
        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(productoEliminadoExito());
            Swal.fire(
                'Borrado!',
                'Registro borrado con éxito',
                'success'
            );
        } catch (error) {
            dispatch(productoEliminadoError());
        }
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});

const productoEliminadoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})

const productoEliminadoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload:true
})