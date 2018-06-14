<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/angular-material-extensions/faq/master/demo/src/assets/logo.svg">
</p>

# @angular-material-extensions/faq - Angular Library built with material design in order to provide a reusable faq (frequently asked questions) component for every project. Ask, Answer and List

[![npm version](https://badge.fury.io/js/%40angular-material-extensions%2Ffaq.svg)](https://badge.fury.io/js/%40angular-material-extensions%2Ffaq)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/faq)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CircleCI branch](https://img.shields.io/circleci/project/github/angular-material-extensions/faq/master.svg?label=circleci)](https://circleci.com/gh/angular-material-extensions/faq)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/faq/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/faq?branch=master)
[![dependency Status](https://david-dm.org/angular-material-extensions/faq/status.svg)](https://david-dm.org/angular-material-extensions/faq)
[![devDependency Status](https://david-dm.org/angular-material-extensions/faq/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/faq#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/faq.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/angular-material-extensions/faq.svg?style=flat-square)](https://github.com/angular-material-extensions/faq/blob/master/LICENSE)

> This project has been renamed from [ngx-material-faq](https://www.npmjs.com/package/ngx-material-faq) to [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)

<p align="center">
  <img alt="@angular-material-extensions/faq" style="text-align: center;"
   src="assets/demo.gif">
</p>

## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/contacts/issues)

If did you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Demo](#demo)
- [Dependencies](#dependencies)
- [Peer Dependencies](#peerDependencies)
- [Additional Requirements - material (Include a theme)](#additional-requirements-material-theme)
- [Additional Requirements - material icons](#additional-requirements-material-icons)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Run Demo App Locally](#run-demo-app-locally)
- [Development](#development)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="demo"/>

## [Demo](https://angular-material-extensions.github.io/faq)

View all the directives in action at [https://angular-material-extensions.github.io/faq](https://angular-material-extensions.github.io/faq)

<a name="dependencies"/>

## Dependencies
* [Angular v6.x](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0) - Angular V6 - Material V6 are now supported

<a name="peerDependencies"/>

### Requirements (peer dependencies):
- [angular flex-layout v6.0.0-beta.16](https://www.npmjs.com/package/@angular/flex-layout)
- [angular material v6.2.1](https://www.npmjs.com/package/@angular/material)
- [angular cdk v6.0.2](https://www.npmjs.com/package/@angular/cdk)
- [angular animations v6.0.5](https://www.npmjs.com/package/@angular/animations)
- [angular forms v6.0.5](https://www.npmjs.com/package/@angular/forms)

```bash
npm i @angular/cdk @angular/material @angular/flex-layout @angular/animations @angular/forms 
```

<a name="additional-requirements-material-theme"/>

### Additional requirements Theme (Material Design)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)

<a name="additional-requirements-material-icons"/>

## Additional Requirements - Import the material design icons [learn more](https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons)

- The easiest way to import material design icons is to provide a link in your `index.html` file like below:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

- alternative solution:

1. Install of the official npm module of the material design icons

```bash
npm i -s material-design-icons
```

2. Import them in your `angular.json` file

```json
"styles": [
        "styles.css",
        "../node_modules/material-design-icons/iconfont/material-icons.css"
      ],
```  


----

<a name="installation"/>

##  [Installation](https://angular-material-extensions.github.io/faq/getting-started)
Install above dependencies via *npm*. 

Now install `@angular-material-extensions/faq` via:
```shell
npm install -s @angular-material-extensions/faq
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@angular-material-extensions/faq`:
```js
map: {
  '@angular-material-extensions/faq': 'node_modules/@angular-material-extensions/faq/bundles/@angular-material-extensions/faq.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { MatFaqModule } from '@angular-material-extensions/faq';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` MatFaqModule .forRoot()`):
```js
import { MatFaqModule } from '@angular-material-extensions/faq';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [MatFaqModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` MatFaqModule `:

```js
import { MatFaqModule } from '@angular-material-extensions/faq';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [MatFaqModule, ...], 
})
export class OtherModule {
}
```
<a name="usage"/>

## (2) [Usage](https://angular-material-extensions.github.io/faq/getting-started)

add the `mat-faq` or the `mat-faq-admin` element to your template:


### mat-material-faq

**This component aims to list the provided frequently asked questions**

<p align="center">
  <img alt="@angular-material-extensions/faq" style="text-align: center;"
   src="assets/demo-mat-faq.png">
</p>

```html
<mat-faq [faqList]="list"></mat-faq>
```

```typescript
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FaqItem} from '@angular-material-extensions/faq';

export class HomeComponent implements OnInit {
  
    ngOnInit() {
    }

  list: FaqItem[] = [
    {
          question: 'Why does it think the jQuery plugin is missing?',
          answer: 'Remember: load jQuery before AngularJS if you are using jQuery plugins!'
        },
        {
          question: 'How do I access the DOM from a controller?',
          answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
        }
  ];
  
 }
 
 ```

### mat-faq-admin

**This component is actually for admin purposes, like to add a frequently 
asked question to the backend, firebase ... and so on..**

<p align="center">
  <img alt="mat-faq-admin" style="text-align: center;"
   src="assets/demo-mat-faq-admin.png">
</p>

```html
<mat-faq-admin [title]="'Admin'" (onFAQItemAdded)="onNewFaqItem($event)"></mat-faq-admin>
```

in your component

```typescript
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FaqItem} from '@angular-material-extensions/faq';

export class HomeComponent implements OnInit {
  
   ngOnInit() {
      }

  faq: FaqItem[] = [];
  
  onNewFaqItem(faqItem: FaqItem) {
      console.log('on new faqItem -> ', faqItem);
      this.faq.splice(0, 0, faqItem);
    }
  
 } 
```
<a name="documentation"/>

## [Documentation](https://angular-material-extensions.github.io/faq/doc/index.html)

Please checkout the full documentation [here](https://anthonynahas.github.io/@angular-material-extensions/faq/doc/index.html) 
or follow the official [tutorial](https://anthonynahas.github.io/@angular-material-extensions/faq/getting-started)

<a name="run-demo-app-locally"/>

## Run Demo App Locally

- [clone this repo](https://github.com/angular-material-extensions/faq.git) by running
```bash
$ git clone https://github.com/AnthonyNahas/ngx-auth-firebaseui.git
```

- link the **@angular-material-extensions/faq** package
use gulp globally
```bash
$ gulp link
```

use gulp locally
```bash
$ npx gulp link
```
for some mac os users, you may use the sudo command with gulp
use gulp with sudo
```bash
$ sudo gulp link
```
or locally 
```bash
$ sudo npx gulp link
```

- navigate to the demo app directory
```bash
$ cd demo
```

- install the dependencies
```bash
$ npm i
```

- run/start/serve the app
```bash
$ npm run start
```
or
```bash
$ ng serve --open
```
- the app is now hosted by `http://localhost:4200/`


<a name="development"/>

## Development

1. clone this [repo](https://github.com/angular-material-extensions/faq.git)
2. Install the dependencies by running `npm i`
3. build the library `npm run build` or `gulp build`
To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

4. Link the library 
  - on windows `gulp link` or locally `npx gulp link`
  - on mac/linux `sudo gulp link` or locally `sudo npx gulp link`
  
 5. Navigate to the demo app's directory
  - `cd demo`
  _ `npm i`
  _ `npm start`

extras
To lint all `*.ts` files:

```bash
$ npm run lint
```
<a name="other-angular-libraries"/>

## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-material-pages](https://github.com/AnthonyNahas/ngx-material-pages)
- [ngx-material-password-strength](https://github.com/AnthonyNahas/ngx-material-password-strength)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
- [@angular-material-extensions/combination-generator](https://github.com/angular-material-extensions/combination-generator)

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/faq/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:


## License

Copyright (c) 2018 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT)

