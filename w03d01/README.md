# W03D01 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware

3 pillars of web dev
Back end (server side)
Front end (client side)
Data persistence (database)


http://localhost:8080/u/z99qwr

### Web Servers
* application running on someone's computer
* has access to some data (user info, images, videos, documents, HTML, CSS, JS)
* listen for incoming requests, and respond appropriately


HTTP  Request
TCP   Client <========================> Server
        IP                                IP:port

### Port
* ports are like apt numbers
* 65535 ports for every internet connection
* 3000 dev, 80 http, 443 https, 5432 postgres

Vagrantfile
3000
8000
8001
5432

### Requests
* Method/verb - what do we want to do?
  * GET => retrieve information
  * POST => send information
* Path/url - what do we want to do it to?
  * `/login`, `/logout`, `/new-url`

### DNS
* Domain Name Server/Service
* www.google.com => 192.168.11.12

### Middleware
* code that sits between the request and the response

### Response
* status code
* 1xx => internet routing (100, 101)
* 2xx => everything is a-okay (200, 201)
* 3xx => redirection (301, 302)
* 4xx => not allowed (404, 400, 401)
* 5xx => server problems

```js
if (status >= 200 && status < 400) {}
```

