import React from 'react';

import './ItemStatusFilter.css'

export class ItemStatusFilter extends React.Component{
    render(){
        return (
            <div>
                <button type="btn-group"
                        className="btn btn-info">All</button>
                <button type="button"
                        className="btn btn-outline-secondary">Active</button>
                <button type="button"
                        className="btn btn-outline-secondary">Done</button>
            </div>
        )
    }
}