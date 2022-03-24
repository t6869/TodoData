import React from "react";

import './SearchPanel.css'

export class SearchPanel extends React.Component {

    state = {
        value: '',
    };

    onFilterItem = (e) => {
        const arrItem = this.props.todoData;
        console.log(arrItem)
        this.setState({
            value: e.target.value,
        });

            const filter = arrItem.filter((el) => el.label.toLowerCase().includes(this.state.value))
            this.props.onFilterItem(filter)  
    };

    render() {

        return (
            <input type="text"
                placeholder='Type here to search'
                className="form-control search-input"
                onChange={this.onFilterItem}
                value={this.state.value}
            />
        );
    };
};
