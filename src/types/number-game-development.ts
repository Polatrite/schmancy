import { StrongType } from "../strong-type/strong";

// =============
// Game Development Types
// =============

/**
 * A number representing health points.
 * @example
 * const health: HealthNumber = 100;
 */
export type HealthNumber = StrongType<"HealthNumber", number>;

/**
 * A number representing experience points.
 * @example
 * const xp: ExperienceNumber = 1000;
 */
export type ExperienceNumber = StrongType<"ExperienceNumber", number>;

/**
 * A number representing a character level.
 * @example
 * const level: LevelNumber = 50;
 */
export type LevelNumber = StrongType<"LevelNumber", number>;

/**
 * A number representing a game score.
 * @example
 * const score: ScoreNumber = 15000;
 */
export type ScoreNumber = StrongType<"ScoreNumber", number>;

/**
 * A number representing a stat.
 * @example
 * const stat: StatNumber = 25;
 */
export type StatNumber = StrongType<"StatNumber", number>;

/**
 * A number representing damage amount.
 * @example
 * const damage: DamageNumber = 25;
 */
export type DamageNumber = StrongType<"DamageNumber", number>;

/**
 * A number representing armor value.
 * @example
 * const armor: ArmorNumber = 50;
 */
export type ArmorNumber = StrongType<"ArmorNumber", number>;

/**
 * A number representing mana points.
 * @example
 * const mana: ManaNumber = 100;
 */
export type ManaNumber = StrongType<"ManaNumber", number>;

/**
 * A number representing stamina points.
 * @example
 * const stamina: StaminaNumber = 100;
 */
export type StaminaNumber = StrongType<"StaminaNumber", number>;

/**
 * A number representing a skill level.
 * @example
 * const skill: SkillLevelNumber = 5;
 */
export type SkillLevelNumber = StrongType<"SkillLevelNumber", number>;

/**
 * A number representing a cooldown time in seconds.
 * @example
 * const cooldown: CooldownNumber = 30;
 */
export type CooldownNumber = StrongType<"CooldownNumber", number>;
