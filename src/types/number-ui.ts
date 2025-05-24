import { WeakType } from "../weak-type/weak";

// =============
// UI Types
// =============

/**
 * A number representing opacity.
 * @example
 * const opacity: OpacityNumber = 0.5;
 * // Must be >= 0 and <= 1
 */
export type OpacityNumber = WeakType<"OpacityNumber", number>;

/**
 * A number representing a scale factor.
 * @example
 * const scale: ScaleNumber = 1.5;
 * // Must be > 0
 */
export type ScaleNumber = WeakType<"ScaleNumber", number>;

/**
 * A number representing a rotation angle in degrees.
 * @example
 * const rotation: RotationNumber = 45;
 * // Must be >= 0 and < 360
 */
export type RotationNumber = WeakType<"RotationNumber", number>;

/**
 * A number representing a z-index.
 * @example
 * const zIndex: ZIndexNumber = 1;
 * // Can be any integer
 */
export type ZIndexNumber = WeakType<"ZIndexNumber", number>;

/**
 * A number representing a duration in milliseconds.
 * @example
 * const duration: DurationNumber = 300;
 * // Must be >= 0
 */
export type DurationNumber = WeakType<"DurationNumber", number>;

/**
 * A number representing a delay in milliseconds.
 * @example
 * const delay: DelayNumber = 100;
 * // Must be >= 0
 */
export type DelayNumber = WeakType<"DelayNumber", number>;

/**
 * A number representing a border radius in pixels.
 * @example
 * const radius: BorderRadiusNumber = 4;
 * // Must be >= 0
 */
export type BorderRadiusNumber = WeakType<"BorderRadiusNumber", number>;

/**
 * A number representing a border width in pixels.
 * @example
 * const width: BorderWidthNumber = 1;
 * // Must be >= 0
 */
export type BorderWidthNumber = WeakType<"BorderWidthNumber", number>;

/**
 * A number representing a shadow blur radius in pixels.
 * @example
 * const blur: ShadowBlurNumber = 10;
 * // Must be >= 0
 */
export type ShadowBlurNumber = WeakType<"ShadowBlurNumber", number>;

/**
 * A number representing a shadow spread radius in pixels.
 * @example
 * const spread: ShadowSpreadNumber = 2;
 * // Can be any real number
 */
export type ShadowSpreadNumber = WeakType<"ShadowSpreadNumber", number>; 
