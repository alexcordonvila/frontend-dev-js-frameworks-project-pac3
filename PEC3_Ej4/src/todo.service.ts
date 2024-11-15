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

  bindTodoListChanged(callback: (todos: Todo[]) => void): void {
    this.onTodoListChanged = callback;
  }

  private _commit(todos: Todo[]): void {
    if (this.onTodoListChanged) {
      this.onTodoListChanged(todos);
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string): void {
    this.todos.push(new Todo({ text }));
    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === id ? new Todo({ ...todo, text: updatedText }) : todo
    );
    this._commit(this.todos);
  }

  deleteTodo(id: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this._commit(this.todos);
  }

  toggleTodo(id: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );
    this._commit(this.todos);
  }
}
