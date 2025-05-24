import { WeakType } from "../weak-type/weak";

// =============
// Data Structure Types
// =============

/**
 * A Last-In-First-Out (LIFO) data structure.
 * @example
 * const stack: Stack<number> = [];
 * stack.push(1); // [1]
 * stack.push(2); // [1, 2]
 * stack.pop();   // returns 2, stack is now [1]
 * // Useful for function call stacks, undo operations, or depth-first traversal
 */
export type Stack<T> = WeakType<"Stack", Array<T>>;

/**
 * A First-In-First-Out (FIFO) data structure.
 * @example
 * const queue: Queue<number> = [];
 * queue.push(1); // [1]
 * queue.push(2); // [1, 2]
 * queue.shift(); // returns 1, queue is now [2]
 * // Useful for task scheduling, breadth-first traversal, or message queues
 */
export type Queue<T> = WeakType<"Queue", Array<T>>;

/**
 * A circular buffer that wraps around when reaching its end.
 * @example
 * const circular: CircularBuffer<number> = [];
 * // Similar to RingBuffer but explicitly handles wrapping
 * // Useful for continuous data streams or cyclic operations
 */
export type CircularBuffer<T> = WeakType<"CircularBuffer", Array<T>>;

/**
 * A double-ended queue allowing insertion and removal from both ends.
 * @example
 * const deque: Deque<number> = [];
 * deque.push(1);    // [1]
 * deque.unshift(2); // [2, 1]
 * deque.pop();      // returns 1
 * // Useful for implementing both stacks and queues, or sliding window algorithms
 */
export type Deque<T> = WeakType<"Deque", Array<T>>;

/**
 * An array that maintains its elements in sorted order.
 * @example
 * const sorted: SortedArray<number> = [1, 2, 3];
 * // Elements are always kept in ascending order
 * // Useful for binary search, range queries, or maintaining ordered data
 */
export type SortedArray<T> = WeakType<"SortedArray", Array<T>>;

/**
 * An array where elements are ordered by priority.
 * @example
 * const pq: PriorityQueue<{value: string, priority: number}> = [];
 * // Elements are ordered by priority value
 * // Useful for task scheduling, event handling, or A* pathfinding
 */
export type PriorityQueue<T> = WeakType<"PriorityQueue", Array<T>>;

/**
 * A buffer that maintains the most recent N elements.
 * @example
 * const rolling: RollingBuffer<number> = [1, 2, 3];
 * // Similar to SlidingWindow but optimized for append operations
 * // Useful for recent history, caching, or maintaining a fixed-size buffer
 */
export type RollingBuffer<T> = WeakType<"RollingBuffer", Array<T>>;

/**
 * An array of data points ordered by time.
 * @example
 * const timeSeries: TimeSeries<{timestamp: Date, value: number}> = [
 *   {timestamp: new Date(), value: 42}
 * ];
 * // Useful for time-series data, metrics, logging, or temporal analysis
 */
export type TimeSeries<T> = WeakType<"TimeSeries", Array<T>>; 
