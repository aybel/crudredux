import React from 'react';

const EditarProducto = () => {
    return (
        <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Editar Producto
                    </h2>
                    <form action="">
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