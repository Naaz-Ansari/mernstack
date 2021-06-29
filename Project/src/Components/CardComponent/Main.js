import React from 'react';
import Product from './Product';

function Main(props) {
    const {products, onAdd} = props;
    return (
        <>
        {products.map((product)=>(
            <Product
            key = {product.id}
            product = {product} 
            onAdd = {onAdd}
        />
        ))}
        </>
    )
}

function Main2(props) {
    const {bakery, onAdd} = props;
    return (
        <>
        {bakery.map((product) => (
            <Product
            key = {product.id}
            product = {product}
            onAdd = {onAdd}
            />
        ))}
        </>
    )
}

function Main3(props) {
    const {Beverages, onAdd} = props;
    return (
        <>
        {Beverages.map((product) => (
            <Product
            key = {product.id}
            product = {product}
            onAdd = {onAdd}
            />
        ))}
        </>
    )
}

function Main4(props) {
    const {Sweets, onAdd} = props;
    return (
        <>
        {Sweets.map((product) => (
            <Product
            key = {product.id}
            product = {product}
            onAdd = {onAdd}
            />
        ))}
        </>
    )
}

function Main5(props) {
    const {streetFood, onAdd} = props;
    return (
        <>
        {streetFood.map((product) => (
            <Product
            key = {product.id}
            product = {product}
            onAdd = {onAdd}
            />
        ))}
        </>
    )
}

function Main6(props) {
    const {fastFood, onAdd} = props;
    return (
        <>
        {fastFood.map((product) => (
            <Product
            key = {product.id}
            product = {product}
            onAdd = {onAdd}
            />
        ))}
        </>
    )
}

export {Main, Main2, Main3, Main4, Main5, Main6};