type Todo = {
  title: string,
  description: string,
  completed: boolean
}

//Readonly 
const todo: Readonly<Todo> = {
  title: "Assistir Dark de novo",
  description: "Relembrar detalhes",
  completed: false
}

//Partial
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo  = updateTodo(todo, {title: "teste"});

console.log(todo);
console.log(todo2);

//Pick

type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
  title: "teste 3",
  completed: true
}


// Omit

type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview2 = {
  title: "teste 4",
  completed: true
}