# W05D05 - Mid-term Project Kickoff

### Outcomes
* heavily team-based
* learning how to colloborate
* development is not solo
* real-world simulation
* review everything learned so far

### Pick a project

### User Stories
* describe how/why a user will interact with our app
* As a _____, I can _____, because ______

* As a logged-in user, I can see a list of available maps, because I am interested in things in my area
* As a user, I can save a blog post, because I want to review it later

* As a user, I can save a blog post, because I want to review it later AND the heart icon turns red

* As a non-logged in user, I cannot edit pins on a map, because they don't belong to me

### Nouns are resources
* Entity in our ERD

### Routes
* We need to be able to CRUD our resources
* RESTful routing

GET /alltheusers
GET /themaps

B GET   /pins/
R GET   /pins/:id
E POST  /pins/:id
A POST  /pins
D POST  /pins/:id/delete

R GET /maps/:map_id/pins
R GET /users/:id/blog_posts
R GET /products/:id/reviews

B GET     /pins/
R GET     /pins/:id
E PATCH   /pins/:id
A POST    /pins
D DELETE  /pins/:id

mkdir planning
user-stories.md
erd.png

### MVP
* Minimum viable product
* @KV Minimum viable demo (MVD)
* If you're not going to show it, don't build it
* "Wouldn't it be cool if..."

### Front End
* wireframes/mockups
* low fidelity is better

### User Login
* don't do it

```js
app.get('/login/:user_id', (req, res) => {
  // encrypted cookies
  req.session.user_id = req.params.user_id;

  // plain text
  res.cookie('user_id', req.params.user_id);

  // send them somewhere
  res.redirect('/');
});
```

http://localhost:3000/login/5

### Tech Choices
* Front End: HTML, CSS, JS, jQuery, SCSS, flexbox, bootstrap
* Back End: Node, Express, Postgres

### Git
* has an established workflow
* merge conflicts


working on a branch
commit to the branch

checkout master
pull master
checkout my branch
merge master into my branch

### SPA vs Multi-page
* Not mutually exclusive

### DO NOT CODE ON MASTER

### How to split up the work
* Vertically - everyone working on diff layers
* Horizontally - everyone working on the same layer
* Pair Programming

### Communication
* Slack, imessage, discord, google hangouts/meet, Zoom, tin cups











