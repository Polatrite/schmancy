import { StrongType } from "../strong-type/strong";

/**
 * Security-related string type definitions for strings that require security validation.
 */

/**
 * A string representing a secure password.
 * @example
 * const password: PasswordString = "P@ssw0rd123!";
 * // Should meet security requirements
 */
export type PasswordString = StrongType<"PasswordString", string>;

/**
 * A string representing a valid JSON Web Token.
 * @example
 * const jwt: JWTString = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
 * // Format: header.payload.signature
 */
export type JWTString = StrongType<"JWTString", string>;

/**
 * A string representing an OAuth token.
 * @example
 * const oauth: OAuthTokenString = "ya29.a0AfB_byC...";
 * // OAuth 2.0 access token format
 */
export type OAuthTokenString = StrongType<"OAuthTokenString", string>;

/**
 * A string representing an API key.
 * @example
 * const apiKey: APIKeyString = "sk_live_51H...";
 * // Format varies by service provider
 */
export type APIKeyString = StrongType<"APIKeyString", string>;

/**
 * A string representing a hash value.
 * @example
 * const hash: HashString = "a1b2c3d4e5f6...";
 * // Must be a valid hash format (MD5, SHA, etc.)
 */
export type HashString = StrongType<"HashString", string>;

/**
 * A string representing an authentication token.
 * @example
 * const token: TokenString = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1...";
 * // Must be a valid authentication token
 */
export type TokenString = StrongType<"TokenString", string>;

/**
 * A string containing encrypted data.
 * @example
 * const encrypted: EncryptedString = "U2FsdGVkX1+...";
 * // Must be properly encrypted data
 */
export type EncryptedString = StrongType<"EncryptedString", string>;

/**
 * A string containing compressed data.
 * @example
 * const compressed: CompressedString = "H4sIAAAAAAAA/...";
 * // Must be properly compressed data
 */
export type CompressedString = StrongType<"CompressedString", string>; 
