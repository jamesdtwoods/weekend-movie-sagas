
# Weekend Movie Sagas

## Description

_Duration: one weekend_

This was my first web app using saga functions to handle transfer requests. 

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [pg-pool](https://www.npmjs.com/package/pg-pool)
- [Postico](https://eggerapps.at/postico/v1.php) - or any other database client
- [Postgres](https://www.postgresql.org/) - or any other database manager
- [nodemon](https://www.npmjs.com/package/nodemon) - far from necessary, but a helpful tool to keep your server up to date with any js changes you make.
- react 
- react-dom
- react-redux
- react-router-dom
- react-scripts
- redux-logger
- redux-saga
- [Material UI](https://mui.com/material-ui/getting-started/) - or your styling library of choice


## Installation

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Users can view additional movie details by clicking on the "Learn More" button 
2. Users can edit movie details and return to the movie list by clicking on the buttons on the page
3. Users can also add a new movie from the list view

## Future goals
* Further Material UI styling
* Allowing users to edit genres on the edit movie page
* Allowing users to add multiple genres on the new movie page
* Search functionality for title and genre

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) (especially all the chefs in the Moonstone cohort and our most patient and thoughful instructor Matt) who gave me the tools and confidence to make this application a reality.

## Support
If you have suggestions or issues, you can find my contact information on my [LinkedIn profile](https://www.linkedin.com/in/james-d-t-woods/)
