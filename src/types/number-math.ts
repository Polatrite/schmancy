import { StrongType } from "../strong-type/strong";
import { WeakType } from "../weak-type/weak";

// =============
// Mathematical Types
// =============

/**
 * A number representing an angle in degrees.
 * @example
 * const angle: DegreeNumber = 45;
 * // Must be >= 0 and < 360
 */
export type DegreeNumber = StrongType<"DegreeNumber", number>;

/**
 * A number representing an angle in radians.
 * @example
 * const angle: RadianNumber = Math.PI;
 * // Must be >= 0 and < 2π
 */
export type RadianNumber = StrongType<"RadianNumber", number>;

/**
 * A number representing a probability.
 * @example
 * const prob: ProbabilityNumber = 0.75;
 * // Must be >= 0 and <= 1
 */
export type ProbabilityNumber = StrongType<"ProbabilityNumber", number>;

/**
 * A number representing a ratio.
 * @example
 * const ratio: RatioNumber = 1.5;
 * // Must be > 0
 */
export type RatioNumber = WeakType<"RatioNumber", number>;

/**
 * A number representing a factor.
 * @example
 * const factor: FactorNumber = 2;
 * // Must be > 0
 */
export type FactorNumber = WeakType<"FactorNumber", number>; 
