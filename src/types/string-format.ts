import { StrongType } from "../strong-type/strong";
import { WeakType } from "../weak-type/weak";

/**
 * Format-specific string type definitions for common string formats.
 */

/**
 * A string representing time in HH:MM:SS format.
 * @example
 * const time: TimeString = "14:30:00";
 * // 24-hour format with seconds
 */
export type TimeString = WeakType<"TimeString", string>;

/**
 * A string representing combined date and time.
 * @example
 * const datetime: DateTimeString = "2024-03-20T14:30:00Z";
 * // ISO 8601 combined format
 */
export type DateTimeString = WeakType<"DateTimeString", string>;

/**
 * A string representing a duration in ISO 8601 format.
 * @example
 * const duration: DurationString = "P1DT2H30M";
 * // 1 day, 2 hours, 30 minutes
 */
export type DurationString = WeakType<"DurationString", string>;

/**
 * A string representing a valid email address.
 * @example
 * const email: EmailString = "user@example.com";
 * // Must follow standard email format
 */
export type EmailString = StrongType<"EmailString", string>;

/**
 * A string representing a valid URL.
 * @example
 * const url: URLString = "https://example.com";
 * // Must include protocol and valid domain
 */
export type URLString = StrongType<"URLString", string>;

/**
 * A string representing a valid IP address.
 * @example
 * const ip: IPAddressString = "192.168.1.1";
 * // Can be either IPv4 or IPv6 format
 */
export type IPAddressString = StrongType<"IPAddressString", string>;

/**
 * A string representing a valid IPv4 address.
 * @example
 * const ipv4: IPv4String = "192.168.1.1";
 * // Format: XXX.XXX.XXX.XXX
 */
export type IPv4String = StrongType<"IPv4String", string>;

/**
 * A string representing a valid IPv6 address.
 * @example
 * const ipv6: IPv6String = "2001:0db8:85a3:0000:0000:8a2e:0370:7334";
 * // Format: XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX
 */
export type IPv6String = StrongType<"IPv6String", string>;

/**
 * A string representing a valid hostname.
 * @example
 * const hostname: HostnameString = "example.com";
 * // Valid DNS hostname format
 */
export type HostnameString = StrongType<"HostnameString", string>;

/**
 * A string representing a valid MAC address.
 * @example
 * const mac: MACAddressString = "00:1A:2B:3C:4D:5E";
 * // Format: XX:XX:XX:XX:XX:XX
 */
export type MACAddressString = StrongType<"MACAddressString", string>;

/**
 * A string representing a valid identifier.
 * @example
 * const identifier: IdentifierString = "userName123";
 * // Must be a valid variable/function name
 */
export type IdentifierString = StrongType<"IdentifierString", string>;

/**
 * A string representing a valid file path.
 * @example
 * const path: PathString = "/usr/local/bin";
 * // Must be a valid file system path
 */
export type PathString = StrongType<"PathString", string>;

/**
 * A string representing a valid UUID.
 * @example
 * const uuid: UUIDString = "123e4567-e89b-12d3-a456-426614174000";
 * // Must be a valid UUID v4 format
 */
export type UUIDString = StrongType<"UUIDString", string>;

/**
 * A string representing a date in ISO 8601 format.
 * @example
 * const date: ISODateString = "2024-03-20";
 * // Format: YYYY-MM-DD
 */
export type ISODateString = StrongType<"ISODateString", string>; 
