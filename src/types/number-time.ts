import { WeakType } from "../weak-type/weak";

// =============
// Time and Duration Types
// =============

/**
 * A number representing milliseconds.
 * @example
 * const ms: MillisecondNumber = 500;
 * // Must be >= 0
 */
export type MillisecondNumber = WeakType<"MillisecondNumber", number>;

/**
 * A number representing seconds.
 * @example
 * const sec: SecondNumber = 30;
 * // Must be >= 0
 */
export type SecondNumber = WeakType<"SecondNumber", number>;

/**
 * A number representing minutes.
 * @example
 * const min: MinuteNumber = 45;
 * // Must be >= 0
 */
export type MinuteNumber = WeakType<"MinuteNumber", number>;

/**
 * A number representing hours.
 * @example
 * const hour: HourNumber = 12;
 * // Must be >= 0 and < 24
 */
export type HourNumber = WeakType<"HourNumber", number>;

/**
 * A number representing days.
 * @example
 * const day: DayNumber = 15;
 * // Must be >= 1 and <= 31
 */
export type DayNumber = WeakType<"DayNumber", number>;

/**
 * A number representing a Unix timestamp (seconds since epoch).
 * @example
 * const timestamp: UnixTimestampNumber = 1678901234;
 * // Must be >= 0
 */
export type UnixTimestampNumber = WeakType<"UnixTimestampNumber", number>;

/**
 * A number representing a month.
 * @example
 * const month: MonthNumber = 3;
 * // Must be >= 1 and <= 12
 */
export type MonthNumber = WeakType<"MonthNumber", number>;

/**
 * A number representing a day of the month.
 * @example
 * const dayOfMonth: DayOfMonthNumber = 15;
 * // Must be >= 1 and <= 31
 */
export type DayOfMonthNumber = WeakType<"DayOfMonthNumber", number>;

/**
 * A number representing a day of the week.
 * @example
 * const dayOfWeek: DayOfWeekNumber = 1;
 * // Must be >= 0 and <= 6 (0 = Sunday)
 */
export type DayOfWeekNumber = WeakType<"DayOfWeekNumber", number>;

/**
 * A number representing a year.
 * @example
 * const year: YearNumber = 2024;
 * // Must be >= 1970
 */
export type YearNumber = WeakType<"YearNumber", number>; 
