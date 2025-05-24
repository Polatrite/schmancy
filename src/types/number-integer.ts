import { WeakType } from "../weak-type/weak";

// =============
// Integer Types
// =============

/**
 * A non-negative integer (zero or positive).
 * @example
 * const count: NonNegativeInteger = 42;
 * // Must be a non-negative integer
 */
export type NonNegativeInteger = WeakType<"NonNegativeInteger", number>;

/**
 * A positive integer (greater than zero).
 * @example
 * const positive: PositiveInteger = 42;
 * // Must be a positive integer
 */
export type PositiveInteger = WeakType<"PositiveInteger", number>;

/**
 * A negative integer (less than zero).
 * @example
 * const negative: NegativeInteger = -42;
 * // Must be a negative integer
 */
export type NegativeInteger = WeakType<"NegativeInteger", number>;

/**
 * A number representing a natural number (positive integer).
 * @example
 * const natural: NaturalNumber = 42;
 * // Must be a positive integer
 */
export type NaturalNumber = WeakType<"NaturalNumber", number>;

/**
 * A number representing a whole number (non-negative integer).
 * @example
 * const whole: WholeNumber = 42;
 * // Must be a non-negative integer
 */
export type WholeNumber = WeakType<"WholeNumber", number>; 
