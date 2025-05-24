import { StrongType } from "../strong-type/strong";

/**
 * Data format string type definitions for strings that represent specific data formats.
 */

/**
 * A string containing valid JSON data.
 * @example
 * const json: JSONString = '{"name": "John", "age": 30}';
 * // Must be valid JSON format
 */
export type JSONString = StrongType<"JSONString", string>;

/**
 * A string containing valid XML data.
 * @example
 * const xml: XMLString = '<root><name>John</name></root>';
 * // Must be well-formed XML
 */
export type XMLString = StrongType<"XMLString", string>;

/**
 * A string containing valid HTML content.
 * @example
 * const html: HTMLString = '<div class="container">Hello</div>';
 * // Must be valid HTML markup
 */
export type HTMLString = StrongType<"HTMLString", string>;

/**
 * A string containing valid Markdown content.
 * @example
 * const markdown: MarkdownString = '# Title\n**Bold** and *italic*';
 * // Must be valid Markdown syntax
 */
export type MarkdownString = StrongType<"MarkdownString", string>;

/**
 * A string containing a valid SQL query.
 * @example
 * const sql: SQLString = 'SELECT * FROM users WHERE id = 1';
 * // Must be valid SQL syntax
 */
export type SQLString = StrongType<"SQLString", string>;

/**
 * A string representing a hexadecimal value.
 * @example
 * const hex: HexString = "1a2b3c";
 * // Must contain only hexadecimal characters (0-9, a-f)
 */
export type HexString = StrongType<"HexString", string>;

/**
 * A string representing a Base64 encoded value.
 * @example
 * const base64: Base64String = "SGVsbG8gV29ybGQ=";
 * // Must be valid Base64 encoded string
 */
export type Base64String = StrongType<"Base64String", string>;

/**
 * A string representing valid CSV data.
 * @example
 * const csv: CSVString = "name,age\nJohn,30\nJane,25";
 * // Comma-separated values with optional headers
 */
export type CSVString = StrongType<"CSVString", string>;

/**
 * A string representing valid YAML data.
 * @example
 * const yaml: YAMLString = "name: John\nage: 30\ncity: New York";
 * // YAML 1.2 format
 */
export type YAMLString = StrongType<"YAMLString", string>;

/**
 * A string representing valid TOML data.
 * @example
 * const toml: TOMLString = "title = 'TOML Example'\n[owner]\nname = 'John'";
 * // TOML v1.0.0 format
 */
export type TOMLString = StrongType<"TOMLString", string>;

/**
 * A string representing valid INI configuration data.
 * @example
 * const ini: INIString = "[section]\nkey = value\nanother = 123";
 * // INI configuration format
 */
export type INIString = StrongType<"INIString", string>; 
