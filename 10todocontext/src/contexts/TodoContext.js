import { createContext,useContext } from "react";


export const TodoContext = createContext({
    todos : [
        {
           id: 1,
           todo: "Todo message",
           completed: false,
        }
    ],
    toggleComplete:false,
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deletetodo: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
