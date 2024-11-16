import { TodoController } from "./controllers/todo.controller";
import { TodoService } from "./services/todo.service";
import { TodoView } from "./views/todo.views";
import "./style.css";

const app: TodoController = new TodoController(new TodoService(), new TodoView());