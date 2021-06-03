const { appName } = require("./data")

module.exports = [

	// ####################################################### //
	//                    JAVASCRIPT                           //
	// ####################################################### //

	// Middleware Files
	{ "name": "authorized.js", "src": "./template/js/middleware/authorized.js", "destination": "src/@middleware" },
	{ "name": "authenticated.js", "src": "./template/js/middleware/authenticated.js", "destination": "src/@middleware" },
	
	// Shared Files
	{ "name": "index.js", "src": "./template/js/utils/index.js", "destination": "src/@shared/utils" },
	
	// Routes Files
	{ "name": "routes-config.js", "src": "./template/js/routes/default/routes-config.js", "destination": "src/@routes/default" },
	{ "name": "controller.js", "src": "./template/js/routes/default/controller.js", "destination": "src/@routes/default" },
	{ "name": "index.js", "src": "./template/js/routes/index.js", "destination": "src/@routes" },

	// Package.json
	{ 
		"name": "package.json", 
		"src": "./template/js/raw/package.json", 
		"destination": ".", 
		"changes": [
			{ "from": "name", "to": appName }
		] 
	},

	// Public 
	{ "name": "index.html", "src": "./template/public/index.html", "destination": "public"  },
	{ "name": "style.css", "src": "./template/public/stylesheets/style.css", "destination": "public/stylesheets"  },
	{ "name": "index.js", "src": "./template/public/javascripts/index.js", "destination": "public/javascripts"  },

	// App Root
	{ "name": "app.js", "src": "./template/js/raw/app.js", "destination": "src/" },
	{ "name": "www", "src": "./template/js/raw/www", "destination": "bin/" },

	// Editor config
	{ "name": ".editorconfig", "src": "./template/editor/.editorconfig", "destination": "." },
	{ "name": ".gitignore", "src": "./template/editor/ignore.txt", "destination": "." },
	{ "name": ".gitattributes", "src": "./template/editor/.gitattributes", "destination": "." },
	{ "name": ".prettierrc", "src": "./template/editor/.prettierrc", "destination": "." },
	{ "name": "settings.json", "src": "./template/editor/settings.json", "destination": ".vscode" },
]