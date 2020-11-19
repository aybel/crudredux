import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { crearNuevoProductoAction } from '../actions/productosActions';
const NuevoProducto = () => {

    //state del componente
    const 

    //usar useDispatch y te devuelve una function
    const dispatch = useDispatch();

    //mandar ejecutar el action de productos actions
    const agregarProducto = () => dispatch(crearNuevoProductoAction());

    //cuando el usuario haga submit
    const submitNuevoProductoAction = e => {
        e.preventDefault();
        //validad formulario

        //si no hay errores

        //crear nuevo producto
        agregarProducto();

    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        <form
                            onSubmit={submitNuevoProductoAction}
                        >
                            <div className="form-group">
                                <label htmlFor="">Nombre producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre producto"
                                    name="nombre"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Precio producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio producto"
                                    name="precio"
                                />
                            </div>
                            <button type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block">
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;