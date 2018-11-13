import * as React from 'react';

import Header from '../../component/header'
import SearchBlock from './searchBlock'
import PopularProducts from './products'
import Testimonial from './testimonial';
import Footer from '../../component/footer/';


export default class MainPage extends React.Component {
    public render() {
        return (
            <div >
                <div className="background">
                    <Header />
                    <SearchBlock />
                </div>
                <PopularProducts/>
                <Testimonial/>
                <Footer/>
            </div>
        );
    }
}

