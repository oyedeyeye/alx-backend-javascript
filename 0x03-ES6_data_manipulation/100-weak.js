export const weakMap = new WeakMap();

const MAX_ENDPOINT_CALL = 5;

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALL) {
    throw new Error('Endpoint load is high');
  }
}
