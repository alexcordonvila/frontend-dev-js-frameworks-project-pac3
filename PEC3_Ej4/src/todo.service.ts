type TodoListChangedCallback = (todos: Todo[]) => void;

class TodoService {
  public todos: Todo[] = [];
  private onTodoListChanged?: TodoListChangedCallback;

  constructor() {
    const savedTodos = localStorage.getItem("todos");
    this.todos = savedTodos
      ? JSON.parse(savedTodos).map((todoData: Todo) => new Todo(todoData))
      : [];
  }

  //bindTodoListChanged
  bindTodoListChanged(callback: (todos: Todo[]) => void): void {
    this.onTodoListChanged = callback;
  }

  //_commit
  private _commit(todos: Todo[]): void {
    if (this.onTodoListChanged) {
      this.onTodoListChanged(todos);
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  //addTodo
  addTodo(text: string): void {
    this.todos.push(new Todo({ text }));
    this._commit(this.todos);
  }
  //editTodo

  //deleteTodo
  deleteTodo(id: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this._commit(this.todos);
  }

  //ToggleTodo
}
