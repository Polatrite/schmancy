import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const typeCategories = ['array', 'boolean', 'number', 'string']

// Common build configuration for each type category
const createTypeConfig = (category) => ({
	input: `src/types/${category}.ts`,
	plugins: [esbuild()],
	output: [
		{
			file: `dist/types/${category}.js`,
			format: 'es',
			sourcemap: true,
			exports: 'named',
		},
		{
			file: `dist/types/${category}.cjs`,
			format: 'cjs',
			sourcemap: true,
			exports: 'named',
		}
	]
})

// Common type definition configuration for each category
const createTypeDefConfig = (category) => ({
	input: `src/types/${category}.ts`,
	plugins: [dts()],
	output: {
		file: `dist/types/${category}.d.ts`,
		format: 'es',
	},
})

// Main bundle configuration
const mainConfig = {
	input: 'src/public-api.ts',
	plugins: [esbuild()],
	output: [
		{
			file: 'dist/bundle.js',
			format: 'es',
			sourcemap: true,
			exports: 'named',
		},
		{
			file: 'dist/bundle.cjs',
			format: 'cjs',
			sourcemap: true,
			exports: 'named',
		}
	]
}

// Main type definitions
const mainTypeDefConfig = {
	input: 'src/public-api.ts',
	plugins: [dts()],
	output: {
		file: 'dist/index.d.ts',
		format: 'es',
	},
}

// Export all configurations
export default [
	mainConfig,
	mainTypeDefConfig,
	...typeCategories.map(createTypeConfig),
	...typeCategories.map(createTypeDefConfig),
]
