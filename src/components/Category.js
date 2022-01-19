import React, { useEffect, useState } from 'react'
import Categories from './Categories'

export default function Category({
    categories,
    category,
    handleAddProducts,
    handleRemoveProducts,
    handleRemoveCategory,
    selectedProducts,
}) {
    const [categoryProducts, setCategoryProducts] = useState([])

    useEffect(() => {
        setCategoryProducts(category.products)
    }, [category.products])

    const handleRemoveCheck = (productId) => {
        setCategoryProducts(
            categoryProducts.map((product) => {
                if (product.id == productId) {
                    product.checked = !product.checked
                }
                return product
            })
        )
    }

    const getRemoveProducts = () => {
        return categoryProducts.filter((product) => product.checked).length
    }

    return (
        <div className='categories-wrapper'>
            <div className='category-inner-container'>
                <div className='products-title-wrapper'>
                    <i className='fas fa-dice-d6 fa-2x'></i>
                    {category.name}
                </div>
                {categoryProducts.length === 0 ? (
                    <div className='products-placeholder'>
                        <i className='far fa-heart'></i>
                        <p>Select Products to Add Here</p>
                    </div>
                ) : (
                    <div></div>
                )}

                <div>
                    {categoryProducts &&
                        categoryProducts.map((product) => (
                            <div className='product-wrapper' key={product.id}>
                                <input
                                    type='checkbox'
                                    onChange={() =>
                                        handleRemoveCheck(product.id)
                                    }
                                    id={product.id}
                                />
                                <label htmlFor={product.id}>
                                    {product.name}
                                </label>
                            </div>
                        ))}
                </div>
                <div className='category-btn-wrapper'>
                    <div>
                        <input
                            type='button'
                            className={
                                selectedProducts
                                    ? 'btn-add-products bg-blue'
                                    : 'btn-add-products'
                            }
                            value={
                                'Add ' + (selectedProducts || '') + ' Products'
                            }
                            onClick={() => handleAddProducts(category.id)}
                        />
                        <input
                            type='button'
                            className={getRemoveProducts() > 0 ? 'bg-blue' : ''}
                            value={
                                getRemoveProducts() > 0
                                    ? `Remove ${getRemoveProducts()} Product`
                                    : 'Remove Product'
                            }
                            onClick={() =>
                                handleRemoveProducts(
                                    category.id,
                                    categoryProducts.filter(
                                        (product) => product.checked
                                    )
                                )
                            }
                        />
                    </div>
                    <input
                        type='button'
                        value='Remove Category'
                        className={categories.length > 1 ? 'bg-blue' : ''}
                        onClick={() => handleRemoveCategory(category.id)}
                    />
                </div>
            </div>
        </div>
    )
}
