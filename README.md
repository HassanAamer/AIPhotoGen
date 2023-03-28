# AI Photo Generation Website

The basic website was made as a part of the Fireship.io Javascript course, which was then expanded upon with a more responsive and complex layout and additional features.

The website can be accessed at https://app.hassanaamer.com

## Components

### __Tools Used__

Front End:

* HTML
* CSS
* Native JavaScript

Back End:

* NodeJS
* ExpressJS
* OpenAI REST API

Deployment:

* NGINX
* Linode VPS
* SSL certification using LetsEncrypt and Certbot

### __Front End__

The front-end is developed with a responsive layout under a mobile-first approach with added complexity for desktop viewports using @media queries.

The app takes a prompt from the user and communicates with the back end to recieve an image URL which it displays.

### __Back End__

The Back end processes the GET and POST requests to the server by serving the required front-end files, and communicating with the OpenAI API, respectively.
