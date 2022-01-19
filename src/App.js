import { useState } from 'react'
import './App.css'
import Categories from './components/Categories'
import Products from './components/Products'
import Review from './components/Review'

function App() {
    let initialProducts = [
        { id: 1, name: 'Product 1', checked: false },
        { id: 2, name: 'Product 2', checked: false },
        { id: 3, name: 'Product 3', checked: false },
        { id: 4, name: 'Product 4', checked: false },
        { id: 5, name: 'Product 5', checked: false },
        { id: 6, name: 'Product 6', checked: false },
        { id: 7, name: 'Product 7', checked: false },
        { id: 8, name: 'Product 8', checked: false },
        { id: 9, name: 'Product 9', checked: false },
        { id: 10, name: 'Product 10', checked: false },
    ]

    const [products, setProducts] = useState(initialProducts)

    const handleCheck = (id) => {
        setProducts(
            products.map((product) => {
                if (product.id == id) {
                    product.checked = !product.checked
                }
                return product
            })
        )
    }

    const [categories, setCategories] = useState([
        { id: 1, name: 'Category 1', products: [] },
    ])

    const handleAddProducts = (categoryId) => {
        const addedProducts = products.filter((product) => product.checked)
        setProducts(products.filter((product) => !product.checked))
        setCategories(
            categories.map((category) => {
                if (category.id == categoryId) {
                    category.products = category.products.concat(
                        addedProducts.map((product) => {
                            product.checked = false
                            return product
                        })
                    )
                }
                return category
            })
        )
    }

    const handleAddCategory = () => {
        setCategories([
            ...categories,
            {
                id: categories.length + 1,
                name: 'Category ' + (categories.length + 1),
                products: [],
            },
        ])
    }

    const handleRemoveProducts = (categoryId, removedProducts) => {
        const removedProductIds = removedProducts.map((product) => product.id)

        setCategories(
            categories.map((category) => {
                if (category.id == categoryId) {
                    category.products = category.products.filter(
                        (categoryProduct) =>
                            !removedProductIds.includes(categoryProduct.id)
                    )
                }
                return category
            })
        )

        setProducts(
            products
                .concat(
                    removedProducts.map((product) => {
                        product.checked = false
                        return product
                    })
                )
                .sort((a, b) => {
                    return a.id - b.id
                })
        )
    }

    const handleRemoveCategory = (categoryId) => {
        handleRemoveProducts(
            categoryId,
            categories.filter((category) => category.id == categoryId)[0]
                .products
        )
        setCategories((categories) =>
            categories.filter((category) => category.id != categoryId)
        )
    }

    return (
        <div className='container'>
            <h1 className='page-heading'>Initial Screen</h1>
            <div className='main-content-wrapper'>
                <div className='products-wrapper'>
                    <Products
                        products={products}
                        handleCheck={handleCheck}
                    ></Products>
                    <Review
                        avaibleProducts={products.length}
                        categories={categories.map((category) => {
                            return {
                                id: category.id,
                                name: category.name,
                                products: category.products.length,
                            }
                        })}
                    ></Review>
                </div>
                <div className='categories-wrapper'>
                    <Categories
                        categories={categories}
                        selectedProducts={
                            products.filter((product) => product.checked).length
                        }
                        handleAddProducts={handleAddProducts}
                        handleAddCategory={handleAddCategory}
                        handleRemoveProducts={handleRemoveProducts}
                        handleRemoveCategory={handleRemoveCategory}
                    ></Categories>
                </div>
            </div>
        </div>
    )
}

export default App
