export default function cleanSet(set, startString) {
  if (startString === '' || startString === undefined) { return ''; }

  const filteredValues = [...set]
    .filter((value) => (value !== undefined ? value.startsWith(startString) : ''))
    .map((value) => (value !== undefined ? value.slice(startString.length) : ''));

  return filteredValues.join('-');
}
