const withTypescript = require('@zeit/next-typescript'),
	optimizedImages = require('next-optimized-images');

module.exports = withTypescript(optimizedImages({
	webpack(config, {}) {
		config.module.rules.push({
			test: /\.[jt]sx?$/,
			use: [{
				loader: 'stylelint-custom-processor-loader',
				options: {
					isServer: false
				}
			}, {
				loader: 'tslint-loader',
				options: {
					isServer: false
				}
			}],
			exclude: /node_modules/
		});
		return config;
	}
}));
