# Angular
Angular a frontend framework that allows us to easily create single page applications

## SPA (Single Page Application)
- Traditionally, all websites were a directory that contained html, css, js files that were hosted on the web
- So even in more dynamic websites, server was rendering these html pages for us and serving them.
    - This technique is called "Server side rendering"
    - The client (aka your web browser) sends an http request to the server and then the server responds with html/css/js resources
- Couple drawbacks:
    - These(html/css/js files) are kinda big
    - There are things that are repeated across many pages that needs to be constantly re-rendered (it's wasteful)

- So what if, we get all our html/css/js files in the initial request, and assemble these webpages dynamically on the go, while just receiving the data we need?
    - any subsequent http request beyond the initial one is much smaller (because json < html/css/js)
    - Allows us to stop rendering the same stuff over and over again (Faster performance)
- Drawbacks to SPA:
    - The initial request can be large

## Commands
- To install angular:
    - `npm install -g @angular/cli`
- all angular commands start with `ng`
- To create a new angular app:
    - `ng new your-app-name`
- To serve (aka dotnet run)
    - `ng serve` (and this will run the dev version)
- To get deployable artifacts
    - `ng build`
- To generate a component
    - `ng generate component comp-name`
    - `ng g c name`
- To generate a service
    - `ng g s service-name`
- to create a module
    - `ng g m module-name`

## Angular Build process
- Webpack Bundling
- Minification

## Decorator
This is a special angular syntax that lets the framework know that the following class is angular's resource
They all start with @ symbol
- @NgModule (to let angular know that this is angular's module)
- @Component (this is angular's component)
- @Injectible (put on top of services)
- These decorators, contain angular specific configuration

## Module
- Angular module is a way to bundle related components together and manage their dependencies. It's simply a typescript class with ngModule angular decorator

## Component
- They are smallest unit of reusable views with its own style, logic, and testing files
- They must belong in ONE angular module
- Register them by including it in Declarations array in module decorator

## Services
- Services are reusable pieces of logic. These just contain typescript and test file, and not the html and css files.

## Directive
We use directives to bring programmatic functionality to html. *ngIf/else, *ngSwitch, *ngFor, *ngClass are all examples of directives.
Two(Three) different categories of directive
- Structural Directive : changes the structure of your html page
    - ex. *ngIf, *ngFor, *ngSwitch

- Attribute Directive : changes attributes of your html tags
    - ex. *ngClass, *ngStyle, *ngModel

- Component is technically a directive, but because of its importance, it usually gets mentioned as its own thing

## Model Binding
- One Way Binding
    - Event Binding
        - syntax: `(<event-name>)`
        - `(click)="clickEventHandler()"`
        - `(dblclick)`
    - Attribute Binding
        - syntax: `[attr-name]`
        - ex. `[class]=variableNameInComponentTS`
    - String Interpolation
        - syntax: `{{varName}}`

- Two Way Binding
    - both the view (html file) and the logic (the ts file) updates each other
    - Syntax: `[(modelName)]` 'banana box'
    - very commonly used in template-based forms `[(ngModel)]`

## Lifecycle hooks
In each angular component's life time (from initial render to destruction), there are many different events or stages it goes through. As developers, we can subscribe to those events using lifecycle hooks to do something whenever those events are triggered. 

For example, if you want to do some DOM manipulation once the component renders, you can put that logic in ngOnInit function, or if you want to clean up some resources when angular destroys the component, do so on ngOnDestroy. ngDoCheck is particularly useful if you're relying heavily on an external library that angular is not aware of. 

## Angular Forms
Angular offers two ways of creating forms

### Template Based Form
These are good for creating simple forms. Most of the configuration is done on the template(html) side. Two way binding is used extensively in template based forms. Forms Module is required for Template Based Form

### Reactive Form
Reactive forms are built and configured on typescript side rather than on the template. It is the recommended way of building forms if the forms are more complex. We'll use both Reactive Forms Module and Forms Module for this type form. 

## Pipes
Pipes in angular provides a quick and easy way to format data in templates
https://angular.io/guide/pipes
- json
- async
- date
- upper/lower, etc.

## Routing
Angular provides its own in app routing through router module
It's important to realize that angular's in app routing DOES NOT REFRESH the browser. This subroutes simply let the framework know which component to renter instead of  the pre-defined placeholder.
### Things you'll need
- Router Module
    - This is angular Module that has the defined route table
- Route Table
    - Inside the router module, you'll define the route table- an array of objects that maps each route to a matching component
- RouterOutlet
    - This is the placeholder tag that angular will swap out with appropriate component according to the route

### Router Notes
- SPA's do not work too well with refreshes unless you save the application state in semi-durable/durable source
    - Instead of using href attribute in anchor tags, use angular's directives for routing, such as routerLink
- You can navigate to different routes in typescript too! Use Route class
- In order to get the current route, use activated route class