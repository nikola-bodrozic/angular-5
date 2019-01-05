# Angular 5 

## Docker
* `docker build -t ang5dock .`
* `docker run -it -v ${PWD}:/usr/src/app -p 4200:4200 ang5dock`
* `docker start 01579dee`
* `docker stop 01579dee` 

## Install
* in project folder run `npm install` to get Node dependancies
* run `composer require lcobucci/jwt` in `/var/www/html` to install PHP library for JWT token
* copy file i4.php in `/var/www/html` file has to available on `http://localhost/i4.php`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`

## tests
* run `ng e2e` to run protractor end 2 end tests

## Features
* authorisation with JWT. The backend code is in file i4.php
* submitting form
* return url for login
* Route Guard
