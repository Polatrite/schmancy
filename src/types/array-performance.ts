import { WeakType } from "../weak-type/weak";

// =============
// Performance Types
// =============

/**
 * A memory-optimized array implementation.
 * @example
 * const compact: CompactArray<number> = [1, 2, 3];
 * // Uses minimal memory while maintaining functionality
 * // Useful for large datasets or memory-constrained environments
 */
export type CompactArray<T> = WeakType<"CompactArray", Array<T>>;

/**
 * An array with no padding between elements.
 * @example
 * const packed: PackedArray<number> = [1, 2, 3];
 * // Memory-efficient storage with no gaps
 * // Useful for binary data, memory-mapped files, or low-level data structures
 */
export type PackedArray<T> = WeakType<"PackedArray", Array<T>>;

/**
 * An array optimized for lookup operations.
 * @example
 * const lookup: LookupArray<{id: number, data: string}> = [
 *   {id: 1, data: 'a'}
 * ];
 * // Optimized for frequent access by index
 * // Useful for caches, lookup tables, or frequently accessed data
 */
export type LookupArray<T> = WeakType<"LookupArray", Array<T>>;

/**
 * An array that caches computed results.
 * @example
 * const cached: CachedArray<number> = [1, 2, 3];
 * // Results of expensive operations are cached
 * // Useful for performance optimization or memoization
 */
export type CachedArray<T> = WeakType<"CachedArray", Array<T>>;

/**
 * An array where elements are computed only when accessed.
 * @example
 * const lazy: LazyArray<number> = [1, 2, 3];
 * // Elements are computed on-demand
 * // Useful for infinite sequences, expensive computations, or lazy evaluation
 */
export type LazyArray<T> = WeakType<"LazyArray", Array<T>>; 
