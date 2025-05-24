import { StrongType } from "../strong-type/strong";
import { WeakType } from "../weak-type/weak";

// =============
// Digital and Computing Types
// =============

/**
 * A number representing a bit (0 or 1).
 * @example
 * const bit: BitNumber = 1;
 * // Must be 0 or 1
 */
export type BitNumber = WeakType<"BitNumber", number>;

/**
 * A number representing a nibble (4 bits).
 * @example
 * const nibble: NibbleNumber = 0xF;
 * // Must be >= 0 and <= 15
 */
export type NibbleNumber = WeakType<"NibbleNumber", number>;

/**
 * A number representing a hexadecimal value.
 * @example
 * const hex: HexNumber = 0xFF;
 * // Must be >= 0 and <= 255
 */
export type HexNumber = WeakType<"HexNumber", number>;

/**
 * A number representing a network port.
 * @example
 * const port: PortNumber = 8080;
 * // Must be >= 0 and <= 65535
 */
export type PortNumber = WeakType<"PortNumber", number>;

/**
 * A number representing a process ID.
 * @example
 * const pid: ProcessIdNumber = 1234;
 * // Must be > 0
 */
export type ProcessIdNumber = StrongType<"ProcessIdNumber", number>;

/**
 * A number representing a thread ID.
 * @example
 * const tid: ThreadIdNumber = 5678;
 * // Must be > 0
 */
export type ThreadIdNumber = StrongType<"ThreadIdNumber", number>;

/**
 * A number representing a file descriptor.
 * @example
 * const fd: FileDescriptorNumber = 3;
 * // Must be >= 0
 */
export type FileDescriptorNumber = StrongType<"FileDescriptorNumber", number>;

/**
 * A number representing a process exit code.
 * @example
 * const exitCode: ExitCodeNumber = 0;
 * // Must be >= 0 and <= 255
 */
export type ExitCodeNumber = StrongType<"ExitCodeNumber", number>;

/**
 * A number representing a system signal.
 * @example
 * const signal: SignalNumber = 9;
 * // Must be >= 1 and <= 31
 */
export type SignalNumber = StrongType<"SignalNumber", number>;

/**
 * A number representing a user ID.
 * @example
 * const uid: UserIdNumber = 1000;
 * // Must be >= 0
 */
export type UserIdNumber = StrongType<"UserIdNumber", number>; 
