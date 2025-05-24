import { WeakType } from "../weak-type/weak";

// =============
// Basic Number Types
// =============

/**
 * A non-negative number (zero or positive).
 * @example
 * const count: NonNegativeNumber = 42;
 * // Must be >= 0
 */
export type NonNegativeNumber = WeakType<"NonNegativeNumber", number>;

/**
 * A positive number (greater than zero).
 * @example
 * const positive: PositiveNumber = 42;
 * // Must be > 0
 */
export type PositiveNumber = WeakType<"PositiveNumber", number>;

/**
 * A negative number (less than zero).
 * @example
 * const negative: NegativeNumber = -42;
 * // Must be < 0
 */
export type NegativeNumber = WeakType<"NegativeNumber", number>;

/**
 * A number representing a percentage.
 * @example
 * const percentage: PercentageNumber = 0.75;
 */
export type PercentageNumber = WeakType<"PercentageNumber", number>;

/**
 * A number representing a percentage displayed in a UI.
 * @example
 * const percent: DisplayPercentNumber = 75;
 */
export type DisplayPercentNumber = WeakType<"DisplayPercentNumber", number>; 
