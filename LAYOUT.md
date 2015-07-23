Application Architecure
========================
This document lays out the application's architecture. It will outline where things are stored and why.

Solution Layout
-----------------------
The application's architecture starts at the project's root directory. The root directory starts at ng.NET with a solution for both Web API and MVC. Each project has their own purpose and resonsibility. 

* /BusinessLayer - Acronymed as the BL or BLL (Business Logic Layer), this project handles all business rules, workflows, and components. The business layer serves as a intermediary for data exchange between the View and the data access layer. Moreover, this project represents the subject matter of the application in terms of objects.
* /DataAccessLayer - Acronymed as the DAL, this project handles all communication to backend data. That data can be held in a database, in a file, or obtained from a service.
* /ServiceLayer - This project works closely with the controller. This layer communicates primarily with web services, the data access layer, and business layer.
* /Utilities - This project is strictly to house commonly used utitilies. These utilities could be Extensions, Serializers, Parsers, Loggers, etc.
* /packages - This directory represents all the dependencies/references beusing by the application via NuGet.

Front End Layout
---------------------
Due to the nature of NuGet, the client side libraries are stored in specific directories and cannot be modified. In effort to decouple the client side scripts and styles, no custom scripts or styles are stored in the same place as the libraries.

* /Content - This directory contains all the CSS libraries (aka stylesheets) that are being used in the application.
* /fonts - This directory contains all the fonts that is being utilized by either a CSS or JavaScript library in the application.
* /Scripts - This directory contains all the JavaScript libraries that are being used in the application.
* /app - This directory contains all the custom CSS and JavaScript files created for the application.
* /app/css - This directory contains all the custom CSS.
* /app/fonts - This directory contains any non-standard fonts.
* /app/images - This directory contains all images utilized in the UI.
* /app/js - This directory contains all javascript created for the application.
* /app/js/controllers - This directory contains all javascript pertaining to controllers. Predominantly, controllers for directives.
* /app/js/directives - This directory contains all javascript outline custom made directives.
* /app/js/filters - This directory contains all javascript built for filtering.
* /app/js/resources - This directory contains all javascript that utilizes the angular's $resource functionality.
* /app/js/services - This directory contains all javascript that is a service. This could javascript that uses angular's $factory or $service.
* /app/views - This directory contains all the custom made HTML. This can be HTML for directives or for pages of the application.