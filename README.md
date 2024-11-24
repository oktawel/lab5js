# Array Utilities

A simple package for array manipulation using Lodash.

## Installation

Install the package via npm:
```bash
npm install lab5js
```
## Usage

Import and use the functions:

```javascript
import { squareNumbers, groupBy } from 'your-package-name';

// Example 1: Squaring numbers
const numbers = [1, 2, 3, 4, 5];
console.log(squareNumbers(numbers)); // [1, 4, 9, 16, 25]

// Example 2: Grouping objects by a key
const users = [
    { id: 1, name: 'Dima', age: 25 },
    { id: 2, name: 'Nikita', age: 25 },
    { id: 3, name: 'Andrey', age: 30 },
];
console.log(groupBy(users, 'age'));
// { '25': [{ id: 1, name: 'Dima', age: 25 }, { id: 2, name: 'Nikita', age: 25 }], '30': [{ id: 3, name: 'Andrey', age: 30 }] }
