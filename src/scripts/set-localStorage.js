export default function setLocalStorage(tasks, storageKey) {
  //const error = "Please check the storageKey parameter passed to the setLocalStorage function"
  //if tasks (!Array.isArray(tasks)) JSON.stringify([]);
  // if (storageKey === undefined) throw new Error (error)
  localStorage.setItem(storageKey, JSON.stringify(tasks));
}
