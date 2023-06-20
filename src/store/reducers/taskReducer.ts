import {
  TaskState,
  TaskAction,
  TaskActionTypes,
} from "../../helpers/taskTypes";

const initialState: TaskState = {
  tasks: [],
};

const taskReducer = (state = initialState, action: TaskAction): TaskState => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      const newTasks = {
        ...state,
        tasks: action.payload,
      };
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return {
        ...newTasks,
      };

    default:
      return state;
  }
};

export default taskReducer;
