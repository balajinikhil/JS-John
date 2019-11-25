# Javascript

## Javascript Fundament

### Type

- We can write Javascript to a html in 3 ways

1. Inline : Writing code as an inline command
   i.not recomended

   ```
   <button type = 'submit' onclick='alert('You clicked the button')'>Submit</button>
   ```

2. Internal : Writing code attaching "script" tags in html

   ```
   <script>

   alert('Hello World')

   </script>
   ```

3. External : By attaching an external file
   ```
   <script src='./fileName'></script>
   ```

### Input Output

- 3 usefull tools while learning JS
  i.e 3-best friends

```
document.write('Hello World')

console.log('Hello People')

alert('Welcome')

```

### Comments

- Single line comment //
- Multi line comment /\* \*/

### Variables

- Rules for declaring variables

1. Can include letters , digits and dollar and underscore, but must start with letters or & or \_

2. Must not include key words

3. Case sensitive firstname != FIRSTNAME

4. CamelCasing or underscore is recomended

5. let var const are key words to declare variables

```
let firstName = 'Thomas '

```

### String Concatination

- Adding two or more strings to form a single string is called as string concatination

```
let firstName = 'Thomas'
let lastName = 'Shelby'

let fullName = firstName + lastName

console.log(fullName)
```

### Numbers

- All floating and integer value numbers are classifed as number datatype in javascript

#### Math Operators

1. Add +
2. Substract -
3. Multiply \*
4. Divide /
5. Modules % i.e gives remainder after division
6. Increment ++ i.e to increase the value by 1
7. Decrement -- i.e to decrease the value by 1
8. Shorthand a = a + 1 === a += 1 &&
   a = a - 5 === a-= 5

Math operator follows BODMAS rule so ( are priority )

### Implicit Type Conversion

Javascript converts string <=> number based on action required to perform known as Implicit type conversion

```
//number to string
let value1 = "John";
let value2 = 123;

let result1 = value1 + value2;
console.log(result1);
console.log("converted number to : ", typeof result1);

/*String to number
+ :Concatination occurs */
let value3 = "100";
let value4 = "8";

let result2 = value3 - value4;
console.log(result2);
console.log("converted string to : ", typeof result2);

```

### Datatypes

- Javascript has 5 primitive datatypes and 3 non primitive datatypes

Primitive Datatypes

1. String : ' ' , " " , ``
2. Number : 1 , 1.123
3. Boolean : true , false
4. Undefined : variable is declared but not assigned any values
5. Null : No value

Non-Primitive Datatypes

1. Array : can store multiple datatypes as values in zero indexed manner
2. Function : block of codes which can be called whenever necessary
3. Object : holds properties, values and methods

### Conditions

- If Else condition
  When a condition is true the code in code block of if will be executed or
  else code block will be executed, If we want to check some more condition
  else if can be used

  Syntax

  ```
  if(condition){
      //If condition is true executed
  } else if(condition){
      //If this condition is true will be executed
  }else {
      //If both the conditions are not true will be executed
  }
  ```

#### Comparison Operators

- Used to compare 2 values

1. '<' less than
2. '>' greater than
3. '>=' greater than equal to
4. '<=' less than equal to
5. '==' equal to
6. '!=' not equal to
7. '===' strict equal to it checks datatype also
8. '!==' strict not equal to

- example

```
let a = 1;
let b = 2;

if (a > b) {
 console.log("a > b");
} else {
 console.log("a < b");
}

let x = 1;
let y = "1"; //implicit type conversion
if (x === y) {
 console.log("x == y");
} else if (x == y) {
 console.log("x == y");
}
```

### Logical Operators
