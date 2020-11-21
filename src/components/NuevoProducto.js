import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Actions de redux

import { crearNuevoProductoAction } from '../actions/productosActions';
const NuevoProducto = ({history}) => {

    //state del componente
    const [nombre,guardarNombre]=useState('');
    const [precio,guardarPrecio]=useState(0);

    //usar useDispatch y te devuelve una function
    //sirve para ejecutar las funcones de productos actions
    const dispatch = useDispatch();

    //useSelector acceder al state del store
    const cargando=useSelector((state)=>state.productos.loading);
    const error=useSelector((state)=>state.productos.error);
    

    //mandar ejecutar el action de productosActions
    const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));

    //cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();
        //validad formulario
        if(nombre.trim()===''|| precio<=0){
            return;
        }
        //si no hay errores

        //crear nuevo producto
        //ejecutamos otra función local
        agregarProducto({
            nombre,precio
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
                                    onChange={e=>guardarNombre(e.target.value)}
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
                                    onChange={e=>guardarPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block">
                                Agregar
                            </button>
                        </form>
                        {cargando ? <p>Cargando...</p> :null}

                        {error ? <p className="alert alert-danger ps mt-4 text-center">Hubo un error</p> :null}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;