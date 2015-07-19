Application Architecure
========================
This document lays out the application's architecture. It will outline where things are stored and why.

Solution Layout
-----------------------
The application's architecture starts at the project's root directory. The root directory starts at ng.NET with a solution for both Web API and MVC. Each project has their own purpose and resonsibility. 

* /BusinessLayer - Acronymed as the BL or BLL (Business Logic Layer), this project handles all business rules, workflows, and components. The business layer serves as a intermediary for data exchange between the View and the data access layer.
* /DataAccessLayer - Acronymed as the DAL, this project handles all communication to backend data. That data can be held in a database, in a file, or obtained from a service.
* /DatabaseEntites - 
* /DomainModel - In some realms this can be seen as DTO's (aka Data Transfer Objects). This project represent the subject matter of the application in terms of objects.
* /ServiceLayer - 
* /Utilities - 
* /packages - This directory represents all the dependencies/references beusing by the application via NuGet.

Front End Layout
---------------------
Due to the nature of NuGet, the client side libraries are stored in specific directories and cannot be modified. In effort to decouple the client side scripts and styles, no custom scripts or styles are stored in the same place as the libraries.

* /Content - This directory contains all the CSS libraries (aka stylesheets) that are being used in the application.
* /fonts - This directory contains all the fonts that is being utilized by either a CSS or JavaScript library in the application.
* /Scripts - This directory contains all the JavaScript libraries that are being used in the application.
* /app - This directory contains all the custom CSS and JavaScript files created for the application.