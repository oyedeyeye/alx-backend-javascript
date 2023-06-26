export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';
  for (const [idx, value] of reportWithIterator.entries()) {
    idx !== reportWithIterator.length - 1 ? employeeNames += `${value} | ` : employeeNames += `${value}`;
  }

  return employeeNames;
}
