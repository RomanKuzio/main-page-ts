import * as React from 'react';

import ListOfProducts from './listOfProducts';

import './popularProductsStyles.scss';

export default class PopularProducts extends React.PureComponent{
    public render() {
        return (
            <div className="popular-products-wrapper">
                <div className="popular-products-title">
                    <div className="title">Most Popular Products</div>
                    <div className="describe">
                        This is a list of products that
                        are most intrested in users
                    </div>
                </div>
                <ListOfProducts />
                <div className="all-products">
                    <u>
                        <a>All Products</a>
                    </u>
                </div>
            </div>
        );
    }
}
