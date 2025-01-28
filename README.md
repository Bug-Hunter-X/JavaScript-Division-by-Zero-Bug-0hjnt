# JavaScript Division by Zero Bug

This repository demonstrates a common JavaScript error: division by zero. The `myFunction` attempts to divide two numbers, but it doesn't correctly handle the case where either of the inputs is zero. This can lead to unexpected behavior or crashes in the program.

## Bug Description
The provided code in `bug.js` shows a simple division function that fails when one of the arguments is zero.  The current implementation returns 0, which is incorrect. Instead, it should gracefully handle the division by zero scenario.

## Solution
The solution provided in `bugSolution.js` addresses this by checking if either argument is zero before performing the division. If either is zero, it throws a more informative error message; otherwise, it performs the division. This approach ensures that the program does not crash and provides more informative feedback to users.

## How to reproduce
1. Clone the repository.
2. Open `bug.js` to view the problematic code.
3. Run the function with zero input values. Observe the incorrect output. 
4. Open `bugSolution.js` to view the correct solution.
5. Run the function with zero input values and check for the informative error.