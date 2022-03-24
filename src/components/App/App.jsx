import React from "react";

import { AppHeader } from "../AppHeader/AppHeader";
import { ItemAddForm } from "../ItemAddForm/ItemAddForm";
import { ItemStatusFilter } from "../ItemStatusFilter/ItemStatusFilter";
import { SearchPanel } from "../SearchPanel/SearchPanel";
import { TodoList } from "../TodoList/TodoList";

export class App extends React.Component {

    maxId = 100;

    state = {
        todoData: [
            this.createNewItem('Drink coffee'),
            this.createNewItem('Make awesome app'),
            this.createNewItem('Have a lunch'),
        ],

        viwe: ''
    };

    foo(){
        if(this.state.viue === ''){
            this.setState({
                viwe: todoData
            })
        }
    }

    createNewItem(label) {
        return {
            id: this.maxId++,
            label,
            done: false,
            important: false,
        };
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1)

            const newArray = [...before, ...after];

            return {
                todoData: newArray
            }
        });
    };

    onAddItem = (text) => {
        const newItem = this.createNewItem(text);

        this.setState(({ todoData }) => {
            const newItemArray = [...todoData, newItem];

            return {
                todoData: newItemArray
            };
        });
    };

    makeFoucntionToggle = (arr, id, namePorop) => {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [namePorop]: !oldItem[namePorop] };
        const newArray = [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1),
        ];

        return newArray
    };

    onDoneMake = (id) => {
        this.setState(({ todoData }) => {
            const newArray = this.makeFoucntionToggle(todoData, id, 'done');

            return {
                todoData: newArray
            };
        });

    };

    onImportantMake = (id) => {
        this.setState(({ todoData }) => {
            const newArray = this.makeFoucntionToggle(todoData, id, 'important');


            return {
                todoData: newArray
            };
        });
    };

    onFilterItem = (newFilteredArray) => {
        console.log(newFilteredArray)
    }

    render() {
        const { todoData,viwe } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const toDoCount = todoData.length - doneCount;
      
       
        return (
            <div className="todo-app">
                <AppHeader
                    toDo={toDoCount}
                    done={doneCount}
                />
                <div className="top-panel d-flex">
                    <SearchPanel
                        todoData={todoData}
                        onFilterItem={this.onFilterItem}
                    />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={}
                    onDeleted={this.deleteItem}
                    onDoneMake={this.onDoneMake}
                    onImportantMake={this.onImportantMake}
                />
                <ItemAddForm onAddItem={this.onAddItem} />
            </div>
        );
    };
}; 