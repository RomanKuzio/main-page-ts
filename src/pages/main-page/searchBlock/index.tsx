import * as React from 'react';
import MaterialIcon from 'material-icons-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SaveProducts } from "../../../actions/actions";
import MainPageSearchForm from '../../../container/mainPageSearchForm/mainPageSearchForm'
import BottomButtons from './bottomButtons';

import './serchBlockStyles.scss';
import {crudBuilder} from "../../../helpers/httpRequest";
import {historyPush} from "../../../helpers/historyPush";

interface IProps{
    SaveProducts:any
}

class SearchBlock extends React.Component<IProps>{
    handleSubmit=async(value)=>{
        try{
            if(value.category!=0&&value.category!=undefined) {
                const response = await crudBuilder(`/items`).getList({
                    of_category: [value.category],
                    with_name: value.name,
                });
                this.props.SaveProducts(response.data.items);
                historyPush('/all-products',{})
            }else{
                const response = await crudBuilder(`/items`).getList({
                    with_name: value.name,
                });
                this.props.SaveProducts(response.data.items);
                historyPush('/all-products',{})
            }
        }catch(err){
            console.log(err)
        }
    };

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
                    <MainPageSearchForm onSubmit={this.handleSubmit}/>
                </div>
                <div className="search-block-footer">
                    <BottomButtons />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ SaveProducts, dispatch }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBlock)
