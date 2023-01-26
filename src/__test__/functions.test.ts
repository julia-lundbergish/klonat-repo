/** 
* @jest-environment jsdom
*/

import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";
import { IAddResponse } from "../ts/models/IAddResult";
import { displayError } from "../ts/main";
import * as functions from "../ts/functions"
import * as main from "../ts/main";


/* -------------------------------------------------------------------------- */
/*                             Test for changeTodo                            */
/* -------------------------------------------------------------------------- */

test('should switch false to true', () => {
    
    //arrange
    const todo = new Todo('test', false);

    //act
    changeTodo(todo);

    //assert
    expect(todo.done).toBe(true);
});

/* -------------------------------------------------------------------------- */
/*            Test for clearing todo using removeAllTodos function            */
/* -------------------------------------------------------------------------- */

test('should remove all todos', () => {
    
    //arrange
    let todoList: Todo[] = [
        {text: 'todo1', done: true},
        {text: 'todo2', done: false}
    ];

    //act
    removeAllTodos(todoList);

    //assert
    expect(todoList.length).toBe(0);
});