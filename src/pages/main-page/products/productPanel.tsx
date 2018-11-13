import * as React from 'react';

import { Panel, Image } from 'react-bootstrap';

import './popularProductsStyles.scss';

interface IProps{
    item: any;
}

export default class ProductPanel extends React.Component<IProps,{}> {
    public render() {
        const {item}=this.props;
        return (
            <Panel className="panel">
                <div className="image-wrapper">
                    <Panel.Body>
                        <Image responsive={true} src={item.src} />
                    </Panel.Body>
                </div>
                <Panel.Body>
                    <div className="panel-bottom">
                        {item.text}
                    </div>
                </Panel.Body>
            </Panel>
        );
    }
}
