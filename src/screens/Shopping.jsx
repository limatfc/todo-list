import logo from "../assets/images/logo.png";
import TaskItem from "../components/TaskItem";
import openedEyeIcon from "../assets/icons/eye-open.png";
import useTasksProvider from "../store/use-tasks-provider";

export default function Shopping({ toggleModal }) {
  const tasksContext = useTasksProvider();

  const doneTasks = tasksContext.tasks
    .filter((item) => item.isDone)
    .map((item) => <TaskItem key={item.id} task={item} />);

  const notDoneTasks = tasksContext.tasks
    .filter((item) => !item.isDone)
    .map((item) => <TaskItem task={item} key={item.id} />);

  return (
    <div>
      <img
        src={logo}
        alt="The word IKEA written in blue inside a yellow circle, inside a blue rectangle"
      />
      <h1>Your Shopping List</h1>
      <section>
        <span>Sort by:</span>
        <span>Name</span>
        <span>Price</span>
      </section>
      <div>{notDoneTasks}</div>
      <button onClick={toggleModal}>Add New Item</button>
      <button>
        <img src={openedEyeIcon} alt="an open eye" />
        View Completed Items
      </button>
      <div>{doneTasks}</div>
    </div>
  );
}
