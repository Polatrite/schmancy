import { WeakType } from "../weak-type/weak";

// =============
// Basic Array Types
// =============

/**
 * An array that maintains insertion order of elements.
 * @example
 * const ordered: OrderedArray<number> = [1, 2, 3];
 * // Elements will always be accessed in the order they were added
 * // Useful for maintaining sequence or history of operations
 */
export type OrderedArray<T> = WeakType<"OrderedArray", Array<T>>;

/**
 * An array where element order is not guaranteed or relevant.
 * @example
 * const unordered: UnorderedArray<number> = [3, 1, 2];
 * // Order of elements may change during operations
 * // Useful when order doesn't matter and performance is priority
 */
export type UnorderedArray<T> = WeakType<"UnorderedArray", Array<T>>;

/**
 * An array that must be fully populated with no gaps.
 * @example
 * const dense: DenseArray<number> = [1, 2, 3];
 * // No undefined values allowed
 * // Useful for memory-efficient storage or when all positions must be valid
 */
export type DenseArray<T> = WeakType<"DenseArray", Array<T>>;

/**
 * An array that allows undefined values at any position.
 * @example
 * const sparse: SparseArray<number> = [1, undefined, 3];
 * // Useful for representing sparse data, optional values, or memory-efficient storage
 */
export type SparseArray<T> = WeakType<"SparseArray", Array<T | undefined>>;

/**
 * An array with a fixed length that cannot be changed.
 * @example
 * const fixed: FixedArray<number, 3> = [1, 2, 3];
 * // Length is fixed at 3, cannot be resized
 * // Useful for memory-constrained applications or fixed-size data structures
 */
export type FixedArray<T, N extends number> = WeakType<"FixedArray", Array<T>>;

/**
 * A fixed-size ordered collection of elements.
 * @example
 * const tuple: Tuple<string, 2> = ['x', 'y'];
 * // Fixed length of 2 elements
 * // Useful for representing coordinates, key-value pairs, or fixed-size records
 */
export type Tuple<T, N extends number> = WeakType<"Tuple", Array<T>>; 
