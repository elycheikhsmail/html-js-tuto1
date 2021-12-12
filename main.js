import { TodoServiceTS } from "./todo.js";
const todoService = new TodoServiceTS()
let htlmText = ""
const todos = todoService.getTodos()
for (const todoItem of todos) {
    htlmText += todoService.getTodosHtml(todoItem)
} 
let l = Deno.readTextFileSync("layout.html")
l = l.replace("_content",htlmText)
Deno.writeTextFile("index.html",l)
console.log(l) 

// deno run --allow-all main.js