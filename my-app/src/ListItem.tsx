import React, { useState, Fragment } from "react";

interface Task {
  title: string;
}
interface TaskListProps {
  initialTasks: Task[];
}

interface State {
  tasks: Task[];
}

const TaskList: React.FunctionComponent<TaskListProps> = ({ initialTasks }) => {
  const [state, setState] = useState<State>({
    tasks: initialTasks
  });

  const addItem = () => {
    let tasks = Array.from(state.tasks);
    tasks.push({ title: "new item" });
    setState({ tasks });
  };
  return (
    <Fragment>
      <button type="button" onClick={addItem}>
        Add
      </button>
      <ul>
        {state.tasks.map((o, i) => {
          return <li key={i}>{o.title}</li>;
        })}
      </ul>
    </Fragment>
  );
};

export default () => (
  <div>
    <TaskList initialTasks={[{ title: "asdasdsad" }, { title: "wewqeaa" }]} />
  </div>
);
