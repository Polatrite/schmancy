import type { BuildConfig } from 'bun';
import dts from 'bun-plugin-dts';

const defaultBuildConfig: BuildConfig = {
	entrypoints: ['./src/public-api.ts'],
	outdir: './dist',
	target: 'browser',
	packages: 'external',
};	

const start = performance.now();
console.log('Building...');

const builds = [
	Bun.build({
		...defaultBuildConfig,
		format: 'cjs',
		naming: '[dir]/[name].cjs',
	}),
	Bun.build({
		...defaultBuildConfig,
		format: 'iife',
		naming: '[dir]/[name].iife.js',
	}),
	Bun.build({
		...defaultBuildConfig,
		format: 'esm',
		naming: '[dir]/[name].js',
	}),
	Bun.build({
		...defaultBuildConfig,
		plugins: [dts({
			compilationOptions: {
				preferredConfigPath: './tsconfig.json',
			},
		})],
		format: 'esm',
		naming: '[dir]/[name].js',
	}),
];

let i = 0;
builds.forEach(async (build) => {
	i++;
	const il = i;
	console.log(`[#${il}] Building...`);
	const finished = await build;
	console.log(`[#${il}] ${finished.outputs[0]?.path} built!`);
});

await Promise.all(builds);
const end = performance.now();

console.log(`All builds complete! Took ${end - start}ms`);