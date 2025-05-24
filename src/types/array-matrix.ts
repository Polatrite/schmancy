import { WeakType } from "../weak-type/weak";

// =============
// Matrix Types
// =============

/**
 * A two-dimensional array structure.
 * @example
 * const matrix: Matrix<number> = [
 *   [1, 2, 3],
 *   [4, 5, 6]
 * ];
 * // Useful for representing grids, images, game boards, or 2D data structures
 */
export type Matrix<T> = WeakType<"Matrix", Array<Array<T>>>;

/**
 * A three-dimensional array structure.
 * @example
 * const cube: Cube<number> = [
 *   [[1, 2], [3, 4]],
 *   [[5, 6], [7, 8]]
 * ];
 * // Useful for 3D data structures, voxel data, 3D games, or volumetric data
 */
export type Cube<T> = WeakType<"Cube", Array<Array<Array<T>>>>;

/**
 * An array split into fixed-size chunks.
 * @example
 * const chunked: ChunkedArray<number> = [[1, 2], [3, 4]];
 * // Data divided into manageable chunks
 * // Useful for pagination, parallel processing, or large data management
 */
export type ChunkedArray<T> = WeakType<"ChunkedArray", Array<Array<T>>>; 
