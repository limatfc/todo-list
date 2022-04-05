export default function getLocalStorage(setTasks, storageKey) {
  const getLocalData = localStorage.getItem(storageKey);
  const parse = JSON.parse(getLocalData) || [];
  setTasks(parse);
}
