import * as React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { debounce } from 'lodash';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import HeaderLogo from '../../static/images/HeaderLogo.png';


import './headerStyles.scss';


interface IStateHeader{
    device: string;
    anchorEl: any,
}

const ITEM_HEIGHT = 48;

export default class Header extends React.PureComponent<{},IStateHeader>{
    state:IStateHeader = {
        device: "",
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    componentDidMount() {
        this.setSizeName();
        window.addEventListener('resize', this.checkResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkResize);
    }

    setSizeName = (windowSize = window.innerWidth) => {
        if (windowSize < 640) {
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

    renderMenu=()=>{
        const open = Boolean(this.state.anchorEl);
        if(this.state.device==="tablet"||this.state.device==="mobile"){
            return(
                <div>
                    <IconButton
                        aria-label="More"
                        aria-owns={open ? 'long-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                    >
                        <MoreVertIcon className="mini-menu"/>
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={this.state.anchorEl}
                        open={open}
                        onClose={this.handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: 200,
                            },
                        }}
                    >
                        <MenuItem onClick={this.handleClose}>
                            <div>
                                <Link className="link-btn" to='/all-products'>
                                    ALL PRODUCTS
                                </Link>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <div>ABOUT US</div>
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <div><Link className="link-btn" to='/registration'>SING IN</Link></div>
                        </MenuItem>
                        ))}
                    </Menu>
                </div>
            )
        }
        else{
            return(
                <div className="header-btns">
                    <div>
                        <Link className="link-btn" to='/all-products'>
                            ALL PRODUCTS
                        </Link>
                    </div>
                    <div>ABOUT US</div>
                    <div><Link to='/registration' className="link-btn">SING IN</Link></div>
                </div>
            )
        }
    };

    render() {
        console.log(this.state.device);
        return (
            <React.Fragment>
                <div className="header">
                    <div className="header-image">
                        <Link to="/"><Image responsive={true} src={HeaderLogo} /></Link>
                    </div>
                    <div className="header-menu-wrapper">
                        {this.renderMenu()}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
