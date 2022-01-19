import React, { useEffect } from 'react'

export default function Products({ products, handleCheck }) {
    return (
        <div className='products-outer-container'>
            <div className='products-title-wrapper'>
                <i className='fas fa-cube fa-2x'></i>
                <h2>Avaible Products</h2>
            </div>
            {products.map((product) => (
                <div key={product.id} className='product-wrapper'>
                    <input
                        type='checkbox'
                        onChange={() => handleCheck(product.id)}
                        checked={product.checked}
                        id={product.name}
                    />
                    <label htmlFor={product.name}>{product.name}</label>
                </div>
            ))}
        </div>
    )
}
