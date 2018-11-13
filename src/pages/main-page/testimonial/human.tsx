import * as React from 'react';
import { Image } from 'react-bootstrap';

import './testimonialsStyles.scss';

interface IHumanProps{
    src: string;
    comment: string;
    name: string;
    works: string;
}

export default class Human extends React.Component<IHumanProps> {
    public render() {
        const {src,comment,name,works}=this. props;
        return (
            <div className="human">
                <div className="testimonials-image-wrapper">
                    <Image
                        responsive={true}
                        className="testimonials-image"
                        src={src}
                    />
                </div>
                <div className="commetn">{comment}</div>
                <div className="testimonials-name-wrapper">
                    <div className="testimonials-name">{name}</div>
                    <div className="testimonials-work">{works}</div>
                </div>
            </div>
        );
    }
}
