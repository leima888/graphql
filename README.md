This is an Apollo GraphQL (node.js express) Server. It contains a sample GraphQL schema and data models. It is connected to a mysql database via ssh and performs sample records creation and queries. It serves a GraphiQL UI where GraphQL queries can be entered and results displayed.

## Getting started

Install node.js (current version).

Build ssl tunnel to the database host :
ssh -NL 33060:localhost:3306 74.217.68.77 -l dynavisor
enter your password when prompted.

Open up a new session (window)
git clone https://github.com/leima888/graphql.git
cd [whereTheProjectIsCloned]
npm install
npm start


Then open http://localhost:3000/graphiql using a browser

Then you can paste the queries (one at a time) on the left side of the page
and hit the play button (cmd-return) to see the results on the right side.

The main entry point of the server is server.js. For schema, models and resolvers, look in the data folder (schema.js, connectors.js and resolvers.js).




