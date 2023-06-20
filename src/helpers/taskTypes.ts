export interface Task {
  id: number;
  title: string;
  description: string;
}

export interface TaskState {
  tasks: Task[];
}

export enum TaskActionTypes {
  ADD_TASK = "ADD_TASK",
}

export interface AddTaskAction {
  type: TaskActionTypes.ADD_TASK;
  payload: any;
}

export type TaskAction = AddTaskAction;
