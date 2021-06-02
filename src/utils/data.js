module.exports = {
  dependancies: ['cookie-parser debug dotenv express jsonwebtoken morgan swagger-ui-express'],
  devDependancies: ['nodemon prettier'],
  templatingEngines: ['--ejs', '--view', '--pug', '--hbs', '--hogan', '--dust', '--hjs', '--jade', '--twig', '--vash'],
  db_args: ['--mongo', '--mariadb', '--postgresql'],
	db: {
		'MONGO': '--mongo',
		'MARIA': '--mariadb',
		'POSTGRESQL': '--postgresql'
	},
  appName: 'output',
  helpInfo: `
  \n
Please visit https://github.com/Phaedra-Solutions/ps-express-generator for more information
Please report issues if you find any bug or want any improvement, feel free to add your
Pull Requests, Thanks 😏, STAY AWESOME!! 🚀
  `,
  welcomeTxt: `
Pheadra Solutons custom CLI for all major javascript Libs, this @ps-cli/express will generate 
an express app with latest dependancies and apply our coding standards, :), please visit 
https://www.npmjs.com/~ps-cli for more info and packages. 🚀
  `
}
