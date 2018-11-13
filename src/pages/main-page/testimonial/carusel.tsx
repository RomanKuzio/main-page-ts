import * as React from 'react';
import Slider from 'react-slick';
import { debounce } from 'lodash';

import Human from './human';
import John from '../../../static/images/John.png';
import Adam from '../../../static/images/Adam.png';

import './testimonialsStyles.scss';

interface IState{
    device:string;
}

export default class Carusel extends React.Component<{},IState> {
    state: IState = {
        device: "",
    };

    componentDidMount() {
        this.setSizeName();
        window.addEventListener('resize', this.checkResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkResize);
    }

    setSizeName = (windowSize = window.innerWidth) => {
        if (windowSize < 480) {
            this.setState({ device: 'mobile' });
            return;
        }
        if (windowSize < 768) {
            this.setState({ device: 'tablet' });
            return;
        }
        this.setState({ device: 'desktop' });
    };

    checkResize = () =>
        debounce(() => {
            this.setSizeName();
        }, 5)();

    choseSettings = () => {
        let settings;
        if (this.state.device === 'mobile') {
            settings = {
                centerMode: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
            };
        } else {
            settings = {
                centerMode: true,
                draggable: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 300,
                variableWidth: false,
            };
        }
        return settings;
    };

    public render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Slider {...this.choseSettings()} className="big-slider">
                        <div className="big-slider-elements">
                            <Human
                                src={John}
                                comment="I have been incredibly impressed with LinkUp team of developers.
            Few people would choose a prison as the location for a special evening out.
            However, Italy has launched its first restaurant to be located in a real jail.
            At the Ingalera Restaurant in Bollate prison, Milan, there are four prisoners working
            as waiters and five others cooking in the kitchen, headed by a professional chef and a maître."
                                name="John Kamman"
                                works="Wholesum Founder"
                            />
                        </div>
                        <div className="big-slider-elements">
                            <Human
                                src={John}
                                comment="I have been incredibly impressed with LinkUp team of developers.
              Few people would choose a prison as the location for a special evening out.
              However, Italy has launched its first restaurant to be located in a real jail.
              At the Ingalera Restaurant in Bollate prison, Milan, there are four prisoners working
              as waiters and five others cooking in the kitchen, headed by a professional chef and a maître."
                                name="John Kamman"
                                works="Wholesum Founder"
                            />
                        </div>
                        <div className="big-slider-elements">
                            <Human
                                src={Adam}
                                comment="I have been incredibly impressed with LinkUp team of developers.
          Few people would choose a prison as the location for a special evening out.
          However, Italy has launched its first restaurant to be located in a real jail.
          At the Ingalera Restaurant in Bollate prison, Milan, there are four prisoners working
          as waiters and five others cooking in the kitchen, headed by a professional chef and a maître."
                                name="John Kamman"
                                works="Wholesum Founder"
                            />
                        </div>
                        <div className="big-slider-elements">
                            <Human
                                src={John}
                                comment="I have been incredibly impressed with LinkUp team of developers.
          Few people would choose a prison as the location for a special evening out.
          However, Italy has launched its first restaurant to be located in a real jail.
          At the Ingalera Restaurant in Bollate prison, Milan, there are four prisoners working
          as waiters and five others cooking in the kitchen, headed by a professional chef and a maître."
                                name="John Kamman"
                                works="Wholesum Founder"
                            />
                        </div>
                    </Slider>
                </div>
            </React.Fragment>
        );
    }
}
