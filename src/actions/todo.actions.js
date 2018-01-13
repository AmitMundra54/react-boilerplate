import * as axios from 'axios-es6';

export const addTodo = (payload) => {
    let data
    axios
        .get('http://52.14.255.120:8000/api/get-user/')
        .then(res => {
            data = res;
            console.log("WWWWWWWWWWWWWWWWWWW", res, data)
        })
        .catch( res => {
            console.log("QQQQQQQQQQQQQQQQQQ", res)
        });
    return {
    type: 'ADD_TODO',
    text: payload
    }
}

export const removeTodo = (payload) => {
    return {
    type: 'REMOVE_TODO',
    text: payload
    }
}

