import *as React from 'react';
import Icon from '@material-ui/core/Icon';
import FilterForm from "../../../container/filterForm/filterForm"


import './filterStyles.scss';

interface IState{
    open: boolean;
}

export default class Filter extends React.Component<{},IState>{
    state={
      open: false
    };

    showSearcher = () =>{
      this.setState(prevState => ({open: !prevState.open}))
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
                        <FilterForm/>
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
                            className="filter-block-title-icon"
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
