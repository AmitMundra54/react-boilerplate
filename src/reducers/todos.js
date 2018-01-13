export default function todos(state = ['redux'], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    case 'REMOVE_TODO':
      return state.splice([action.text]);
    default:
      return state
  }
}