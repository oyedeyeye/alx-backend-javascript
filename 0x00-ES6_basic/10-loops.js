export default function appendToEachArrayValue(array, appendString) {
	const arr = [];

	for (const element of array) {
		arr.push(appendString + element);
	}

	return arr;
}
