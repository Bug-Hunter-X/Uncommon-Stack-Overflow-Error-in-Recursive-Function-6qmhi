# Uncommon Stack Overflow Error in Recursive Function

This repository demonstrates an uncommon stack overflow error in a recursive JavaScript function.  The function appears to have a correctly defined base case, but the recursive calls don't reach the base case for certain inputs, leading to a stack overflow.

## The Bug
The primary issue lies within the recursive function `foo`. While it seemingly has a base case (`a === 0`), the conditions under which this case is reached are not always met. When the input `a` is large, the number of recursive calls exceeds the JavaScript engine's call stack limit. This results in a stack overflow error, causing the program to crash.

## The Solution
The provided solution modifies the function to explicitly handle such cases and prevent the stack overflow. The solution may involve adding more explicit termination conditions or reworking the function to be iterative.