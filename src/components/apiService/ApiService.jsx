import React, { useState, useEffect } from 'react';
import ProductCard from '../product/productCard';

const ApiService = () => {
    const [productos, setProductos] = useState([]);

    const fetchProductos = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            console.error('Error al traer los datos:', error);
            throw error;
        }
    };

    useEffect(() => {
        fetchProductos();
    }, []);
    console.log(productos);

    return (
        <>
            <h1>Productos</h1>
            <hr />

            {productos.map(producto => (
                <ProductCard
                    key={producto.id}
                    imagen={producto.image}
                    titulo={producto.title}
                    descripcion={producto.description}
                    precio={producto.price}
                    cantidad = {producto.rating.count}
                />
            ))}

        </>
    );
};

export default ApiService;

