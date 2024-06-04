export default function cleanSet(set, startString) {
  if (startString === '' || startString === undefined
  || !(set instanceof Set) || typeof startString !== 'string') { return ''; }

  const filteredValues = Array.from(set)
    .filter((value) => (value !== undefined ? value.startsWith(startString) : ''))
    .map((value) => (value !== undefined ? value.slice(startString.length) : ''));

  return filteredValues.join('-');
}
