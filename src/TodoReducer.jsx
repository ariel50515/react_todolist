export const initState = {
  todos: [],
};

export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
};

const TodoReducer = (state, action) => {
  const { type, payload } = action;
  console.log("type", type);
  console.log("payload", payload);

  switch (type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: payload.todo,
      };
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: payload.todo,
      };
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: payload.todo,
      };
    default:
      return state;
  }
};

export default TodoReducer