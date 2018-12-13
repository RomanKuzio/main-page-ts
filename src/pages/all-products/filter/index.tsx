import *as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from '@material-ui/core/Icon';
import qs, {assert} from "qs";
import {queryString,stringify} from 'query-string'

import {crudBuilder} from "../../../helpers/httpRequest";
import { SaveProducts } from "../../../actions/actions";
import FiltersForm from "../../../container/filterForm/filterForm"

import './filterStyles.scss';

interface IProps{
    SaveProducts:any
}

interface IState{
    open: boolean;
}

class Filter extends React.Component<IProps,IState>{
    state={
      open: false
    };

    showSearcher = () =>{
      this.setState(prevState => ({open: !prevState.open}))
    };

    handleSubmit = async(value)=>{
        console.log(value);
        try{
            let unencoded = qs.stringify({ by_cost: { days_number: 1,lower_price: value.startPrice, upper_price: value.endPrice }, }, { encode: false });
            console.log(unencoded);
            if (value.category != 0 && value.category != undefined) {
                const response = await crudBuilder(`/items?${unencoded}`).getList({
                    of_category: [value.category],
                    with_name: value.name,
                });
                this.props.SaveProducts(response.data.items)
            } else {
                const response = await crudBuilder(`/items?${unencoded}`).getList({
                    with_name: value.name,
                });
                this.props.SaveProducts(response.data.items)
            }
        }catch(err){
            console.error(err)
        }
    };

    handleChange = async(value)=>{
        console.log(this.props);
        try{
            let unencoded = qs.stringify({ by_cost: {days_number: 1, lower_price: value.startPrice, upper_price: value.endPrice }, }, { encode: false });
            if(value.category!=0&&value.category!=undefined) {
                const response = await crudBuilder(`/items?${unencoded}`).getList({
                    of_category: [value.category],
                    with_name: value.name,

                });
                this.props.SaveProducts(response.data.items)
            }else{
                const response = await crudBuilder(`/items?${unencoded}`).getList({
                    with_name: value.name,
                });
                this.props.SaveProducts(response.data.items)
            }
        }catch(err){
            console.log(err)
        }
    };


    renderSearcher =()=>{
      const open = this.state.open;
        if(open === true){
            return(
                <div className="filter-wrapper">
                    <div className='filter-title'>All Products</div>
                    <div className="filter-block-title" onClick={this.showSearcher}>
                        <div className="filter-block-title-text">Filter</div>
                        <Icon
                            className="filter-block-title-icon"
                        >
                            clear
                        </Icon>
                    </div>
                    <div className="filter-block">
                        <FiltersForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="filter-wrapper">
                    <div className='filter-title'>All Products</div>
                    <div className="filter-block-title-close" onClick={this.showSearcher}>
                        <div className="filter-block-title-text-close">Filter</div>
                        <Icon
                            className="filter-block-title-icon-close"
                        >
                            search
                        </Icon>
                    </div>
                </div>
            );
        }
    };

    render(){
        return(
            this.renderSearcher()
        )
    }
}


const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ SaveProducts, dispatch }, dispatch);
};

export default connect(null, mapDispatchToProps)(Filter)
