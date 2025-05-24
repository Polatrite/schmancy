import { WeakType } from "../weak-type/weak";

// =============
// Range Types
// =============

/**
 * A number between 0 and 255 (inclusive).
 * @example
 * const byte: ByteNumber = 42;
 * // Must be >= 0 and <= 255
 */
export type ByteNumber = WeakType<"ByteNumber", number>;

/**
 * A number between -128 and 127 (inclusive).
 * @example
 * const signedByte: SignedByteNumber = -42;
 * // Must be >= -128 and <= 127
 */
export type SignedByteNumber = WeakType<"SignedByteNumber", number>;

/**
 * A number between 0 and 65535 (inclusive).
 * @example
 * const word: WordNumber = 42000;
 * // Must be >= 0 and <= 65535
 */
export type WordNumber = WeakType<"WordNumber", number>;

/**
 * A number between -32768 and 32767 (inclusive).
 * @example
 * const signedWord: SignedWordNumber = -16000;
 * // Must be >= -32768 and <= 32767
 */
export type SignedWordNumber = WeakType<"SignedWordNumber", number>;

/**
 * A number between 0 and 4294967295 (inclusive).
 * @example
 * const dword: DWordNumber = 4200000000;
 * // Must be >= 0 and <= 4294967295
 */
export type DWordNumber = WeakType<"DWordNumber", number>; 
