import { WeakType } from "../weak-type/weak";

// =============
// Collection Types
// =============

/**
 * A Set that maintains insertion order of unique elements.
 * @example
 * const orderedSet: OrderedSet<string> = new Set(['a', 'b', 'c']);
 * // Elements are unique and maintain insertion order
 * // Useful for maintaining unique items while preserving their sequence
 */
export type OrderedSet<T> = WeakType<"OrderedSet", Set<T>>;

/**
 * A Set where element order is not guaranteed.
 * @example
 * const unorderedSet: UnorderedSet<string> = new Set(['a', 'b', 'c']);
 * // Elements are unique but order is not preserved
 * // Useful for simple uniqueness checks without order requirements
 */
export type UnorderedSet<T> = WeakType<"UnorderedSet", Set<T>>;

/**
 * A Map that maintains insertion order of key-value pairs.
 * @example
 * const orderedMap: OrderedMap<string, number> = new Map([
 *   ['a', 1],
 *   ['b', 2]
 * ]);
 * // Key-value pairs maintain insertion order
 * // Useful for maintaining key-value relationships with order
 */
export type OrderedMap<K, V> = WeakType<"OrderedMap", Map<K, V>>;

/**
 * A Map where key-value pair order is not guaranteed.
 * @example
 * const unorderedMap: UnorderedMap<string, number> = new Map([
 *   ['a', 1],
 *   ['b', 2]
 * ]);
 * // Key-value pairs may not maintain order
 * // Useful for simple key-value storage when order doesn't matter
 */
export type UnorderedMap<K, V> = WeakType<"UnorderedMap", Map<K, V>>;

/**
 * An array that only allows adding elements, never removing.
 * @example
 * const appendOnly: AppendOnlyArray<number> = [1, 2, 3];
 * // Can only add new elements, never remove
 * // Useful for audit logs, immutable history, or append-only databases
 */
export type AppendOnlyArray<T> = WeakType<"AppendOnlyArray", Array<T>>;

/**
 * A read-only array that cannot be modified.
 * @example
 * const immutable: ImmutableArray<number> = [1, 2, 3];
 * // Cannot be modified after creation
 * // Useful for constant data, thread safety, or functional programming
 */
export type ImmutableArray<T> = WeakType<"ImmutableArray", Array<T>>; 
