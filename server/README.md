# Easy Generator Assessment - Backend

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Features](#features)
- [Assumptions Taken](#assumptions-taken)
- [Testing](#testing)
- [Video Demo](#video-demo)
- [FAQs](#faqs)

## Description:

The backend of the full stack `Easy Generator Assessment` application that handles all the endpoints and responsible for entertaining requests. The basic purpose of this to ensure all the best security practices and techniques related to Authentication of a User.

## Getting Started:

The pre-requisites for the whole application are listed [here](https://github.com/SufyanAbbada/eg-fullstack-assessment#readme). Specifically for backend, let's dive into the specifics for the backend:

- Prerequisites: This application is built using

  - NestJS - A progressive Node.js framework
  - MongoDB - The Developer Data Platform
  - TypeScript - JavaScript With Syntax For Types
  - Jest - Delightful JavaScript Testing
  - NodeJS - Run JavaScript Everywhere
  - ... and others: like bcrypt, express, supertest and many more.

- Installation: In order to make the project up and running, you must:

  - Ensure `node` and `npm` are locally installed (optional). You can check them by running.
    - Minimum node version >=v18
    - Minimum npm version >=v8

  ```
  node -v
  npm -v
  ```

  - Ensure MongoDB is installed and running locally. You can find complete installation guide on [MongoDB Official Site](https://www.mongodb.com/).
    - Minimum MongoDB version >=v7
  - Clone the repository:

  ```
  git clone https://github.com/SufyanAbbada/eg-fullstack-assessment.git
  ```

  - Move in the project scope:

  ```
  cd eg-fullstack-assessment
  cd server
  ```

  - Install the necessary packages:

  ```
  npm install
  ```

  - Create an env file or copy the existing example to your root:

  ```
  cp .env.example .env
  ```

  - Finally start the project:

  ```
  npm run start
  ```

  - If you run these commands sequentially, most probably, you will end up with a running project but there can be some other minor issues too that can possibly rise like socket timeout while installing or node/npm version issues, so its best to surf internet to solve those issues

## Usage:

Now, as the application is up and running locally, you can use any agent to test it. You can use our [Frontend](https://github.com/SufyanAbbada/eg-fullstack-assessment/blob/main/client/README.md) or use any tool for testing APIs like [Postman](https://www.postman.com/).

Basically, this application is solely for Authentication purposes, so there are two basic routes.

- Register/Sign Up:
  - Route: `BASE_URL/users/register`: Its a `POST` request that accepts data in the form of `Body`. It necessarily requires 3 fields to properly work on, otherwise, it will respond with appropriate error, `name`, `email` and `password`
    - Example: `{ "name":"John Doe", "email": "johndoe1@gmail.com", "password": "Test1234*"}`
    - Sample Responses: `{"status": 201, "data": {"name": "John Doe", "email": "johndoe1@gmail.com"}}` and `{"status": 409, "error": "Email already exists", "description": "The provided Email is already in use. Please use another Email"}`
- Login/Sign In:
  - Route: `BASE_URL/users/login`: It is also a `POST` request that accepts data in the form of `Body` and it necessarily requires 2 fields to properly work on, otherwise, it will respond with appropriate error, `email` and `password`
    - Example: `{"email": "johndoe1@gmail.com", "password": "Test1234*"}`
    - Sample Responses: `{"status": 202, "data": {"name": "John Doe", "email": "johndoe1@gmail.com"}}` and `{"status": 404, "error": "User Not Found.", "description": "User with the provided Email was not found in the system."}`

In most of the cases, the value of `BASE_URL` will be `http://localhost:3000`. You can replace it with this or with your locally running URL.

## Features:

This project is using NestJS as the backend and thus it is using its robust features in order to make the application as secure as possible. It is utilizing:

- Services and Helpers: To make the code modular and highly scalable.
- Pipes: For Validating the data before it reaches the controller.
- Interceptors and Middlewares: Logging on the backend to see the health of the application
- E2E Testing: In order to test the application for extensibility, rigorous test cases were implemented
- Configuration: For security purposes, Configurations are stored securely in Environment variables.
- Helmet and Rate Limiting: Both of these are specially incorporated to prevent the application from security risks, bottlenecks and trojan horses.
- Appropriate Responses: Each request responds with informative response, status codes and description that is helpful in finding the issue.

## Assumptions Taken:

Several assumptions were made during the development of the application:

1. **Returning Name and Email on successful Login**: Its a common practice to return the `/login` route with a token that the Frontend will store and share with headers in the subsequent requests for authorization, but as this wasn't a requirement here, so it was omitted and now the response of the login route includes Name and Email of the user, after successful authentication.
2. **Name and Email Validations**: Validations on these two fields weren't required by the shared requirements but its always better to make your project perfect from all edges.
3. **Status was shared as a part of the response object**: It can be helpful in deciding the nature of the response just by comparing the status code rather than the whole response object.

## Testing:

End-to-end (E2E) testing ensures that an entire system functions correctly from start to finish, verifying integration and performance across all components and user workflows. Therefore, rigorous testing is done with all the edge cases and you can run them using:

```
npm run test:e2e
```

## Video Demo:

https://www.loom.com/share/67d005270aa242b586fcc6bc55b56613?sid=c6282d57-aff0-44da-becb-b054a311c254

## FAQs

In order to share your comments, or if you find any issues within the code, feel free to open a new issue or PR.

If you want to personally reach out to me or want your dream Web Application to come true in the form of a working website, drop an email at sufyan.abada.sa@gmail.com or visit [My Personal Website](https://sufyanabbada.com/) anytime.
