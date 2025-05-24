import { StrongType } from "../strong-type/strong";

/**
 * Financial string type definitions for strings that represent financial data.
 */

/**
 * A string representing a valid currency code (ISO 4217).
 * @example
 * const currency: CurrencyString = "USD";
 * // Three-letter currency code
 */
export type CurrencyString = StrongType<"CurrencyString", string>;

/**
 * A string representing a formatted money value.
 * @example
 * const money: MoneyString = "$1,234.56";
 * // Includes currency symbol and proper formatting
 */
export type MoneyString = StrongType<"MoneyString", string>;

/**
 * A string representing a valid International Bank Account Number.
 * @example
 * const iban: IBANString = "GB29NWBK60161331926819";
 * // Country-specific format with checksum
 */
export type IBANString = StrongType<"IBANString", string>;

/**
 * A string representing a valid SWIFT/BIC code.
 * @example
 * const swift: SWIFTString = "DEUTDEBBXXX";
 * // 8 or 11 character bank identifier code
 */
export type SWIFTString = StrongType<"SWIFTString", string>; 
