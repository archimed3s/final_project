const moduleResolver = ['module-resolver', {
	root: ['./'],
	alias: {
		redx: './redux',
		route: './route',
		assets: './client/assets',
		common: './client/common',
		blocks: './client/components/blocks',
		elements: './client/components/elements'
	}
}];

module.exports = {
	env: {
		development: {
			presets: [
				'next/babel',
				'@zeit/next-typescript/babel'
			],
			plugins: [[
				'styled-components', {
					displayName: true,
					minify: false,
					ssr: true
				}], moduleResolver
			]
		},
		production: {
			presets: [
				'next/babel',
				'@zeit/next-typescript/babel'
			],
			plugins: [[
				'styled-components', {
					displayName: false,
					minify: true,
					pure: true,
					ssr: true
				}], moduleResolver
			]
		},
		test: {
			presets: [[
				'next/babel',
				{
					'preset-env': {
						modules: 'commonjs'
					}
				}],
				'@zeit/next-typescript/babel'
			],
			plugins: [[
				'styled-components',
				{
					ssr: true
				}], moduleResolver
			]
		}
	}
};
