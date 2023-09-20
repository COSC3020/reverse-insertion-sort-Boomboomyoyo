[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11972544&assignment_repo_type=AssignmentRepo)
# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

To analyze this, first I organized the algorithm into steps. and analyzed it for the worst case
1. The first element of the array is sorted. This takes no operations
2. Compare the next value of the array with all values left of it until you find where it belongs.
Then swap it there. This will be n-1 comaparisons, and 1 swap operation, for a total of n operations in the worst case.
3. Repeat step 2 until there are no more values in the array. This means step 2 will be repeated n-1 times, one for each element except the first. This is true for all cases, as all elements will need to be processed.

Now, the average case would be where the number of places any given element needs to move is half of the elements within the sorted array, so it would be ((n-1)/2)+1 operations. Since for all cases all elements in the array need to be processed, the n-1 cases will be applicable in the average case. This leaves us at (((n-1)/2)+1)(n-1), which is an element of $\Theta(n^2)$, since you can basically disregard the constants.