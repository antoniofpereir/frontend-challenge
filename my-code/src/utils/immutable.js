export default function change(originalState, stateChanges) {
  return { ...originalState, ...stateChanges };
}
