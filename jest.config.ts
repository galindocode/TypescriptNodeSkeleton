import type { Config } from "jest";

const config: Config = {
	verbose: true,
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
		"^@app/(.*)$": "<rootDir>/src/app/$1",
		"^@domain/(.*)$": "<rootDir>/src/domain/$1",
		"^@infra/(.*)$": "<rootDir>/src/infra/$1",
	},
};

export default config;
