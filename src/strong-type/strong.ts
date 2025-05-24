// Credit to the type-plus library at https://github.com/unional/type-plus

// By Drew Colthorp, <https://spin.atomicobject.com/2018/01/15/typescript-flexible-nominal-typing/#comment-604580>
// <https://gist.github.com/dcolthorp/aa21cf87d847ae9942106435bf47565d>

import { typeSymbol, valueSymbol } from "../symbol"
import { isType } from "../utils/is-type"
import type { Widen } from "../utils/widen"


/**
 * Create a "StrongTyped" version of a type.
 * TypeScript won't allow implicit conversion to this type
 */
export type StrongType<B extends string, T = never> = [T] extends [null] | [undefined] | [symbol] | [void]
	? StrongTyped<B, T>
	: StrongTyped<B, T> & T

/**
 * A StrongTyped type of `B` with value of `T`.
 */
export interface StrongTyped<B extends string, T> {
	[typeSymbol]: B
	[valueSymbol]: T
}

/**
 * Creates a StrongType creator with the specified type.
 */
export function strongCast<B extends string>(type: B): <T>(subject: T) => StrongType<B, Widen<T>>
/**
 * Creates a StrongType value of specified type.
 */
export function strongCast<B extends string, T>(type: B, subject: T): StrongType<B, Widen<T>>
export function strongCast(typeInput: string, subject?: unknown) {
	if (subject === undefined) return <T>(subject: T) => strongCast(typeInput, subject)

	if (isType<{ [typeSymbol]: string }>(subject, (s) => typeof s === 'object' && s !== null)) {
		// if subject is not an object, the branding will exist only in type-level.
		subject[typeSymbol] = typeInput
	}
	return subject
}
