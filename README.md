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

When you paste this on the left side of the page:

{
  author(firstName: "Giuseppe", lastName: "Hyatt") {
    firstName
    lastName
    posts {
      title
    }
  }
}

and hit the play button (cmd-return), then you should get this on the right side:

{
  "data": {
    "author": {
      "firstName": "Giuseppe",
      "lastName": "Hyatt",
      "posts": [
        {
          "title": "A post by Giuseppe"
        }
      ]
    }
  }
}

The main entry point of the server is server.js. For schema, models and resolvers, look in the data folder (schema.js, connectors.js and resolvers.js).




