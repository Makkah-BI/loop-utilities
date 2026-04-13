# loop-utilities
flattenArray:
We use a for...of loop to iterate over the outer array. Each element is itself an array.
Inside, another for...of loop iterates over the inner array’s elements.
Each inner element is pushed into the result array.
Empty inner arrays simply contribute nothing (the inner loop runs zero times), so they are handled naturally.

sumRange:
First, we check if start is greater than end. If so, we swap them using a temporary variable. This ensures the loop always runs from the smaller number to the larger one.
Then we initialize total to 0 and use a standard for loop to add every integer from start to end (inclusive).
Finally, we return the accumulated sum.
