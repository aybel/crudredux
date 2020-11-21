import React from 'react'
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/productosActions';
import Swal from 'sweetalert2';
const Producto = (producto) => {
    const { nombre, precio, id } = producto.producto;

    const dispatch = useDispatch();
    const confirmarEliminarProducto = id => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Un registro elimiando no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText:'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(borrarProductoAction(id));
            }
        });

    }

    return (
        <tr>
            <td className="text-left">{nombre}</td>
            <td className="text-right"><span className="font-weight-bold">$ {precio}</span></td>
            <td>
                <Link className="btn btn-primary mr-2" to={`/productos/editar/${id}`}>
                    Editar
               </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
    );
}

export default Producto;