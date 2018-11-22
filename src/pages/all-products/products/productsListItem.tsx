import *as React from 'react'
import {Button, Image} from "react-bootstrap";

import IconStar from '../../../static/images/iconStar.png'

import './productsStyles.scss'

interface IProps{
    item: any;
}

export default class ProductsListItem extends React.Component<IProps>{
    render(){
        const{
            item
        }=this.props;
        return(
            <div className="products-list-item-wrapper">
                <div className="products-list-item-image-wrapper">
                    <Image
                        src={item.image}
                        className="products-list-item-image"
                        responsive={true}
                    />
                </div>
                <div className="products-list-item-information">
                    <div className="products-list-item-information-header">
                        <img
                            className="products-list-item-information-logo"
                            src={item.icon}
                        />
                        {item.name}
                        <img
                            className="products-list-item-information-star-icon"
                            src={IconStar}
                        />
                        {item.rating}
                    </div>
                    <div className="products-list-item-information-describe">
                        {item.describe}
                    </div>
                    <div className="products-list-item-information-platform-icon-wrapper">
                        {item.platform.map((item, i)=>{
                            return <Image
                                    className="products-list-item-information-platform-icon"
                                    src={item}
                                    key={i}
                                    responsive={true}
                                />
                        })}
                    </div>
                </div>
                <div className="product-list-btn-wrapper">
                    <Button className="products-list-btn">contact us</Button>
                </div>
            </div>
        )
    }
}
