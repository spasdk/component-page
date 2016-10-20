Page component
==============

[![build status](https://img.shields.io/travis/spasdk/component-page.svg?style=flat-square)](https://travis-ci.org/spasdk/component-page)
[![npm version](https://img.shields.io/npm/v/spa-component-page.svg?style=flat-square)](https://www.npmjs.com/package/spa-component-page)
[![dependencies status](https://img.shields.io/david/spasdk/component-page.svg?style=flat-square)](https://david-dm.org/spasdk/component-page)
[![devDependencies status](https://img.shields.io/david/dev/spasdk/component-page.svg?style=flat-square)](https://david-dm.org/spasdk/component-page?type=dev)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/spasdk)


Page is the main component to build user interface, an instance of [Component](https://github.com/spasdk/component) module.
Page is an area filling the whole screen. There can be only one active page visible at the same time.
Active/visible state of a page is managed by the `router` module.
A page can contain other components.


## Installation ##

```bash
npm install spa-component-page
```


## Usage ##

Add the singleton to the scope:

```js
var page = require('spa-component-page');
```


## Development mode ##

> There is a global var `DEVELOP` which activates additional consistency checks and protection logic not available in release mode.


## Contribution ##

If you have any problem or suggestion please open an issue [here](https://github.com/spasdk/component-page/issues).
Pull requests are welcomed with respect to the [JavaScript Code Style](https://github.com/DarkPark/jscs).


## License ##

`spa-component-page` is released under the [MIT License](license.md).
