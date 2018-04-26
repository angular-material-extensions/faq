import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatSnackBar} from '@angular/material';
import {FaqItem} from '../../../../src';


@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GettingStartedComponent implements OnInit {

  ngVersion = `    _                      _                 ____ _     ___
                 / \\   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
                / △ \\ | '_ \\ / _\` | | | | |/ _\` | '__|   | |   | |    | |
               / ___ \\| | | | (_| | |_| | | (_| | |      | |___| |___ | |
              /_/   \\_\\_| |_|\\__, |\\__,_|_|\\__,_|_|       \\____|_____|___|
                             |___/

              Angular CLI: 1.7.3
              Node: 8.11.1
              OS: darwin x64
              Angular:`;

  importBrowserAnimationsModule = `import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

                                    @NgModule({
                                      ...
                                      imports: [BrowserAnimationsModule],
                                      ...
                                    })
                                    export class YourAppModule { }`;

  importNoopAnimationsModule = `import {NoopAnimationsModule} from '@angular/platform-browser/animations';

                                    @NgModule({
                                      ...
                                      imports: [NoopAnimationsModule],
                                      ...
                                    })
                                    export class YourAppModule { }`;

  importMaterialThemeSCSS = `@import "~@angular/material/prebuilt-themes/indigo-pink.css";`;

  customMaterialTheme =
    `@import '../node_modules/@angular/material/theming';
     // Plus imports for other components in your app
     // Include the common styles for Angular Material. We include this here so that you only
     // have to load a single css file for Angular Material in your app.
     // Be sure that you only ever include this mixin once!
     @include mat-core()
     // Define the palettes for your theme using the Material Design palettes available in palette.scss
     // (imported above). For each palette, you can optionally specify a default, lighter, and darker
     // hue.
     $candy-app-primary: mat-palette($mat-indigo);
     $candy-app-accent:  mat-palette($mat-pink, A200, A100, A400)
     // The warn palette is optional (defaults to red).
     $candy-app-warn:    mat-palette($mat-red)
     // Create the theme object (a Sass map containing all of the palettes).
     $candy-app-theme: mat-light-theme($candy-app-primary, $candy-app-accent, $candy-app-warn)
     // Include theme styles for core and each component used in your app.
     // Alternatively, you can import and @include the theme mixins for each component
     // that you are using.
     @include angular-material-theme($candy-app-theme);
     `;

  stylesBeforeImportMDI = `"styles": [
        "styles.css"
      ],`;

  stylesAfterImportMDI = `"styles": [
        "styles.css",
        "../node_modules/material-design-icons/iconfont/material-icons.css"
      ],`;

  materialIconsLink = `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`;

  // 6

  systemJSModuleImport = `map: {
  'ngx-material-password-strength': 'node_modules/ngx-material-password-strength/bundles/ngx-material-password-strength.umd.js',
  }`;

  importNgxMaterialFaqModule = `import { NgxMaterialFaqModule } from 'ngx-material-password-strength';`;

  importNgxMaterialFaqModuleInAppModule = `import { NgxMaterialFaqModule } from 'ngx-material-password-strength';
                                              import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

                                              @NgModule({
                                                declarations: [AppComponent, ...],
                                                imports: [NgxMaterialFaqModule.forRoot(),
                                                BrowserAnimationsModule,
                                                 ...],
                                                bootstrap: [AppComponent]
                                              })
                                              export class AppModule {
                                              }`;

  importNgxMaterialFaqModuleInOtherModule = `import { NgxMaterialFaqModule } from 'ngx-material-password-strength';

                                                @NgModule({
                                                  declarations: [OtherComponent, ...],
                                                  imports: [NgxMaterialFaqModule, ...],
                                                })
                                                export class OtherModule {
                                                }`;

  componentExample = `<ngx-material-faq [faqList]="list"></ngx-material-faq>`;

  adminComponentExample = `<ngx-material-faq-admin [title]="'Admin'"
                          (onFAQItemAdded)="onNewFaqItem($event)">
                           </ngx-material-faq-admin>`;

  faq: FaqItem[] = [
    {
      question: 'How do I access the DOM from a controller?',
      answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
    },
    {
      question: 'Why does angular say my controllers/directives/etc are missing?',
      answer: 'Calling angular.module(\'myApp\', []) will ALWAYS create a new module (and wipe out your existing one).' +
      ' Instead, make sure to call angular.module(\'myApp\') with only 1 parameter to refer to an already created module.'
    },
    {
      question: 'How to render unescaped data?',
      answer: '$sce.trustAsHtml'
    },
    {
      question: 'Can I specify templates or partials inline?',
      answer: 'Yes! You can always do <script id="some/partial.html" type="text/ng-template"> and angular will use it instead!'
    },
    {
      question: 'How can I view the scope from the DOM inspector?',
      answer: 'Google Chrome: install the Batarang extension, inspect a DOM element, then type $scope in the console\n' +
      'Firefox / Firebug: inspect a DOM element, then type angular.element($0).scope() (or $($0).scope()) in the console\n' +
      'IE 10+: Using the F12 tool, inspect a DOM element, then type angular.element($0).scope() (or $($0).scope()) in the console.'
    },
    {
      question: 'Why is my $scope.$watch() firing recursively?',
      answer: 'If you change newVal inside your $scope.$watch(newVal, oldVal) it could fire again (recursively?).' +
      ' After a $watch() is runs, the $scope is re-evaluated and relevant watchers will be re-triggered.'
    },
    {
      question: 'When should I use $scope.$apply()?',
      answer: 'You should ONLY use $scope.$apply in non-angular events/callbacks. It usually doesn\'t belong anywhere else.'
    },
    {
      question: 'How do I .preventDefault() or .stopPropagation()?',
      answer: 'All ng-click and related bindings inject a $event object that you can call things like .preventDefault() or even pass the object to your methods'
    },
  ];

  constructor(private titleService: Title,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.titleService.setTitle('Getting Started | ngx-material-faq');
  }

  onNewFaqItem(faqItem: FaqItem) {
    console.log('on new faqItem -> ', faqItem);
    this.faq.splice(0, 0, faqItem);
  }

  showCopyMessage(content: string) {
    this.snackBar.open(`${content} copied`, 'OK', {
      duration: 3000
    });
  }

}
