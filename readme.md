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
or 

```sh
$ npx @ps-cli/express <name>
```

## Quick Start

The quickest way to get started with express is to utilize the executable `express(1)` to generate an application as shown below:

Create the app:

```bash
$ ps-express-generator <name>
```

Install dependencies:

```bash
$ npm install
```

Start your Express.js app at `http://localhost:3000/`:

```bash
$ npm start
```

## Command Line Options

This generator can also be further configured with the following command line flags.

        --version        output the version number
    -h, --help           output usage information
        (DATABASE)
        --mongo          adds mongoose    

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