import * as React from 'react';
import {  Button, Glyphicon ,DropdownButton,Form, MenuItem,FormControl } from 'react-bootstrap';
import MaterialIcon from 'material-icons-react';

import BottomButtons from './bottomButtons';

import './serchBlockStyles.scss';

export default class SearchBlock extends React.PureComponent{
    render() {
        return (
            <div className="search-block">
                <div className="search-block-top">
                    <div className="search-title-wrapper">
                        <span className="search-title">
                          Quick Search for Your
                          <span className="highlighted-text"> Perfect Product</span>
                        </span>
                    </div>
                    <div className="mini-title">
                        INNOVATE
                        <MaterialIcon icon="brightness_1"/>
                        LIST
                        <MaterialIcon  icon="brightness_1" size="small"/>
                        CONNECT
                    </div>
                    <Form inline={true} className="search-form">
                        <div className="search-form-wrapper">
                            <DropdownButton
                                title="Category"
                                className="dropdown"
                                id="bg-nested-dropdown"
                            >
                                <MenuItem eventKey="1">Dropdown link</MenuItem>
                                <MenuItem eventKey="2">Dropdown link</MenuItem>
                            </DropdownButton>
                            <FormControl type='text' className="input"/>
                            <Button type="submit" className="submit-btn">
                                <div>START SEARCHING</div>
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="search-block-footer">
                    <BottomButtons />
                </div>
            </div>
        );
    }
}
