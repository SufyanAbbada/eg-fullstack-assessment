# EasyGenerator Assessment

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Major Features](#major-features)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Possible Improvements](#possible-improvements)
- [Video Demo](#video-demo)
- [FAQs](#faqs)

## Description

This is the full stack `Easy Generator Assessment` application, encompassing both frontend and backend functionalities to provide a seamless user authentication experience. The frontend offers an intuitive UI for user interactions, while the backend handles API requests securely and efficiently.

In order to see the detailed documentation on a specific end, please feel free to visit [Frontend](https://github.com/SufyanAbbada/eg-fullstack-assessment/tree/main/client#readme) or [Backend](https://github.com/SufyanAbbada/eg-fullstack-assessment/tree/main/server#readme)

## Technologies Used

- **Frontend**: ReactJS, MaterialUI, Formik, TypeScript, Toastify, Yup
- **Backend**: NestJS, MongoDB, TypeScript, Jest, Bcrypt, Express

## Installation and Setup

1. **Prerequisites**: Node.js (>=v18), npm (>=v8), MongoDB (>=v7)
2. **Clone the repository**:

```
git clone https://github.com/SufyanAbbada/eg-fullstack-assessment.git
cd eg-fullstack-assessment
```

3. **Install dependencies**:

```
npm run install
```

4. **Environment Setup**: Ensure `.env` files are correctly set up in both `client` and `server` directories as per the provided `.env.example`.
5. **Start the application**:

```
npm start
```

## Major Features

- **Registration and Login**: Secure authentication flow with detailed validation and feedback.
- **Interactive UI**: Responsive and visually appealing user interface.

## Usage

Navigate to:

- `BASE_URL/register` for registration.
- `BASE_URL/login` for login.

## API Reference

Interacts with secure endpoints:

- `POST /users/register`: Registers a new user.
- `POST /users/login`: Authenticates a user.

## Possible Improvements

- **Redis Layer**: Implementing a Redis layer could enhance session management and scaling by caching frequent requests. This would reduce response times and decrease load on the backend for common queries, potentially increasing overall system performance.

- **Name Sanitization**: Enhancing name field sanitization to filter out offensive or inappropriate words could improve user experience and maintain a professional tone across the platform. This measure could also comply with broader content moderation standards.

- **Email Confirmation**: Adding email confirmation for new registrations could further secure the registration process by verifying the authenticity of email addresses. This step could help prevent spam and unauthorized account creation, ensuring that only legitimate users gain access.

- **Throttle Handling**: Disabling the submit button when a throttle exception occurs could prevent users from sending too many requests in a short period. This could enhance the system's stability and prevent potential abuse, maintaining service availability during high traffic.

- **UI Consistency**: Making the SignUp and Login forms more consistent in terms of design and validation feedback could improve the user interface's intuitiveness. Uniformity in these forms could lead to a smoother user experience, reducing confusion and potential user errors during authentication.

- **Token-Based Authentication**: Introducing token-based authentication could enhance security and user session management. Currently, the system returns name and email upon successful login, which could be supplemented with a secure token. This token could be used in subsequent requests to verify user identity and authorization, aligning with industry-standard security practices and enabling more robust control over user sessions.

## Video Demo

[Frontend Demo](https://www.loom.com/share/a743b0465728475cad0a62ddb56f2b9a)

[Backend Demo](https://www.loom.com/share/67d005270aa242b586fcc6bc55b56613)

## FAQs

It is highly recommended to navigate to Frontend's and Backend's respective Repositories for detailed discussion on each specific end

In order to share your comments, or if you find any issues within the code, feel free to open a new issue or PR.

If you want to personally reach out to me or want your dream Web Application to come true in the form of a working website, drop an email at sufyan.abada.sa@gmail.com or visit [My Personal Website](https://sufyanabbada.com/) anytime.
