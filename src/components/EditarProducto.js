import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productosActions';
import {useHistory} from 'react-router-dom';
const EditarProducto = () => {

    const dispatch = useDispatch();
    const history=useHistory();
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: ''
    });

    const productoEditar = useSelector((state) => state.productos.productoeditar);

    useEffect(() => {
        guardarProducto(productoEditar);
    }, [productoEditar])

    const onchangeFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const submitEditar = e => {
        e.preventDefault();
        if (producto.nombre.trim() === "" || producto.precio <= 0) {
            return null;
        }
        dispatch(editarProductoAction(producto));
        //redirecciona al comp principal
        history.push('/');

    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                    </h2>
                        <form
                            onSubmit={submitEditar}
                        >
                            <div className="form-group">
                                <label htmlFor="">Nombre producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre producto"
                                    name="nombre"
                                    value={producto.nombre}
                                    onChange={onchangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Precio producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio producto"
                                    name="precio"
                                    value={producto.precio}
                                    onChange={onchangeFormulario}
                                />
                            </div>
                            <button type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block">
                                Guardar cambios
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarProducto;