// Credit to the type-plus library at https://github.com/unional/type-plus

// By Drew Colthorp, <https://spin.atomicobject.com/2018/01/15/typescript-flexible-nominal-typing/#comment-604580>
// <https://gist.github.com/dcolthorp/aa21cf87d847ae9942106435bf47565d>

import { typeSymbol, valueSymbol } from '../symbol.js'
import type { Widen } from '../utils/widen.js'
import { isType } from '../utils/is-type.js'

/**
 * Create a "weaktyped" version of a type.
 * TypeScript will disallow mixing weaktypes,
 * but will allow unweaktyped values of that type to be passed in where a weaktyped version is expected.
 * This is a less restrictive form of StrongType.
 */
export type WeakType<F extends string, T> = [T] extends [null] | [undefined] | [symbol] | [void]
	? WeakTypedUnit<F, T>
	: WeakTyped<F> & T

/**
 * A weaktyped type of `F`
 */
export interface WeakTyped<F extends string> {
	[typeSymbol]?: F
}

/**
 * A special weaktyped type for special types.
 */
export interface WeakTypedUnit<F extends string, T> {
	[typeSymbol]?: F
	[valueSymbol]: T
}

/**
 * Creates a brand creator with the specified type.
 */
export function weakCast<F extends string>(type: F): <T>(subject: T) => WeakType<F, Widen<T>>
/**
 * Creates a branded value of specified type.
 */
export function weakCast<F extends string, T>(type: F, subject: T): WeakType<F, Widen<T>>
export function weakCast(type: string, subject?: unknown) {
	if (subject === undefined) return <T>(subject: T) => weakCast(type, subject)

	if (isType<{ [typeSymbol]: string }>(subject, (s) => typeof s === 'object' && s !== null)) {
		// if subject is not an object, the branding will exist only in type-level.
		subject[typeSymbol] = type
	}

	return subject
}
