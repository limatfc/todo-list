import useTasksProvider from "../store/use-tasks-provider";

export default function ShoppingHeader() {
  const tasksProvider = useTasksProvider();

  const onSortByName = tasksProvider.sortByName;
  const onSortByPrice = tasksProvider.sortByPrice;
  return (
    <section>
      <span>Sort by:</span>
      <button onClick={onSortByName}>Name</button>
      <button onClick={onSortByPrice}>Price</button>
    </section>
  );
}
