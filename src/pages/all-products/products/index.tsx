import *as React from 'react'

import ProductsListItem from './productsListItem'
import {products} from './productsArray'

export default class ProductsList extends React.Component{
    render(){
        return(
            <div className="products-list-wrapper">
                {
                    products.map((item,i)=>{
                        return <ProductsListItem item={item} key={i}/>
                    })

                }
            </div>
        )
    }
}
