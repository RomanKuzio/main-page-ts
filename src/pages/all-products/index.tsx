import *as React from 'react';

import Header from '../../component/header'
import Footer from '../../component/footer'
import Filter from './filter'

import './allProductsStyles.scss';
import ProductsList from "./products/index";

export default class AllProducts extends React.Component{
    render(){
        return(
            <div className="all-products-page">
                <Header/>
                <div className="all-products-center-wrapper">
                    <Filter/>
                    <ProductsList/>
                </div>
                <Footer/>
            </div>
        )
    }
}
