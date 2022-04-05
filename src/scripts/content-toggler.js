export default function contentToggler(array, errorMessage) {
  const contentToDisplay = array.length === 0 ? <p>{errorMessage}</p> : array;

  return contentToDisplay;
}
