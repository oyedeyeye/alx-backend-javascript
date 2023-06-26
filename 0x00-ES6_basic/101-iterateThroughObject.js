export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';
  for (const [idx, value] of reportWithIterator.entries()) {
    if (idx !== reportWithIterator.length - 1) {
      employeeNames += `${value} | `;
    } else {
      employeeNames += `${value}`;
    }
  }

  return employeeNames;
}
