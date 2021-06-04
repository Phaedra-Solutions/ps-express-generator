const store = require('../../../utils/store');

module.exports = () => {
	console.log(store.get('appName'));
	return [
		// ####################################################### //
		//                  NEW EXPRESS PRJECT                     //
		// ####################################################### //

		// Middleware Files
		{ "filename": "authorized.js", "src": "./template/js/middleware/authorized.js", "destination": "src/@middleware" },
		{ "filename": "authenticated.js", "src": "./template/js/middleware/authenticated.js", "destination": "src/@middleware" },

		// Shared Files
		{ "filename": "index.js", "src": "./template/js/utils/index.js", "destination": "src/@shared/utils" },

		// Routes Files
		{ "filename": "routes-config.js", "src": "./template/js/routes/default/routes-config.js", "destination": "src/@routes/default" },
		{ "filename": "controller.js", "src": "./template/js/routes/default/controller.js", "destination": "src/@routes/default" },
		{ "filename": "index.js", "src": "./template/js/routes/index.js", "destination": "src/@routes" },

		// Package.json
		{
			"filename": "package.json",
			"src": "./template/js/raw/package.json",
			"destination": ".",
			"changes": [
				{
					from: "{{name}}",
					to: store.get('appName'),
				}
			]
		},

		// Public 
		{ "filename": "index.html", "src": "./template/public/index.html", "destination": "public" },
		{ "filename": "style.css", "src": "./template/public/stylesheets/style.css", "destination": "public/stylesheets" },
		{ "filename": "index.js", "src": "./template/public/javascripts/index.js", "destination": "public/javascripts" },

		// App Root
		{ "filename": "app.js", "src": "./template/js/raw/app.js", "destination": "src/" },
		{ "filename": "www", "src": "./template/js/raw/www", "destination": "bin/" },

		// Editor config
		{ "filename": ".editorconfig", "src": "./template/editor/.editorconfig", "destination": "." },
		{ "filename": ".gitignore", "src": "./template/editor/ignore.txt", "destination": "." },
		{ "filename": ".gitattributes", "src": "./template/editor/.gitattributes", "destination": "." },
		{ "filename": ".prettierrc", "src": "./template/editor/.prettierrc", "destination": "." },
		{ "filename": "settings.json", "src": "./template/editor/settings.json", "destination": ".vscode" },
	]
}