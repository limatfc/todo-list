import useTasksProvider from "../store/use-tasks-provider";
import "../styles/components/ShoppingHeader.css";

export default function ShoppingHeader() {
  const tasksProvider = useTasksProvider();

  const onSortByName = tasksProvider.sortByName;
  const onSortByPrice = tasksProvider.sortByPrice;
  return (
    <section className="header-wrapper">
      <span className="text">Sort by:</span>
      <button className="secundary label" onClick={onSortByName}>
        Name
      </button>
      <button className="secundary label" onClick={onSortByPrice}>
        Price
      </button>
    </section>
  );
}
