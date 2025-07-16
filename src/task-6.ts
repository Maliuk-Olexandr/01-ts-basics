console.log("----- Task 6 -----");

function getFirstElement<T>(arr: [T, ...T[]]): T {
  return arr[0];
}

console.log("First elements of arrays:", getFirstElement([1, 2, 3])); // 1
console.log("First elements of arrays:", getFirstElement(["a", "b", "c"])); // "a"
console.log("First elements of arrays:", getFirstElement([true, false, true])); // true


console.log("");
