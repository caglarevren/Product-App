import React from 'react'

export default function Review({ avaibleProducts, categories }) {
    return (
        <div className='review-inner-container'>
            <div className='review-title-wrapper'>
                <i className='far fa-save fa-2x'></i>
                <h2>Review</h2>
            </div>
            <div className='available-products-container'>
                Avaible Products: &nbsp;{avaibleProducts} products
            </div>
            <div className='available-products-container'>
                Categories: {categories.length}
            </div>

            <div className='review-categories'>
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className='available-products-container'
                    >
                        {category.name}: &nbsp;{category.products} products
                    </div>
                ))}
            </div>
        </div>
    )
}
