import { StrongType } from "../strong-type/strong";

/**
 * Validation-specific string type definitions for strings that require specific validation rules.
 */

/**
 * A string representing a valid ISBN.
 * @example
 * const isbn: ISBNString = "978-3-16-148410-0";
 * // Must be a valid ISBN-10 or ISBN-13
 */
export type ISBNString = StrongType<"ISBNString", string>;

/**
 * A string representing a valid ISBN-13.
 * @example
 * const isbn13: ISBN13String = "978-3-16-148410-0";
 * // Must be a valid ISBN-13 with proper checksum
 */
export type ISBN13String = StrongType<"ISBN13String", string>;

/**
 * A string representing a valid ISBN-10.
 * @example
 * const isbn10: ISBN10String = "0-7475-3269-9";
 * // Must be a valid ISBN-10 with proper checksum
 */
export type ISBN10String = StrongType<"ISBN10String", string>;

/**
 * A string representing a valid credit card number.
 * @example
 * const card: CreditCardString = "4111 1111 1111 1111";
 * // Must be a valid credit card number with proper checksum
 */
export type CreditCardString = StrongType<"CreditCardString", string>;

/**
 * A string representing a valid postal code format.
 * @example
 * const postal: PostalCodeString = "12345";
 * // Format varies by country
 */
export type PostalCodeString = StrongType<"PostalCodeString", string>;

/**
 * A string representing a valid phone number.
 * @example
 * const phone: PhoneNumberString = "+1 (555) 123-4567";
 * // Must be a valid phone number format
 */
export type PhoneNumberString = StrongType<"PhoneNumberString", string>;

/**
 * A string representing a valid latitude value.
 * @example
 * const lat: LatitudeString = "45.5231";
 * // Must be between -90 and 90 degrees
 */
export type LatitudeString = StrongType<"LatitudeString", string>;

/**
 * A string representing a valid longitude value.
 * @example
 * const lon: LongitudeString = "-122.6765";
 * // Must be between -180 and 180 degrees
 */
export type LongitudeString = StrongType<"LongitudeString", string>;

/**
 * A string representing combined latitude and longitude.
 * @example
 * const coords: GeoCoordinateString = "45.5231,-122.6765";
 * // Format: "latitude,longitude"
 */
export type GeoCoordinateString = StrongType<"GeoCoordinateString", string>; 
