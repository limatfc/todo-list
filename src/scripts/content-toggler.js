export default function contentToggler(array, errorMessage) {
  const contentToDisplay =
    array.length === 0 ? <small>{errorMessage}</small> : array;

  return contentToDisplay;
}
