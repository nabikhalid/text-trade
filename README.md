# GPA Calculator
Server Side Web Development (REST API) Project, GPA Calculator.

As a student, I am constantly checking my GPA for eligibility for certain programs my school has to offer. This handy tool lets students swiftly input their courses, grades, and credits to obtain an overall GPA (CGPA).  

## Set Up
1. Install [Node](https://nodejs.org/en/).
2. Open terminal and cd to project directory. 
3. `npm init --yes`
4. `npm i express`
5. `node index.js`
6. Visit localhost:3000 on your browser.

## How to use
This project will require some (very little) programming knowledge to use. 
Due to the fact that this project lies predominantly in the backend, users will have to install and use [postman](https://www.postman.com/downloads/) to make requests to the API.

* To input a course, make a `post` request to `localhost:3000/api/input` with the following JSON syntax:
```
{
  "id": "course name",
  "grade": "A",
  "credits": 3
}
```
On a 9-Point scale, grades range from A+, A, ... , D+, D, E, F. Valid credits include 0, 1, 2, 3, 6.
* To calculate GPA, once all of your courses are input, make a `get` request to `localhost:3000/api/getgpa`.
* To view the courses in the database, make a `get` request to `localhost:3000/api/courses`.
* To view a course in the database with a given ID, make a `get` request to `localhost:3000/api/courses/ID`.
* To change the ID, grade, or credits of a course already in the database given an ID, make a `put` request to `localhost:3000/api/ID` with the JSON syntax highlighted above.
* To delete a course in the databse given an ID, make a `delete` request to `localhost:3000/api/courses/ID` with the JSON syntax highlighted above.
