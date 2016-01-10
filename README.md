# magnitude

Relative distance between two numbers (probably not useful to you, it's a
dependency of another project)

## Installation

    $ npm install @datagica/magnitude --save

## Usage

```javascript
    var magnitude = require("@datagica/magnitude");

    // magnitude returns 0 if two numbers are equals
    magnitude(0,0)          // 0
    magnitude(1,1)          // 0

    // magnitude tends to 1 when the difference between two numbers increases
    magnitude(0,1)          // 0.5
    magnitude(1,2)          // 0.5
    magnitude(0,10)         // 0.9090909090909091
    magnitude(0,100000000)  // 0.9999999900000001
    magnitude(1,3)          // 0.6666666666666667
    magnitude(1,4)          // 0.75
    magnitude(1,5)          // 0.8
    magnitude(1,1.0001)     // 0.00004999999999999449
    magnitude(20,30)        // 0.9090909090909091
```

## Rules

- If inputs are equal then return 0
- If inputs are not both valid finite numbers then return 1
- If the difference between the inputs is inferior to 1, then return a number between 0.0 and 0.5
- If the difference between the inputs is superior to 1, then returns a number between 0.5 and 1.0

## TODO

- fix the singularity around delta = 1 (ie. when mag = 0.5)
