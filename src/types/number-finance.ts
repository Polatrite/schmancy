import { StrongType } from "../strong-type/strong";

// =============
// Financial Types
// =============

/**
 * A number representing a currency amount.
 * @example
 * const amount: CurrencyNumber = 99.99;
 * // Must be >= 0
 */
export type CurrencyNumber = StrongType<"CurrencyNumber", number>;

/**
 * A number representing an interest rate.
 * @example
 * const rate: InterestRateNumber = 0.05;
 * // Must be >= 0 and <= 1
 */
export type InterestRateNumber = StrongType<"InterestRateNumber", number>;

/**
 * A number representing a price.
 * @example
 * const price: PriceNumber = 29.99;
 * // Must be >= 0
 */
export type PriceNumber = StrongType<"PriceNumber", number>;

/**
 * A number representing a discount rate.
 * @example
 * const discount: DiscountRateNumber = 0.15;
 * // Must be >= 0 and <= 1
 */
export type DiscountRateNumber = StrongType<"DiscountRateNumber", number>;

/**
 * A number representing a tax rate.
 * @example
 * const tax: TaxRateNumber = 0.20;
 * // Must be >= 0 and <= 1
 */
export type TaxRateNumber = StrongType<"TaxRateNumber", number>;

/**
 * A number representing a strike price.
 * @example
 * const strike: StrikePriceNumber = 100;
 * // Must be > 0
 */
export type StrikePriceNumber = StrongType<"StrikePriceNumber", number>;

/**
 * A number representing a delta value.
 * @example
 * const delta: DeltaNumber = 0.5;
 * // Must be >= -1 and <= 1
 */
export type DeltaNumber = StrongType<"DeltaNumber", number>;

/**
 * A number representing a beta value.
 * @example
 * const beta: BetaNumber = 1.2;
 * // Can be any real number
 */
export type BetaNumber = StrongType<"BetaNumber", number>;

/**
 * A number representing a volatility value.
 * @example
 * const volatility: VolatilityNumber = 0.25;
 * // Must be >= 0
 */
export type VolatilityNumber = StrongType<"VolatilityNumber", number>;

/**
 * A number representing a yield value.
 * @example
 * const yield: YieldNumber = 0.03;
 * // Must be >= 0
 */
export type YieldNumber = StrongType<"YieldNumber", number>; 
