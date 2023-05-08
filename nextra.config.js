
module.exports = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.node = { fs: "empty" };
		}

		// tambahkan konfigurasi untuk memuat file CSS
		config.module.rules.push({
			test: /\.css$/,
			use: [
				{
					loader: "postcss-loader",
					options: {
						postcssOptions: {
							ident: "postcss",
							plugins: [
								require("tailwindcss"),
								require("postcss-preset-env")({
									stage: 1,
									features: {
										"focus-within-pseudo-class": false,
									},
								}),
							],
						},
					},
				},
			],
		});

		return config;
	},
};
