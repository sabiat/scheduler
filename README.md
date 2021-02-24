# Interview Scheduler

Scheduler is a single-page app built using React that allows users to book, edit and cancel appointments. Data is persisted by the API server using a PostgreSQL database. This app was built following the practices of Test Driven Development utilizing Jest tests throughout development.

## Screenshots

List of appointments on selected day:
![View of all appointments on selected day:](https://github.com/sabiat/scheduler/blob/master/docs/Schedule%20view.png?raw=true)

Form with input field to create/edit appointments:
![Form with input field to create/edit appointments:](https://github.com/sabiat/scheduler/blob/master/docs/Form%20view.png?raw=true)

Confirmation before proceeding with deleting appointments:
![Confirmation before proceeding with deleting appointments:](https://github.com/sabiat/scheduler/blob/master/docs/Confirmation%20view.png?raw=true)

Status message shown during asynchronous operations (saving/deleting):
![Status message during asynchronous operations](https://github.com/sabiat/scheduler/blob/master/docs/Status%20View.png?raw=true)


## Testing Frameworks
- Storybook
- Jest
- Cypress

## Setup

1. Fork and clone this repository 
2. Install dependencies with `npm install`.
3. Fork and clone [scheduler-api](https://github.com/lighthouse-labs/scheduler-api) and follow instructions to install dependencies and set up the database.
4. Run the API server with `npm start` in the scheduler-api directory.
5. Run the Webpack Development Server with `npm start` in the scheduler directory.

### Running Jest Test Framework

```sh
npm test
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```



