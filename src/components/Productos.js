import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../actions/productosActions';
import Producto from './Producto';
const Productos = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        //consultar la api
        const obtenerProductos = () => dispatch(obtenerProductosAction());
        obtenerProductos();
        //eslint-disabled-next-line
    }, []);
    //obtener el state
    const productos = useSelector((state) => state.productos.productos);
    const error = useSelector((state) => state.productos.error);
    const cargando = useSelector((state) => state.productos.loading);
    //console.log(productos);
    return (
        <Fragment>
            <h2 className="text-center my-5">
                {error ? <p className="alert alert-danger text-center font-weight-bold">Hubo un error</p> : null}
                {cargando ? <p className="text-center">Cargando...</p> : null}
                <table className="table table-striped">
                    <thead className="bg-primary table-dark">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.length === 0 ? 'No hay productos' : (
                            productos.map(producto => (
                                <Producto
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))
                        )}
                    </tbody>

                </table>

            </h2>
        </Fragment>
    );
}

export default Productos;