export default function setLocalStorage(tasks, storageKey) {
  localStorage.setItem(storageKey, JSON.stringify(tasks));
}
