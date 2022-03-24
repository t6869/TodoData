import React from "react";
import "./TodoListItem.css"

export class TodoListItem extends React.Component {

    render() {
        const { label, onDeleted, onDoneMake, onImportantMake, done, important } = this.props;

        let classNames = "todo-list-item";

        if (important) {
            classNames += ' important';
        };

        if (done) {
            classNames += ' done';
        };

        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={onDoneMake}>
                    {label}
                </span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onImportantMake}>
                    <i className="fa fa-exclamation " />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}
                >
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        )
    }
}

