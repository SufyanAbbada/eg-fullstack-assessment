# EasyGenerator Assessment - Frontend

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Major Features](#major-features)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Assumptions Taken](#assumptions-taken)
- [Video Demo](#video-demo)
- [FAQs](#faqs)

## Description:

This is the frontend of the full stack `Easy Generator Assessment` application that provides a friendly UI to the Users to interact with the application. It uses [EasyGenerator Assessment - Backend](https://github.com/SufyanAbbada/eg-fullstack-assessment/tree/main/serve) to run properly.

## Technologies Used:

This Frontend is made up of some popular tools and technologies including:

- ReactJS - The library for web and native user interfaces
- MaterialUI - The React component library you always wanted
- Formik - Build forms in React, without the tears
- TypeScript - JavaScript With Syntax For Types
- ... and many others: like create-react-app, node, toastify, yup and more

## Installation and Setup:

In order to run the project smoothly, you can follow the below given steps:

1. Ensure `node` and `npm` are locally installed (optional). You can check them by running.
   - Minimum node version >=v18
   - Minimum npm version >=v8

```
node -v
npm -v
```

2. Ensure you have the Backend Project up and running. (If not, you can follow the guide [here](https://github.com/SufyanAbbada/eg-fullstack-assessment/blob/main/server/README.md))

3. Clone this repository:

```
git clone https://github.com/SufyanAbbada/eg-fullstack-assessment.git
```

4. As this is the frontend, so navigate to the respective directory:

```
cd eg-fullstack-assessment && cd client
```

5. Now, create an env file of your own with necessary variables or copy the existing example to your root:

```
  cp .env.example .env
```

6. Before starting the app, just install the necessary packages by running:

```
npm install
```

7. Now you can finally start the application to see its beauty:

```
npm start
```

- If you run these commands sequentially, most probably, you will end up with a running project but there can be some other minor issues too that can possibly rise like missing create-react-app or node/npm version issues, so its best to surf internet to solve those issues.

## Major Features:

This application enables you to feel the working of an authentication application using basic Register and Login functionalities. The UI is made so friendly that the User gets good visual responses upon every request. Therefore, the major features include:

1. **Registration**: A user can register to the application by providing his name, Email and Password. These are accepted, validated and sanitized. Like,
   - Name is required with at least 2 characters and there couldn't be any numbers or special characters
   - Email is required in a proper format
   - Password is thoroughly checked by validating the presence of:
     - Minimum length of 8 characters
     - Contains at least 1 letter.
     - Contains at least 1 number.
     - Contains at least 1 special character.
2. **Login**: Once Registered, User can Login to the system and access the Welcome page by providing his already saved credentials. This page too is backed with proper UI helpers from Frontend and from Backend as well. It only checks:
   - Email: With the similar criteria as above
   - Password: With the similar criteria as above

## Usage:

Once the application starts running, you can simply navigate to either `Register` page or `Login` page by visiting `BASE_URL/register` and `BASE_URL/login` routes respectively. Now you can Register and Login using the UI.

BASE_URL will be `http://localhost:8080` until you haven't customized that in your environment variable file.

## API Reference:

As discussed earlier, this application interacts with the Backend API. As the endpoints are secure, so the endpoints this application is interacting with are:

- `BACKEND_URL/users/register`: It accepts a POST request with `name`, `email` and `password` attributes and responds in JSON.
- `BACKEND_URL/users/login`: It also accepts a POST request with only `email` and `password` attributes and responds in JSON as well.

`BACKEND_URL` is either `http://localhost:3000` or the one you customized yourself.

## Assumptions Taken:

1. **Extra Sanitization and Validation**: Although Name and EmailValidations weren't required as such but I implemented it anyway for better results.
2. **Password Validation Helper Absent in Login**: Although the Email and Password are intensively checked but initial help wasn't given to the user, so only those users who had registered and known about the validations can login, to prevent too many requests.

## Video Demo:

https://www.loom.com/share/a743b0465728475cad0a62ddb56f2b9a?sid=14e88224-5802-414e-a66f-10def0e4b4f6

## FAQs

In order to share your comments, or if you find any issues within the code, feel free to open a new issue or PR.

If you want to personally reach out to me or want your dream Web Application to come true in the form of a working website, drop an email at sufyan.abada.sa@gmail.com or visit [My Personal Website](https://sufyanabbada.com/) anytime.
