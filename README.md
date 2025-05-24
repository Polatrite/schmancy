# Schmancy

This is a fancy-schmancy library for enforcing Semantic Types on your TypeScript codebase. With zero dependencies and aggressive tree shaking support, schmancy allows you to use as much or as little of the library as you'd prefer.

Have you ever come across a parameter like `delay: number` with absolutely no documentation? What units is this delay using? Milliseconds? Seconds? Minutes? Several minutes of code spelunking later you have your answer: this is used in a `setTimeout()` and represents milliseconds.

What if you could just have the answer immediately, enforced with TypeScript's typing system, and easily readable in your editor's tooltip information? Schmancy aims to provide that functionality for your entire codebase.



# Built-in types

Schmancy provides over a hundred built-in semantic types that you can leverage for all primitives and several advanced types. We recommend you **start simple** and choose a few of the most useful types for your codebase. Here are some examples:

- You work with payments and transactions and could leverage `CurrencyNumber` or `DiscountRateNumber`
- You work with dates and calendars and can leverage `UnixTimestampNumber`, `DayOfWeekNumber`, or `MillisecondNumber`
- You perform realtime data processing and can leverage array datatypes like `CircularBuffer`, `PriorityQueue`, and `ChunkedArray`
- You work with complex UI elements and need the clarity of `VisibilityState`, `ReadOnlyState`, `ISODateString` and `MoneyString`

Browse the full list of types in our Documentation.

# Concepts

Schmancy leverages both `StrongType`s and `WeakType`s. The rules are simple:

- Assigning to a `StrongType` requires a function call to type the parameter: `strongCast<T>(value: <parent type of T>)`, otherwise there will be a compiler error.
- Assigning to a `WeakType` does not require a call and will accept the parent type of T, but will not allow mixing different `WeakType`s without a function call: `weakCast<T>(value: <a different WeakType>)`

The built-in types utilize `WeakType` or `StrongType` based on whether or not the type is generally interchangable with its parent type. For example, `PositiveInteger` is a weak type because you will generally assign a `number` to a `PositiveInteger`. On the other hand, `RadianNumber` is a strong type because you generally want to constrain radians in relation to `Math.PI`.


# Creating your own types

You can also create your own types.

`                                     type name  parent type`
`                                         V           V     `
`export type MyUniqueId = StrongType<"MyUniqueId", number>; `
`export type MyProductId = WeakType<"MyProductId", string>; `

Don't forget to use `strongCast()` or `weakCast()` for assignment, when necessary.


# Project roadmap

1. Create custom type validators

Allow developers to create custom type validators that can enforce primitives to adhere to a specific schema. Something similar to Zod 4 (https://zod.dev/basics) feels like a good approach for simplicity vs. functionality. This library can be used alongside a library like Zod or joi, but a stronger type-safe approach is preferable.

2. Add more common types

We want to hear from you on missing types. Here is a light summary of our rubric for adding new types to the core `schmancy` library:

- ✅ Global
- ✅ Industry/domain specific, when the industry is large enough
- ✅ Continent/large region specific
- ❌ Technology framework/library specific (we aim to be completely framework agnostic)
- ❌ Company/business specific
- ❌ Country specific
- ❌ Personal/team specific
- ❌ Non-English language specific (use the English translation)

We may add additional namespaces at some point in the future that can allow for more specific types, but are opt-in by installing adjacent micro-packages.


# Project philosophy

The following are some general notes on the project's philosophy. Feature requests that are in-scope will be considered, but feature requests that are out-of-scope will be closed.

What is schmancy?

- Compile-time safety with semantic types
- Community-defined and user-defined custom types
- Ultra lightweight and performance, especially for value reads
- (Future) Type validation for primitives (string, number, bigint)

What ISN'T schmancy?

- Schema validation/transformation for primitives or advanced types
- ORM or database modeller/layer
- REST/GraphQL modeller/layer
- AST transformer
- Advanced binary typing or transformation
