/**
 * Main entry point for schmancy - Semantic Type System
 * 
 * For better tree-shaking, import directly from subpaths:
 * 
 * @example
 * // Import specific types
 * import { OrderedArray } from 'schmancy/array';
 * import { VisibilityState } from 'schmancy/boolean';
 * import { PercentageNumber } from 'schmancy/number';
 * import { EmailString } from 'schmancy/string';
 * 
 * // Or import all types from a category
 * import * as array from 'schmancy/array';
 * import * as boolean from 'schmancy/boolean';
 * import * as number from 'schmancy/number';
 * import * as string from 'schmancy/string';
 */

// Re-export the base type systems
export type { WeakType } from './weak-type/weak';
export type { StrongType } from './strong-type/strong';

// Re-export all types from their respective modules
export * from './types/array';
export * from './types/boolean';
export * from './types/number';
export * from './types/string';

export * from './weak-type/weak';
export * from './strong-type/strong';
export * from './utils/is-type';

