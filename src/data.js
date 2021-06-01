module.exports = [

	// ####################################################### //
	//                    JAVASCRIPT                           //
	// ####################################################### //

	// Middleware Files
	{ "name": "authorized.js", "src": "./content/js/middleware/authorized.js", "destination": "src/@middleware" },
	{ "name": "authenticated.js", "src": "./content/js/middleware/authenticated.js", "destination": "src/@middleware" },
	
	// Shared Files
	{ "name": "index.js", "src": "./content/js/utils/index.js", "destination": "src/@shared/utils" },
	
	// Routes Files
	{ "name": "routes-config.js", "src": "./content/js/routes/default/routes-config.js", "destination": "src/@routes/default" },
	{ "name": "controller.js", "src": "./content/js/routes/default/controller.js", "destination": "src/@routes/default" },
	{ "name": "index.js", "src": "./content/js/routes/index.js", "destination": "src/@routes" },

	// Package.json
	{ "name": "package.json", "src": "./content/js/raw/package.json", "destination": "." },

	// Public 
	{ "name": "index.html", "src": "./content/public/index.html", "destination": "public"  },
	{ "name": "style.css", "src": "./content/public/stylesheets/style.css", "destination": "public/stylesheets"  },
	{ "name": "index.js", "src": "./content/public/javascripts/index.js", "destination": "public/javascripts"  },

	// App Root
	{ "name": "app.js", "src": "./content/js/raw/app.js", "destination": "src/" },
	{ "name": "www", "src": "./content/js/raw/www", "destination": "bin/" },

]