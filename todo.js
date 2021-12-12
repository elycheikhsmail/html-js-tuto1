class TodoServiceTS{
    mockedTodos = [
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
    getTodosHtml(todoItem){
        return ` <p> ${todoItem.text} </p>
        `
    }
}

export {TodoServiceTS}
