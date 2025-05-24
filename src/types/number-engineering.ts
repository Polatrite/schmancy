import { StrongType } from "../strong-type/strong";

// =============
// Engineering Types
// =============

/**
 * A number representing voltage in volts.
 * @example
 * const voltage: VoltageNumber = 220;
 * // Can be positive or negative
 */
export type VoltageNumber = StrongType<"VoltageNumber", number>;

/**
 * A number representing current in amperes.
 * @example
 * const current: CurrentNumber = 5;
 * // Can be positive or negative
 */
export type CurrentNumber = StrongType<"CurrentNumber", number>;

/**
 * A number representing resistance in ohms.
 * @example
 * const resistance: ResistanceNumber = 1000;
 * // Must be > 0
 */
export type ResistanceNumber = StrongType<"ResistanceNumber", number>;

/**
 * A number representing power in watts.
 * @example
 * const power: PowerNumber = 1000;
 * // Must be >= 0
 */
export type PowerNumber = StrongType<"PowerNumber", number>;

/**
 * A number representing frequency in hertz.
 * @example
 * const frequency: FrequencyNumber = 60;
 * // Must be >= 0
 */
export type FrequencyNumber = StrongType<"FrequencyNumber", number>;

/**
 * A number representing capacitance in farads.
 * @example
 * const capacitance: CapacitanceNumber = 0.000001;
 * // Must be > 0
 */
export type CapacitanceNumber = StrongType<"CapacitanceNumber", number>;

/**
 * A number representing inductance in henries.
 * @example
 * const inductance: InductanceNumber = 0.001;
 * // Must be > 0
 */
export type InductanceNumber = StrongType<"InductanceNumber", number>;

/**
 * A number representing temperature in kelvin.
 * @example
 * const temp: TemperatureNumber = 293.15;
 * // Must be >= 0
 */
export type TemperatureNumber = StrongType<"TemperatureNumber", number>;

/**
 * A number representing pressure in pascals.
 * @example
 * const pressure: PressureNumber = 101325;
 * // Must be >= 0
 */
export type PressureNumber = StrongType<"PressureNumber", number>;

/**
 * A number representing force in newtons.
 * @example
 * const force: ForceNumber = 9.81;
 * // Can be positive or negative
 */
export type ForceNumber = StrongType<"ForceNumber", number>; 
