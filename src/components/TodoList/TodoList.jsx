import React from "react";
import { TodoListItem } from "../TodoListItem/TodoListItem";


import "./TodoList.css";

export const TodoList = ({ todos, onDeleted , onDoneMake, onImportantMake}) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
    
        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    onImportantMake = {()=> onImportantMake(id)}
                    onDoneMake = {()=> onDoneMake(id)}
                    onDeleted={() => onDeleted(id)}
                    {...itemProps}
                />
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};  