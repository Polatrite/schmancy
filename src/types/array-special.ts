import { WeakType } from "../weak-type/weak";

// =============
// Special Purpose Types
// =============

/**
 * An array that notifies observers of changes.
 * @example
 * const observable: ObservableArray<number> = [1, 2, 3];
 * // Emits events when modified
 * // Useful for reactive programming, UI updates, or state management
 */
export type ObservableArray<T> = WeakType<"ObservableArray", Array<T>>;

/**
 * An array that validates elements on insertion.
 * @example
 * const validated: ValidatedArray<number> = [1, 2, 3];
 * // Elements must pass validation before being added
 * // Useful for type safety, data integrity, or input validation
 */
export type ValidatedArray<T> = WeakType<"ValidatedArray", Array<T>>;

/**
 * An array that only contains elements matching a filter.
 * @example
 * const filtered: FilteredArray<number> = [2, 4, 6];
 * // Only even numbers allowed
 * // Useful for maintaining data constraints or filtered views
 */
export type FilteredArray<T> = WeakType<"FilteredArray", Array<T>>;

/**
 * An array where elements are transformed on access.
 * @example
 * const transformed: TransformedArray<number, string> = [1, 2, 3];
 * // Numbers are converted to strings when accessed
 * // Useful for data transformation, formatting, or view models
 */
export type TransformedArray<T, U> = WeakType<"TransformedArray", Array<T>>; 
