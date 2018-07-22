import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FaqItem} from '@angular-material-extensions/faq';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  faq: FaqItem[] = [
    {
      question: 'Why does it think the jQuery plugin is missing?',
      answer: 'Remember: load jQuery before AngularJS if you are using jQuery plugins!'
    },
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
      question: 'How can I watch when an array/object/$resource-result is modified?',
      answer: '$scope.$watch has a third parameter to monitor changes by value (and not by reference).'
    },
    {
      question: 'How can I serialize form data for submitting?',
      answer: 'Don\'t. Don\'t try to collect input values manually. Just attach' +
      ' ng-model="data.myField" onto every form input and take a look at $scope.data when you finally need it.'
    },
    {
      question: 'Don\'t. Don\'t try to collect input values manually. Just attach' +
      ' ng-model="data.myField" onto every form input and take a look at $scope.data when you finally need it.',
      answer: '$rootScope is equivalent to the ng-app tag and can be injected into your bootstrap or services ' +
      'to add functions and values accessible on all scopes.\n' +
      'NOTE: avoid doing this - it\'s the equivalent to defining global variables'
    },
    {
      question: 'How do I prevent Flash Of Unstyled Content (FOUC) (and curly braces)?',
      answer: 'Leverage ng-bind instead of {{...}} and ng-cloak in a few places'
    },
    {
      question: 'Can I specify templates or partials inline?',
      answer: 'Yes! You can always do <script id="some/partial.html" type="text/ng-template"> and angular will use it instead!'
    },
    {
      question: 'How do I use a port in my ngResource url?',
      answer: 'Escape it: $resource(\'example.com\\\\:8080\')'
    },
    {
      question: 'Why do plugins that trigger the change event not seem to work?',
      answer: 'Angular watches the input event, not the \'change\' event.'
    },
    {
      question: 'How can I view the scope from the DOM inspector?',
      answer: 'Google Chrome: install the Batarang extension, inspect a DOM element, then type $scope in the console\n' +
      'Firefox / Firebug: inspect a DOM element, then type angular.element($0).scope() (or $($0).scope()) in the console\n' +
      'IE 10+: Using the F12 tool, inspect a DOM element, then type angular.element($0).scope() (or $($0).scope()) in the console.'
    },
    {
      question: 'Do you have any good directive samples / libraries?',
      answer: 'AngularUI is an awesome collection of AngularJS tools (and even BETTER example code).'
    },
    {
      question: 'Do I have to use the # for the router?',
      answer: '$locationProvider'
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
      answer: 'All ng-click and related bindings inject a $event object that you can call things like ' +
      '.preventDefault() or even pass the object to your methods'
    },
  ];

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('@angular-material-extensions/faq');
  }

  editOnStackBlitz() {
    sdk.openGithubProject('angular-material-extensions/faq/tree/master/demo');
  }

  onNewFaqItem(faqItem: FaqItem) {
    console.log('on new faqItem -> ', faqItem);
    this.faq.splice(0, 0, faqItem);
  }

}
