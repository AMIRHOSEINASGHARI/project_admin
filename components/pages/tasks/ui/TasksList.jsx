// actions
import { getTasks } from "@/actions/task";
import StatusBox from "./StatusBox";

const TasksList = async () => {
  try {
    const data = await getTasks();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 mt-5">
        <StatusBox
          status="Todo"
          taskCount={data.tasks.todo.length}
          tasks={data.tasks.todo}
        />
        <StatusBox
          status="Progress"
          taskCount={data.tasks.progress.length}
          tasks={data.tasks.progress}
        />
        <StatusBox
          status="Done"
          taskCount={data.tasks.done.length}
          tasks={data.tasks.done}
        />
      </div>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default TasksList;
