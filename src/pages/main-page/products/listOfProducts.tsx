import * as React from 'react';

import ProductPanel from './productPanel';
    import HubstaffDirectory from '../../../static/images/HubstaffDirectory.png';
import Jira2017 from '../../../static/images/Jira2017.png';
import SlackPro from '../../../static/images/StackPro.png';
import TraveChat from '../../../static/images/TraveChat.png';
import Network from '../../../static/images/Network.png';
import TimeCamp from '../../../static/images/TimeCamp.png';

import './popularProductsStyles.scss';

const arr=[
    {src:HubstaffDirectory,text:"Hubstaff Directory"},
    {src:Jira2017, text:"Jira 2017"},
    {src:SlackPro, text:"Slack Pro"},
    {src:TraveChat, text:"Trave Chat"},
    {src:Network, text: "Network"},
    {src:TimeCamp, text:"Time Camp"}
];

export default class ListOfProducts extends React.PureComponent{
    public render() {
        return (
            <div className="product-list-wrapper">
                {
                    arr.map((item, i) => {
                        return <ProductPanel item={item} key={i}/>
                    })
                }
            </div>
        );
    }
}
