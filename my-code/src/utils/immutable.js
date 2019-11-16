export default function change(originalState, stateChanges) {
  return Object.assign({}, originalState, stateChanges);
}
