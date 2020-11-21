import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Actions de redux

import { crearNuevoProductoAction } from '../actions/productosActions';
import { mostrarAlertaAction,ocultarAlertaAction } from '../actions/alertaActions';
const NuevoProducto = ({ history }) => {

    //state del componente
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);

    //usar useDispatch y te devuelve una function
    //sirve para ejecutar las funcones de productos actions
    const dispatch = useDispatch();

    //useSelector acceder al state del store
    const cargando = useSelector((state) => state.productos.loading);
    const error = useSelector((state) => state.productos.error);
    //sacamos la alerta del state
    const alerta=useSelector((state)=>state.alerta.alerta);
    //mandar ejecutar el action de productosActions
    const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));

    const mostrarAlerta = alerta => dispatch(mostrarAlertaAction(alerta));

    //cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();
        //validad formulario
        if (nombre.trim() === '' || precio <= 0) {
            const alerta = {
                msj: 'Los campos son obligatorios',
                clase: 'alert alert-danger text-center p3'
            }
            mostrarAlerta(alerta);
            return null;
        }
        //si no hay errores
        dispatch(ocultarAlertaAction());
        //crear nuevo producto
        //ejecutamos otra función local
        agregarProducto({
            nombre, precio
        });

        history.push('/');

    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        {alerta ? <p className={alerta.clase}>{alerta.msj}</p> : null}
                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label htmlFor="">Nombre producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Precio producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio producto"
                                    name="precio"
                                    value={precio}
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block">
                                Agregar
                            </button>
                        </form>
                        {cargando ? <p>Cargando...</p> : null}

                        {error ? <p className="alert alert-danger ps mt-4 text-center">Hubo un error</p> : null}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;