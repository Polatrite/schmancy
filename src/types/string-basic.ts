import { WeakType } from "../weak-type/weak";

/**
 * Basic string type definitions for common string formats and constraints.
 */

/**
 * A string that cannot be empty.
 * @example
 * const name: NonEmptyString = "John";
 * // Must have at least one character
 */
export type NonEmptyString = WeakType<"NonEmptyString", string>;

/**
 * A string with no leading or trailing whitespace.
 * @example
 * const trimmed: TrimmedString = "hello";
 * // "  hello  " would be invalid
 */
export type TrimmedString = WeakType<"TrimmedString", string>;

/**
 * A string in lowercase format.
 * @example
 * const lower: LowercaseString = "hello world";
 * // All characters must be lowercase
 */
export type LowercaseString = WeakType<"LowercaseString", string>;

/**
 * A string in uppercase format.
 * @example
 * const upper: UppercaseString = "HELLO WORLD";
 * // All characters must be uppercase
 */
export type UppercaseString = WeakType<"UppercaseString", string>;

/**
 * A string with its first letter capitalized.
 * @example
 * const capped: CapitalizedString = "Hello world";
 * // First character must be uppercase, rest can be any case
 */
export type CapitalizedString = WeakType<"CapitalizedString", string>;

/**
 * A string containing only alphabetic characters.
 * @example
 * const alpha: AlphaString = "HelloWorld";
 * // Must contain only letters (a-z, A-Z)
 */
export type AlphaString = WeakType<"AlphaString", string>;

/**
 * A string containing only numeric characters.
 * @example
 * const numeric: NumericString = "12345";
 * // Must contain only digits (0-9)
 */
export type NumericString = WeakType<"NumericString", string>;

/**
 * A string containing only alphanumeric characters.
 * @example
 * const alphanumeric: AlphanumericString = "Hello123";
 * // Must contain only letters and digits
 */
export type AlphanumericString = WeakType<"AlphanumericString", string>;

/**
 * A string with an exact length of N characters.
 * @example
 * const fixed: FixedLengthString<5> = "hello";
 * // Must be exactly 5 characters long
 */
export type FixedLengthString<N extends number> = WeakType<`FixedLengthString<${N}>`, string>;

/**
 * A string with a maximum length of N characters.
 * @example
 * const max: MaxLengthString<10> = "hello";
 * // Must be 10 characters or less
 */
export type MaxLengthString<N extends number> = WeakType<`MaxLengthString<${N}>`, string>;

/**
 * A string with a minimum length of N characters.
 * @example
 * const min: MinLengthString<3> = "hello";
 * // Must be at least 3 characters long
 */
export type MinLengthString<N extends number> = WeakType<`MinLengthString<${N}>`, string>;

/**
 * A string with length between Min and Max characters.
 * @example
 * const bounded: BoundedString<3, 10> = "hello";
 * // Must be between 3 and 10 characters
 */
export type BoundedString<Min extends number, Max extends number> = WeakType<`BoundedString<${Min},${Max}>`, string>; 
