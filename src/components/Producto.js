import React from 'react'
import {useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditarAction } from '../actions/productosActions';
import Swal from 'sweetalert2';

const Producto = (producto) => {
    const { nombre, precio, id } = producto.producto;

    const dispatch = useDispatch();
    const history = useHistory();
    const confirmarEliminarProducto = id => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Un registro elimiando no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(borrarProductoAction(id));
            }
        });

    }

    //function que redirige de forma programada
    const redireccionarEdicion = producto => {
        history.push(`/productos/editar/${producto.id}`);
        //mandamos el producto al state del store
        dispatch(obtenerProductoEditarAction(producto));
    }

    return (
        <tr>
            <td className="text-left">{nombre}</td>
            <td className="text-right"><span className="font-weight-bold">$ {precio}</span></td>
            <td>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => redireccionarEdicion(producto.producto)}
                >Editar
                </button>

                <button
                    type="button"
                    className="btn btn-danger ml-2"
                    onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
    );
}

export default Producto;