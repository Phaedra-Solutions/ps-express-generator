[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

[Express'](https://www.npmjs.com/package/express) application generator for Pheadera Solution based on on lib express-generator.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Linux Build][travis-image]][travis-url]
[![Windows Build][appveyor-image]][appveyor-url]

## Installation

```sh
$ npm install -g @ps-cli/express
```


## Quick Start

The quickest way to get started with express is to utilize the executable `express(1)` to generate an application as shown below:

### Create the app:

```bash
$ ps-express new <name>
```
or
```bash
$ pse new <name>
```

Options

```bash
Usage: ps-express new [options] <name>

Generates a new project

Options:
  -i, --install  intsall all dependantcies
  -g, --git      initialize git
  -h, --help     Help in options
```



<b>Install dependencies:</b>

```bash
$ npm install
```

Start your Express.js app at `http://localhost:3000/`:

```bash
$ npm start
```

<b>Adding a route:</b>

```bash
$ pse genrate route <name>
```
or
```bash
$ pse g r <name>
```

<b>Adding a service</b>

```bash
$ pse genrate service <name>
```
or
```bash
$ pse g s <name>
```

<b>Options:</b>

Generate

```bash
Usage: ps-express generate|g [options] [command]

Options:
  -h, --help                Get the help info

Commands:
  route|r [options] <name>  Generate a route
  service|s <name>          Generate a service
  help [command]            display help for command
```

<b>Route</b>

```bash
Usage: ps-express generate route|r [options] <name>

Generate a route

Options:
  -c, --crud  Generates CRUDS as well
  -h, --help  Help in options
```

<b>Service</b>

```bash
Usage: ps-express generate service|s [options] <name>

Generate a service

Options:
  -h, --help  Help in options
```
## Command Line Options

This generator can also be further configured with the following command line flags.

```bash
Usage: ps-express [options] [command]

Gives the verison of CLI

Options:
  -v, --version         Version
  -h, --help            Get the help info

Commands:
  new [options] <name>  Generates a new project
  generate|g
``` 

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express-generator.svg
[npm-url]: https://npmjs.org/package/express-generator
[travis-image]: https://img.shields.io/travis/expressjs/generator/master.svg?label=linux
[travis-url]: https://travis-ci.org/expressjs/generator
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/generator/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/generator
[downloads-image]: https://img.shields.io/npm/dm/express-generator.svg
[downloads-url]: https://npmjs.org/package/express-generator