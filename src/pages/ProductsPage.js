import React from 'react'
import ProductPanel from '../components/ProductPanel'
import FiltersBar from '../components/FiltersBar'
import SearchBox from '../components/SearchBox'

const ProductsPage = () =>
  <div>
    <FiltersBar />
    <SearchBox />
    <ProductPanel />
  </div>

export default ProductsPage
