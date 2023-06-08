class TodoAPI {
    getTodos() {
        throw new Error('Not implemented');
    }
}

class DummyTodoAPI extends TodoAPI {

    todos = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "delectus aut autem 2",
            "completed": true
        }
    ];

    getTodos() {
        return this.todos;
    }
}

class RealTodoAPI extends TodoAPI {

    async getTodos() {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await data.json();
        return todos;
    }
}

export default TodoAPI;
export { DummyTodoAPI, RealTodoAPI };