import { StrongType } from "../strong-type/strong";

// =============
// Data Types
// =============

/**
 * A number representing a size in bytes.
 * @example
 * const size: ByteSizeNumber = 1024;
 * // Must be >= 0
 */
export type ByteSizeNumber = StrongType<"ByteSizeNumber", number>;

/**
 * A number representing a size in kilobytes.
 * @example
 * const kb: KilobyteNumber = 1;
 * // Must be >= 0
 */
export type KilobyteNumber = StrongType<"KilobyteNumber", number>;

/**
 * A number representing a size in megabytes.
 * @example
 * const mb: MegabyteNumber = 1;
 * // Must be >= 0
 */
export type MegabyteNumber = StrongType<"MegabyteNumber", number>;

/**
 * A number representing a size in gigabytes.
 * @example
 * const gb: GigabyteNumber = 1;
 * // Must be >= 0
 */
export type GigabyteNumber = StrongType<"GigabyteNumber", number>;

/**
 * A number representing a size in terabytes.
 * @example
 * const tb: TerabyteNumber = 1;
 * // Must be >= 0
 */
export type TerabyteNumber = StrongType<"TerabyteNumber", number>;

/**
 * A number representing a size in petabytes.
 * @example
 * const pb: PetabyteNumber = 1;
 * // Must be >= 0
 */
export type PetabyteNumber = StrongType<"PetabyteNumber", number>;

/**
 * A number representing a memory address.
 * @example
 * const addr: MemoryAddressNumber = 0x1000;
 * // Must be >= 0
 */
export type MemoryAddressNumber = StrongType<"MemoryAddressNumber", number>;

/**
 * A number representing a buffer size.
 * @example
 * const bufSize: BufferSizeNumber = 4096;
 * // Must be > 0
 */
export type BufferSizeNumber = StrongType<"BufferSizeNumber", number>;

/**
 * A number representing a cache size.
 * @example
 * const cacheSize: CacheSizeNumber = 8192;
 * // Must be > 0
 */
export type CacheSizeNumber = StrongType<"CacheSizeNumber", number>;

/**
 * A number representing a page size.
 * @example
 * const pageSize: PageSizeNumber = 4096;
 * // Must be > 0 and typically a power of 2
 */
export type PageSizeNumber = StrongType<"PageSizeNumber", number>; 
