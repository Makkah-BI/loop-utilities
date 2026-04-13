// Part 1: Flatten a nested array
function flattenArray(arr) {
  const result = [];
  for (const innerArray of arr) {
    for (const item of innerArray) {
      result.push(item);
    }
  }
  return result;
}

// Test cases for flattenArray
console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
console.log(flattenArray([[1], [], [2, 3]])); // [1, 2, 3] (empty array handled gracefully)

// Part 2: Sum a range of integers
function sumRange(start, end) {
  // Ensure start <= end by swapping if needed
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }
  return total;
}

// Test cases for sumRange
console.log(sumRange(5, 10)); // 45
console.log(sumRange(10, 5)); // 45 (start > end is swapped automatically)
