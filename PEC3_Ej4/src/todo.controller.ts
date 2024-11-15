class TodoController {

    private service: TodoService;
    private view: TodoView;

    constructor(service: TodoService, view: TodoView ){
        this.service = service;
        this.view = view;

        this.service.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTodo(this.handleAddTodo);

        
        this.onTodoListChanged(this.service.todos);
    }

        // onTodoListChanged
        private onTodoListChanged = (todos: Todo[]): void => {
            this.view.displayTodos(todos);
        };
        // handleAddTodo
        private handleAddTodo = (todoText: string): void => {
            this.service.addTodo(todoText);
        };

        // handleEditTodo

        //handleDeleteTodo

        // handleToggleTodo

}