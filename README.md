# skimmiaChallenge

## Installation

```
npm install
```

To use this Script you should use Node 12+, all the packages are in the web, there is no need to use another NPM provider.
To run the script the comand is:
npm run start

To use as developer:
npm run dev

To run the test:
npm run test

## Documentation

This Repository was created to accomplish the next instructions

## Instructions

Write a program that prints all the numbers from 1 to 100. However, for
multiples of 3, instead of the number, print “Music”. For multiples of 5 print
“TI”. For numbers which are multiples of both 3 and 5, print “Musical”.
But here's the catch: you can use only one `if`. No multiple branches, ternary
operators or `else`.

#### Requirements

- 1 `if`
- You can't use `else`, `else if` or ternary
- Unit tests
- Feel free to apply your SOLID knowledge
- You can write the challenge in any language you want. We are big fans of NodeJS, Javascript and TypeScript

#### Submission

Create a repository on GitLab, GitHub or any other similar service and just send us the link.

### Description

This was created with only one scipt, the intial thought was to use one if and other array function, like find, filter, reduce etc. But i couldn't find any solution, so I decided to make a point system, it means that create puntitaion in order to know what might be the correct word for the number, for example

```js
const texto = ["Music", "TI", "Musical"];
```

"Music" will have 0 points cause, it is the first position, "TI" 1 point and "Musical" 2 points. I tried to force an error.

```js
const evalualteNumber = function (number) {
  try {
    const x = number % 3;
    x = 5 / x;
    return number;
  } catch (error) {
    return "Music";
  }
};
```

But I thought that this could be not a good practice, so I decided to evaluate two times the number and add the two numbers to each other, it will result in one of the three cases, with only one `if`

```js
const texto = ["Music", "TI", "Musical"];
//This makes to secure thath is multiple of 3 OR 5
if (numero % 3 == 0 || numero % 5 == 0) {
  //This evaluate if is multiple of 5 and returns 0 or 1
  let add = Number(numero % 3 >= 1 && numero % 5 == 0);
  //This evaluate if is multiple of 3 and 5 and returns 0 or 2
  add = add + Number(numero % 3 == 0 && numero % 5 == 0) * 2;

  reurn texto[add]
}

```

If the add is equal to cero it means that the number is multiple of 3, if it is 1 it means that is multiple of 5 and if it is 2 it means that is multiple of both of them
