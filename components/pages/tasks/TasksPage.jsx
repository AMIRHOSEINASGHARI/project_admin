// constants
import { tasksPageBread } from "@/constants/breadcrumpItems";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import CreateNewTask from "./ui/CreateNewTask";
import TasksList from "./ui/TasksList";

const TasksPage = () => {
  return (
    <>
      <PageHeading title="Tasks" />
      <CustomBreadcrumb items={tasksPageBread} />
      <CreateNewTask />
      <TasksList />
    </>
  );
};

export default TasksPage;
