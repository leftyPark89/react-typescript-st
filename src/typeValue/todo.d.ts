interface Todo {
  id: string,
  text: string,
  completed: boolean;
}

interface TodoContextType {
  todos: Todo[];
}

interface TodoContextActionType {
  addTodo: (text:string) => void;
  chkToggle: (id:string) => void;
  deleteTodo: (id:string) => void;
  modifyBrn: (id:string, text:string) => void;
}