# Primitive types

- Undefined
- String
- Number
- Boolean
- Object
- Symbol

## Things that may behave as types (subtypes of objects)

- Undeclared
- Null
- Functions
- Array
- bigint

## Values with their string representation when coerced (toString)

_when the hint is string first performed is toString() then valueOf()_

| Value                    | Representation    |
| ------------------------ | ----------------- |
| null                     | "null"            |
| undefined                | "undefined"       |
| true                     | "true"            |
| false                    | "false"           |
| 3.14159                  | "3.14159          |
| 0                        | "0"               |
| -0                       | "0"               |
| []                       | ""                |
| [1, 2, 3]                | "1,2,3"           |
| [null, undefined]        | ","               |
| [[],[],[]]               | ",,,"             |
| [, , , ]                 | ",,,"             |
| {}                       | "[object Object]" |
| {a:2}                    | "[object Object]" |
| {toString(){return "X"}} | "X"               |

## Values with their Number representation when coerced (toNumber)

_when the hint is number first performed is valueOf() then toString()_

| Value                 | Representation |
| --------------------- | -------------- |
| ""                    | 0              |
| "0"                   | 0              |
| "-0"                  | -0             |
| " 0009"               | "9"            |
| "3.14159 "            | "3.14159       |
| "0.                   | 0              |
| ".0"                  | 0              |
| "."                   | NaN            |
| "0xaf"                | 175            |
| false                 | 0              |
| true                  | 1              |
| null                  | 0              |
| undefined             | NaN            |
| [null, undefined]     | 0              |
| [[[]]]                | 0              |
| [1,2 ,3 , ]           | NaN            |
| {..}                  | NaN            |
| {valueOf(){return 3}} | 3              |

## Values with their Boolean representation when coerced (toBoolean)

_toBoloean does not perform toPrimitve is simply checks if the value is in the category of false or true_

| Falsy     | Truthy   |
| --------- | -------- |
| ""        | "foo"    |
| 0 , -0    | 23       |
| null      | {a:1}    |
| NaN       | [1, 3]   |
| false     | true     |
| undefined | function |
|           | \*\*\*   |

## coercion

- template strings do coercion dynamically
- all programming languages have type conversions, because it is absolutely necessary.
