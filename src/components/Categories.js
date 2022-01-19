import React from 'react'
import Category from './Category'

export default function Categories({
    categories,
    handleAddProducts,
    handleAddCategory,
    handleRemoveProducts,
    handleRemoveCategory,
    selectedProducts,
}) {
    return (
        <div>
            <div>
                {categories.map((category) => (
                    <Category
                        key={category.id}
                        categories={categories}
                        category={category}
                        handleAddProducts={handleAddProducts}
                        handleRemoveProducts={handleRemoveProducts}
                        handleRemoveCategory={handleRemoveCategory}
                        selectedProducts={selectedProducts}
                    ></Category>
                ))}
            </div>
            <input
                type='button'
                value='Add Category'
                className='btn-add-category'
                onClick={() => handleAddCategory()}
            />
        </div>
    )
}
