import React from "react";

import "./ItemAddForm.css"

export class ItemAddForm extends React.Component {

    state={
        label: '',
    }

    onChange =(e) => { 
        
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.label !== ''){
            this.props.onAddItem(this.state.label)
            this.setState({
                label: '',
            })
        }else{
            alert('Нужно что-то сделать')
        }
        
    }
    
    render(){
        return(
            <form onSubmit={this.onSubmit}>
    
                <input className="form-control search-input"
                       type='text'
                       onChange={this.onChange}
                       value= {this.state.label}
                />
                <button className="item-add-form">
                    Add item
                </button>
            </form>
        );
    };
};