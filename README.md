ng.NET
=========
ng.NET is a ASP.NET MVC template project using AngularJS, AngularUI, Bootstrap, Entity Framework, and jQuery. The demo code is inspired by the Mark Zamoyta tutorial on AngularJS Forms using Boostrap and MVC5 and the Deborah Kurata tutorial on Angular Front to Back with Web API.

The design utilized is the N-Tier Layered Application. The layers consist of a Data Access layer, Business layer, and Service layer. Other projects have been created to decouple other pieces of functionality to promote reuse such as the Database Entities (generated from Entity Framework), Utilities, and the Domain Model (to be used by the view).

Disclaimer
-----------
Please keep in mind this design is not the know all, catch all. Some developers prefer not to utilize a domain model if the database is elegantly normalized. Some developers like to utilize DTO's. Some developers like to work in ViewModels along with Domain models. This is all personal preference and at the end of the day, as developers we all are concerned with "speed to market", reusability, and maintainability. I hope this project helps others reach their goals with a structured, layered application that is enjoyable with C# and AngularJS. 

Version
----
0.1

Installation
--------------
Download (Not to be confused with NuGet Packages):

* .NET Framework 4.5
* Chutzpah (JavaScript Test Runner for Test Explorer)
* PhantomJS (Headless Browser for ReSharper JavaScript Unit Testing)
* Angular-Mocks 1.4.2
* Jasmine Spec Runner

Dependencies
----
Libraries and Frameworks downloaded via NuGet can be seen in each project folder at the packages.config file.

To-do
------
A list of todo's for the project

* Bug: When the application is refreshed after routing from client-side throws 404 error.
* New Feature: Possibly create one last project to represent mapping the domain objects to the database entities and vice versa?
 
Links
----
Links associated with the project associated to solve problems.

* [VisualStudio .gitignore file](https://github.com/github/gitignore/blob/master/VisualStudio.gitignore)
* [ASP.NET MVC with AngularJS & Bootstrap](http://www.pluralsight.com/courses/angularjs-forms-bootstrap-mvc5)
* [Minification and Dependency Injection with Angular](https://docs.angularjs.org/tutorial/step_05)
* [Using HTML5 mode routing for Angular Routing](https://docs.angularjs.org/error/$location/nobase)
* [Running JavaScript unit tests with ReSharper using JasmineJS & PhantomJS](https://blogs.endjin.com/2014/09/unit-testing-angularjs-with-visual-studio-resharper-and-teamcity/)
* [Angular Unit Test for .NET Developers](http://www.pluralsight.com/courses/angularjs-dotnet-developers)
* [Domain Driven Design](https://msdn.microsoft.com/en-us/magazine/dn342868.aspx)
* [Are Entity and Domain objects the same?](http://stackoverflow.com/questions/26739006/should-entities-in-domain-driven-design-and-entity-framework-be-the-same)
* [Entities as Models in the View?](http://programmers.stackexchange.com/questions/257507/should-an-asp-net-mvc-application-directly-use-entity-framework-as-the-model)
* [Layered Application Guidelines](https://msdn.microsoft.com/en-us/library/ee658109.aspx)
* [Service Layer Architecture in the Enterprise](http://martinfowler.com/eaaCatalog/serviceLayer.html)
* [Business Layer Guidelines](https://msdn.microsoft.com/en-us/library/ee658103.aspx)
* [Service Layer Guidelines](https://msdn.microsoft.com/en-us/library/ee658090.aspx)
* [Data Access Layer Guidelines](https://msdn.microsoft.com/en-us/library/ee658127.aspx)
* [Enable CORS](https://github.com/bigfont/webapi-cors)
* [Angular with WebApi](http://www.pluralsight.com/courses/angular-web-api-front-back)
* [ASP.NET Identity to Pre-Existing Project](http://httpjunkie.com/2013/311/adding-mvc-5-identity-to-an-existing-project/)
* [Token based authentication with ASP.NET Web Api](http://bitoftech.net/2014/06/01/token-based-authentication-asp-net-web-api-2-owin-asp-net-identity/)