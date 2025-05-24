import { WeakType } from "../weak-type/weak";

// =============
// Basic Boolean Types
// =============

/**
 * A boolean representing an error state.
 * Pure binary state for error presence.
 * Note: Error details should be handled separately.
 * @example
 * const hasError: ErrorState = true;
 * // Used for:
 * // - Error presence checks
 * // - Error condition flags
 * // - Error state indicators
 */
export type ErrorState = WeakType<"ErrorState", boolean>;

/**
 * A boolean representing a toggle state.
 * Pure binary state for enable/disable functionality.
 * @example
 * const isEnabled: ToggleState = true;
 * // Used for:
 * // - Feature flags
 * // - Settings toggles
 * // - Enable/disable states
 * // - Simple on/off switches
 */
export type ToggleState = WeakType<"ToggleState", boolean>;

/**
 * A boolean representing a selected state.
 * Pure binary state for selected functionality.
 * @example
 * const isSelected: SelectedState = true;
 * // Used for:
 * // - UI element selected
 * // - Item selected
 * // - Option selected
 * // - Checkbox states
 */
export type SelectedState = WeakType<"SelectedState", boolean>;

/**
 * A boolean representing a visibility state.
 * Pure binary state for show/hide functionality.
 * @example
 * const isVisible: VisibilityState = true;
 * // Used for:
 * // - UI element visibility
 * // - Component display
 * // - Modal/show dialog states
 */
export type VisibilityState = WeakType<"VisibilityState", boolean>;

/**
 * A boolean representing a locked state.
 * Pure binary state for lock/unlock functionality.
 * @example
 * const isLocked: LockedState = true;
 * // Used for:
 * // - Resource locking
 * // - UI element locking
 * // - Edit mode locking
 */
export type LockedState = WeakType<"LockedState", boolean>;

/**
 * A boolean representing a paused state.
 * Pure binary state for pause/resume functionality.
 * @example
 * const isPaused: PausedState = true;
 * // Used for:
 * // - Media playback
 * // - Animation states
 * // - Process states
 */
export type PausedState = WeakType<"PausedState", boolean>;

/**
 * A boolean representing a read-only state.
 * Pure binary state for read-only/editable functionality.
 * @example
 * const isReadOnly: ReadOnlyState = true;
 * // Used for:
 * // - Form field editability
 * // - Document permissions
 * // - Configuration settings
 * // - Display-only content
 */
export type ReadOnlyState = WeakType<"ReadOnlyState", boolean>;

/**
 * A boolean representing a required state.
 * Pure binary state for required/optional functionality.
 * @example
 * const isRequired: RequiredState = true;
 * // Used for:
 * // - Form field requirements
 * // - Mandatory parameters
 * // - Essential configurations
 * // - Required dependencies
 */
export type RequiredState = WeakType<"RequiredState", boolean>;

