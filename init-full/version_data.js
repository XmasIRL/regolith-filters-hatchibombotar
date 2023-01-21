const latestVersion = [1, 19, 50]

const scriptModules = {
	"@minecraft/server": {
		"version": "1.0.0-beta"
	},
	"@minecraft/server-gametest": {
		"version": "1.0.0-beta"
	},
	"@minecraft/server-admin": {
		"version": "1.0.0-beta"
	},
	"@minecraft/server-ui": {
		"version": "1.0.0-beta"
	},
	"@minecraft/server-net": {
		"version": "1.0.0-beta"
	},
}

const entryModule = "@minecraft/server"

module.exports = {
    latestVersion,
	scriptModules,
	entryModule,
}