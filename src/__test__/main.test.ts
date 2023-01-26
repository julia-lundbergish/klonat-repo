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
/*                              Toggle Todo Test                              */
/* -------------------------------------------------------------------------- */

describe('Check if functions get called on - toggleTodo', () => {

    // Function 1
    test('should call on changeTodo', () => {
        //arrange
        document.body.innerHTML = `
        <ul id="todos" class="todo"></ul>`;
        
        let todoList: Todo[] = [
            {text: "todo1", done: true}
        ];
        const changeTodoSpy = jest.spyOn(functions, "changeTodo").mockReturnValue();
        
        //act
        main.toggleTodo(todoList[0]);
        
        //assert
        expect(changeTodoSpy).toBeCalledTimes(1);
        
        }); 

     //Function 2
    test('should call on createHtml', () => {
            //arrange
            document.body.innerHTML = `
            <ul id="todos" class="todo"></ul>`;

            let todoList: Todo[] = [
                {text: "todo1", done: true}
            ];
            const createTodoSpy = jest.spyOn(main, "createHtml").mockReturnValue();
            
            //act
            main.toggleTodo(todoList[0]);
            
            //assert
            expect(createTodoSpy).toBeCalledTimes(1);
            
            }); 
    });

/* -------------------------------------------------------------------------- */
/*                            Test for error message                          */
/* -------------------------------------------------------------------------- */

describe('should add or remove error depending on argument value', () => {

    test('should add class show to display error message if argument is true', () => {

        //arrange 
        let errorMessage = 'An error is present';
        document.body.innerHTML = `
        <div id="error" class="error"></div>`;

        //act
        displayError(errorMessage, true);

        //assert
        let result = document.getElementById('error') as HTMLDivElement;
        expect(result.classList.contains("show")).toBe(true);
    });

    test('should remove class show to hide error message if argument is false', () => {

        //arrange
        let errorMessage = 'An error is present';
        document.body.innerHTML = `
        <div id="error" class="error"></div>`;

        //act
        displayError(errorMessage, false);

        //assert
        let result = document.getElementById('error') as HTMLDivElement;
        expect(result.classList.contains("show")).toBe(false);
    });

});

/* -------------------------------------------------------------------------- */
/*                      Test for removing todo list items                     */
/* -------------------------------------------------------------------------- */

describe('should use clearToDos-function', () => {

    test('should call function removeAllTodos', () => {

        //arrange
        let spyOnRemoveAllTodos = jest.spyOn(functions, "removeAllTodos").mockReturnValue()
        let spyOnCreateHtml = jest.spyOn(main, "createHtml").mockReturnValue()

        //act
        main.clearTodos([]);

        //assert
        expect(spyOnRemoveAllTodos).toHaveBeenCalled();
        spyOnCreateHtml.mockRestore();
    });

    test('should call createHTML', () => {

        //arrange
        document.body.innerHTML = `<ul id="todos class="todo"></ul>`
        let spyOnCreateHtml = jest.spyOn(main, "createHtml").mockReturnValue();

        //act
        main.clearTodos ([])

        //assert
        expect(spyOnCreateHtml).toHaveBeenCalled();
        spyOnCreateHtml.mockRestore;
    });

    test('should call on removeAllTodos()', () => {

        //arrange
        document.body.innerHTML = `
        <ul id="todos" class="todo"></ul>`;
        
        const todoSpy = jest.spyOn(functions, "removeAllTodos").mockReturnValue();
        
        //act
        main.clearTodos([]);
        
        //assert
        expect(todoSpy).toHaveBeenCalled();
        });
})




 


    






















