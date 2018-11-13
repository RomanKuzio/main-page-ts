import * as React from 'react';
import { Image } from 'react-bootstrap';

import FooterLogo from '../../static/images/FooterLogo.png';

import './footerStyles.scss';

export default class Footer extends React.PureComponent<{},{}>{
    public render() {
        return (
            <div className="footer">
                <div className="footer-top-wrapper">
                    <div className="footer-image">
                        <Image responsive={true}
                               src={FooterLogo} />
                    </div>
                    <div className="footer-btns">
                        <div>ABOUT US</div>
                        <div>TERMS OF SERVICE</div>
                        <div>PRIVACY POLICY</div>
                        <div>CONTACT US</div>
                    </div>
                </div>
                <div className="bottom-of-page-wrapper">
                    <div className="bottom-of-page">
                        <div>© 2018 Find Parrot</div>
                    </div>
                </div>
            </div>
        );
    }
}
