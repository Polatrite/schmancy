import { WeakType } from "../weak-type/weak";

// =============
// Statistical Types
// =============

/**
 * A number representing a Z-score.
 * @example
 * const zScore: ZScoreNumber = 1.96;
 * // Typically between -3 and 3
 */
export type ZScoreNumber = WeakType<"ZScoreNumber", number>;

/**
 * A number representing a T-score.
 * @example
 * const tScore: TScoreNumber = 2.5;
 * // Typically between -4 and 4
 */
export type TScoreNumber = WeakType<"TScoreNumber", number>;

/**
 * A number representing a Chi-square value.
 * @example
 * const chiSquare: ChiSquareNumber = 3.84;
 * // Must be >= 0
 */
export type ChiSquareNumber = WeakType<"ChiSquareNumber", number>;

/**
 * A number representing an F-score.
 * @example
 * const fScore: FScoreNumber = 2.5;
 * // Must be >= 0
 */
export type FScoreNumber = WeakType<"FScoreNumber", number>;

/**
 * A number representing a p-value.
 * @example
 * const pValue: PValueNumber = 0.05;
 * // Must be >= 0 and <= 1
 */
export type PValueNumber = WeakType<"PValueNumber", number>;

/**
 * A number representing a correlation coefficient.
 * @example
 * const correlation: CorrelationNumber = 0.75;
 * // Must be >= -1 and <= 1
 */
export type CorrelationNumber = WeakType<"CorrelationNumber", number>;

/**
 * A number representing a confidence level.
 * @example
 * const confidence: ConfidenceLevelNumber = 0.95;
 * // Must be > 0 and < 1
 */
export type ConfidenceLevelNumber = WeakType<"ConfidenceLevelNumber", number>;

/**
 * A number representing a standard deviation.
 * @example
 * const stdDev: StandardDeviationNumber = 2.5;
 * // Must be >= 0
 */
export type StandardDeviationNumber = WeakType<"StandardDeviationNumber", number>;

/**
 * A number representing a variance.
 * @example
 * const variance: VarianceNumber = 6.25;
 * // Must be >= 0
 */
export type VarianceNumber = WeakType<"VarianceNumber", number>;

/**
 * A number representing a mean value.
 * @example
 * const mean: MeanNumber = 42.5;
 * // Can be any real number
 */
export type MeanNumber = WeakType<"MeanNumber", number>; 
