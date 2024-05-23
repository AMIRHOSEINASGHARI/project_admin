// utils
import { getServerSession } from "@/utils/session";
// constants
import { tasksPageBread } from "@/constants/breadcrumpItems";
// cmp
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import PageHeading from "@/components/shared/PageHeading";
import CreateNewTask from "./ui/CreateNewTask";
import TasksList from "./ui/TasksList";

const TasksPage = () => {
  const session = getServerSession();

  return (
    <>
      <PageHeading title="Tasks" />
      <CustomBreadcrumb items={tasksPageBread} />
      <CreateNewTask session={session} />
      <TasksList />
    </>
  );
};

export default TasksPage;
