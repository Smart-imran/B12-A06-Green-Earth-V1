#### 1) What is the difference between var, let, and const?

Ans:
*var**:
- Declares a variable, globally or function-scoped.
- Can be re-declared and updated.
- Not block-scoped, leaks outside blocks `{}`.
- Older method, error-prone.

*let**:
- Declares a block-scoped variable.
- Can be updated, not re-declared in same scope.
- Safer, prevents accidental re-declaration.

*const**:
- Declares a block-scoped variable.
- Cannot be updated or re-declared.
- Requires initial value.
- Used for unchanging values.

#### 2) What is the difference between map(), forEach(), and filter()? 

Ans: 
*map()**:
- Returns new array with transformed elements.
- Used for transforming all elements.

*forEach()**:
- Returns nothing (`undefined`).
- Used for side effects (e.g., logging).

*filter()**:
- Returns new array with elements passing test.
- Used to select specific elements.

#### 3) What are arrow functions in ES6?

Ans:

- Arrow functions are a concise way to write functions in ES6 using `=>` syntax.
- They have implicit return for single expressions (no `return` needed).
- They do not have their own `this`, inheriting `this` from the surrounding scope.
- Cannot be used as constructors (no `new` keyword).
- Ideal for short, one-line functions or callbacks.

#### 4) How does destructuring assignment work in ES6?

Ans:

- Destructuring assignment in ES6 extracts values from arrays or objects into distinct variables using a concise syntax.
- **Array Destructuring**: Uses square brackets `[]` to assign array elements to variables,
- **Object Destructuring**: Uses curly braces `{}` to assign object properties to variables, 
- Supports default values, 
- Can use rest/spread (`...`) to capture remaining elements or properties, 

#### 5) Explain template literals in ES6. How are they different from string concatenation?

Ans:

### Template Literals in ES6
- Uses backticks (\`) for strings, example., `` `Hello` ``.
- Embed variables with `${}`, e.g., `` `Hi, ${name}` ``.
- Supports multiline strings without `\n`.
- Cleaner than string concatenation.

### Differences from String Concatenation
1. **Template Literals**: Backticks + `${}` for variables, example., `` `Hi, ${name}` ``.
   **Concatenation**: Uses `+`, example., `"Hi, " + name`.
2. **Template Literals**: Multiline strings easy, example., `` `Line 1\nLine 2` ``.
   **Concatenation**: Needs `\n`, less readable.
