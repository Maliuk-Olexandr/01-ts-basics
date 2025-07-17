console.log("----- Task 6 -----");

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log("First elements of arrays:", getFirstElement<number>([1, 2, 3])); // 1
console.log("First elements of arrays:", getFirstElement<string>(["a", "b", "c"])); // "a"
console.log("First elements of arrays:", getFirstElement<boolean>([true, false, true])); // true


console.log("");
