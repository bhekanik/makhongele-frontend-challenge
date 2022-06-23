# Movies Client

Your team has been tasked with building out a new movies listing app. The app will allow different users to keep list of movies within the app.

A junior colleague has begun the skeleton of the app, but is unable to finish before heading out on vacation. Your task (should you accept it) is to complete the new app so that it's ready for the next team demo. Please include some notes for your colleague about the major changes you made and why.

## Acceptance Criteria

[] The app currently uses a GraphQL API but the team has decided against it in favour of REST. Change the app from using GraphQL to using REST. Feel free to change out ApolloClient for something else. We're fans of [React-Query](https://react-query.tanstack.com/) but use what you like.
[] Your colleague has already added an Upload From Movies File button in the UI that opens an upload modal. You need to add functionality to this button to select a text file and then add the movies to the database. The format of the file is `.txt`. A sample of this file can be found in the `sample_movies.txt` file.
[] Your colleague is new to testing a React application so they just made followed a random blog post to add tests. Take a look at their approach and see if you can improve the existing test strategy and existing tests.
[] Fix any failing tests and missing tests.

## Design mockups

The team doesn't have a designer yet. So feel free to make any notes of feedback you might give to your colleague about the design.

## What we are looking for

The focus of this exercise is to assess your thought process and how you work. Don't worry about getting everything completely finished. If you don't have enough time, do as much as you can. You can also tackle the task in pieces and in whatever order makes sense to you.

Our main priorities are to assess (technical):

- JavaScript
- TypeScript
- React
- NextJS
- Testing
- Data fetching
- State management

We will also be interested in (non-technical):

- Critical thinking
- Communication (documentation, reasoning)
- How you think

## Notes for your colleague

- Add the notes for the junior colleague that wrote the initial code here.

## Note for the interviewers

- Add the notes for the interviewers here.

## How to work with this repository

This is a basic NextJS app that uses [`json-graphql-server`](https://www.npmjs.com/package/json-graphql-server) to create a "fake" GraphQL API for the purpose of persisting the movies. The data is in the `db.js` file. Your colleague had already setup [`json-server`](https://github.com/typicode/json-server) to create a "fake" REST API for the movies.

### To get started

1. To run the client app in development ensure you're have Node js 12.x or higher installed on your system.
2. Run `yarn` to install the dependencies
3. Run `yarn server`. This should start the `json-graphql-server` on port at <http://localhost:7002>.
4. Run `yarn server-rest`. This should start the `json-server` on port at <http://localhost:7003>.
5. On a different terminal tab, run `yarn dev`. This should boot up the development server at <http://localhost:7000>.

You can now access the app on <http://localhost:7000>. You can also access the GraphiQL tool for the server at <http://localhost:7002>. You need to have the server running to get full functionality.

### Unit tests

To run the tests use `yarn test`
To run the tests and update snapshots use `yarn test -u`

### Help

Any trouble? Questions? Please don't hesitate to reach out to <bhekani@makhongele.co.za> and I'll respond as quickly as possible.
