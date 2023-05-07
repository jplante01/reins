import TaskListItem from "./TaskList.Item";

function Sidebar() {
  return (
    <div className="h-full w-1/4 inline-block bg-slate-700">
      <div className="mt-52">
        <h1 className="text-center text-2xl">Tasks</h1>
        <ul className="flex flex-col">
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;