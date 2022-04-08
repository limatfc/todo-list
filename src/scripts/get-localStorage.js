export default function getLocalStorage(storageKey) {
  const getLocalData = localStorage.getItem(storageKey);
  const parse = JSON.parse(getLocalData) || [];

  return parse;
}
