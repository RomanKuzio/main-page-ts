import *as React from 'react'
import {Button, Image} from "react-bootstrap";

import Telegram from '../../../static/images/Telegram.png'
import SlackPro from '../../../static/images/SlackPro.png'
import Whatsapp from '../../../static/images/Whatsapp.png'
import WhatsappIcon from '../../../static/images/whatsappIcon.png'
import SlackIcon from '../../../static/images/slackIcon.png'
import TelegramIcon from '../../../static/images/TelegramIcon.png'
import windowsIcon from '../../../static/images/windowsIcon.png'
import ubuntuIcon from '../../../static/images/ubuntuIcon.png'
import iosIcon from '../../../static/images/iosIcon.png'
import macintoshIcon from '../../../static/images/macintoshIcon.png'
import androidIcon from '../../../static/images/androidIcon.png'

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
                        src={SlackPro}
                        className="products-list-item-image"
                        responsive={true}
                    />
                </div>
                <div className="products-list-item-information">
                    <div className="products-list-item-information-header">
                        <img
                            className="products-list-item-information-logo"
                            src={SlackIcon}
                        />
                        {item.name}
                        <img
                            className="products-list-item-information-star-icon"
                            src={IconStar}
                        />
                        5
                    </div>
                    <div className="products-list-item-information-describe">
                        Slack creates alignment and shared understanding
                        across your team, making you more productive,
                        less stressed, and just a little bit happier
                    </div>
                    <div className="products-list-item-information-platform-icon-wrapper">
                       <img src={windowsIcon} className="products-list-item-information-platform-icon"/>
                       <img src={macintoshIcon} className="products-list-item-information-platform-icon"/>
                       <img src={androidIcon} className="products-list-item-information-platform-icon"/>
                    </div>
                </div>
                <div className="product-list-btn-wrapper">
                    <Button className="products-list-btn">contact us</Button>
                </div>
            </div>
        )
    }
}
