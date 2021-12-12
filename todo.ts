interface Itodo{
    text:string
}
class TodoServiceTS{
    mockedTodos:Itodo[] = [
        {
            text:"be formuliar with html and js"
        },        
        {
            text:"be formuliar with html and ts"
        },

    ]
    getTodos(){
        return this.mockedTodos
    }
    getTodosHtml(todoItem:Itodo){
        return ` <p> ${todoItem.text} </p>
        `
    }
}

export {TodoServiceTS}

