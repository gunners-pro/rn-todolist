import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import uuid from 'react-native-uuid';

export interface ITask {
  id: string;
  title: string;
  done: boolean;
}

interface TaskContextData {
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
  addNewTask: (title: string) => void;
  removeTask: (id: string) => void;
  updateCompleteTask: (id: string) => void;
}

const TaskContext = createContext({} as TaskContextData);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const removeTask = useCallback(
    (id: string) => {
      const newTasks = tasks.filter(task => task.id !== id);
      setTasks(newTasks);
    },
    [tasks],
  );

  const updateCompleteTask = useCallback(
    (id: string) => {
      const taskUpdated = tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : { ...task },
      );

      setTasks(taskUpdated);
    },
    [tasks],
  );

  const addNewTask = useCallback(
    (title: string) => {
      setTasks([{ id: uuid.v4().toString(), title, done: false }, ...tasks]);
    },
    [tasks],
  );

  const contextValue = useMemo<TaskContextData>(
    () => ({ tasks, setTasks, addNewTask, removeTask, updateCompleteTask }),
    [tasks, addNewTask, removeTask, updateCompleteTask],
  );

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  return context;
}
