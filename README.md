# Backend Engineer - NodeJS Challenge - Solution
---

## Context
---
A JSON REST API for a task management application.

## Used Technologies
---
- Node.JS: Backend API
- Heroku: Deployment of the API
- Postgres: Database
- Google Cloud Platform: Deployment of the Database
- React.JS: Minimal UI with the Create Task functionality only

## Backend: NodeJS
---
### Getting started
In the main folder, you can run:
`npm install`

After all the dependencies get installed, run:

`npm start`

## Frontedn: React.JS
---
### Running locally
In the main root folder, run on your terminal:
`cd client`

and:
`npm start`

## Checking the other routes
---
I have used **Postman** to check the *GET* and *PUT* routes. Alternatively, **Insomnia** also can be used for it.

### GET - /tasks/:id
---
Notes:

- It shows a task selected by its id.

### GET - /tasks?limit=N
---
Notes:

- In order to test this endpoint, try: **/tasks/limit/:N**
- It shows a list of *N* tasks.


## Link of the deployed UI application
---
[Task - Application](https://gnar-tasks.herokuapp.com/)

## Notes
---
For the sake of timing and technologies use, the Postgres Database was published in the **Google Cloud Platform**.
It can run locally. The necessary structure of the DB is in the *database.js* file.
Also, there is a option to upload the DB in the **AWS Free Tier** or **Heroku**.
