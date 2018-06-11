<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/angular-material-extensions/faq/master/demo/src/assets/logo.svg">
</p>

# @angular-material-extensions/faq - Angular Library built with material design in order to provide a reusable faq (frequently asked questions) component for every project. Ask, Answer and List

[![npm version](https://badge.fury.io/js/@angular-material-extensions/faq.svg)](https://badge.fury.io/js/@angular-material-extensions/faq),
[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/faq)
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


## Demo

View all the directives in action at https://anthonynahas.github.io/@angular-material-extensions/faq

## Dependencies
* [Angular v6.x](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0) - Angular V6 - Material V6 are now supported

### Requirements (peer dependencies):
- [angular flex-layout v6.0.0-beta.16](https://www.npmjs.com/package/@angular/flex-layout)
- [angular material v6.2.1](https://www.npmjs.com/package/@angular/material)
- [angular cdk v6.0.2](https://www.npmjs.com/package/@angular/cdk)
- [angular animations v6.0.4](https://www.npmjs.com/package/@angular/animations)
- [angular forms v6.0.4](https://www.npmjs.com/package/@angular/forms)

```bash
npm i @angular/cdk @angular/material @angular/flex-layout @angular/animations @angular/forms 
```

### Additional requirements (Material Design)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)
- [angular material icons](https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons)


## Installation
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
import { NgxMaterialFaqModule } from '@angular-material-extensions/faq';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` NgxMaterialFaqModule .forRoot()`):
```js
import { NgxMaterialFaqModule } from faq;

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxMaterialFaqModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` NgxMaterialFaqModule `:

```js
import { NgxMaterialFaqModule } from '@angular-material-extensions/faq';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgxMaterialFaqModule, ...], 
})
export class OtherModule {
}
```

## Usage

add the `mat-faq` or the `mat-faq-admin` element to your template:


### mat-material-faq

**This component aims to list the provided frequently asked questions**

<p align="center">
  <img alt="@angular-material-extensions/faq" style="text-align: center;"
   src="assets/demo-@angular-material-extensions/faq.png">
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
   src="assets/demo-@angular-material-extensions/faq-admin.png">
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

### Please checkout the full documentation [here](https://anthonynahas.github.io/@angular-material-extensions/faq/doc/index.html) or follow the official [tutorial](https://anthonynahas.github.io/@angular-material-extensions/faq/getting-started)

## Development

1. clone this [repo](https://github.com/angular-material-extensions/faq)
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


## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-material-pages](https://github.com/AnthonyNahas/ngx-material-pages)
- [ngx-material-password-strength](https://github.com/AnthonyNahas/ngx-material-password-strength)
- [ngx-material-contacts](https://github.com/AnthonyNahas/ngx-material-contacts)
- [@angular-material-extensions/combination-generator](https://github.com/angular-material-extensions/combination-generator)


## License

Copyright (c) 2018 anthonynahas. Licensed under the MIT License (MIT)

