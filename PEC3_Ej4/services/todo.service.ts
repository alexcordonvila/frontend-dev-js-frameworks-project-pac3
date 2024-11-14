class TodoService {

    todos : Todo[];

    constructor() {
        const savedTodos = localStorage.getItem("todos");
        this.todos = savedTodos ? (JSON.parse(savedTodos)).map(
            (todoData: Todo) => new Todo(todoData)
        ) : [];
    }

    //bindTodoListChanged

    //_commit

    //addTodo

    //editTodo

    //deleteTodo

    //ToggleTodo
}