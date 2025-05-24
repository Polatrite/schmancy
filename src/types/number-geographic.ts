import { StrongType } from "../strong-type/strong";

// =============
// Geographic Types
// =============

/**
 * A number representing latitude.
 * @example
 * const lat: LatitudeNumber = 40.7128;
 * // Must be >= -90 and <= 90
 */
export type LatitudeNumber = StrongType<"LatitudeNumber", number>;

/**
 * A number representing longitude.
 * @example
 * const lon: LongitudeNumber = -74.0060;
 * // Must be >= -180 and <= 180
 */
export type LongitudeNumber = StrongType<"LongitudeNumber", number>;

/**
 * A number representing altitude in meters.
 * @example
 * const alt: AltitudeNumber = 1000;
 * // Must be >= 0
 */
export type AltitudeNumber = StrongType<"AltitudeNumber", number>;

/**
 * A number representing depth in meters.
 * @example
 * const depth: DepthNumber = 1000;
 * // Must be >= 0
 */
export type DepthNumber = StrongType<"DepthNumber", number>;

/**
 * A number representing distance in meters.
 * @example
 * const distance: DistanceNumber = 5000;
 * // Must be >= 0
 */
export type DistanceNumber = StrongType<"DistanceNumber", number>;

/**
 * A number representing speed in meters per second.
 * @example
 * const speed: SpeedNumber = 10;
 * // Must be >= 0
 */
export type SpeedNumber = StrongType<"SpeedNumber", number>;

/**
 * A number representing bearing in degrees.
 * @example
 * const bearing: BearingNumber = 45;
 * // Must be >= 0 and < 360
 */
export type BearingNumber = StrongType<"BearingNumber", number>;

/**
 * A number representing elevation in meters.
 * @example
 * const elevation: ElevationNumber = 8848;
 * // Must be >= 0
 */
export type ElevationNumber = StrongType<"ElevationNumber", number>;

/**
 * A number representing sea level in meters.
 * @example
 * const seaLevel: SeaLevelNumber = 0;
 * // Typically 0, but can vary
 */
export type SeaLevelNumber = StrongType<"SeaLevelNumber", number>;

/**
 * A number representing timezone offset in minutes.
 * @example
 * const tzOffset: TimezoneOffsetNumber = -240;
 * // Must be >= -720 and <= 720
 */
export type TimezoneOffsetNumber = StrongType<"TimezoneOffsetNumber", number>; 
