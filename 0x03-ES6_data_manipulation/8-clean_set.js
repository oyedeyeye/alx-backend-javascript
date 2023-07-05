export default function cleanSet(set, startString) {
  const arr = [];
  for (const item of set) {
    if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
      return '';
    }
    if (typeof item === 'string' && item.startsWith(startString)) {
      arr.push(item.replace(startString, ''));
    }
  }
  return arr.join('-');
}
