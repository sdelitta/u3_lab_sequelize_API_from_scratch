# Express Sequelize Practice

## Instructions
Your deliverable is to create a Node/Express/Sequelize server that can be queried externally. To test this, you'll need to use tools like Insomnia or Postman.
- `fork` and `clone` this repository to begin.

## Recommended ways to get started
- Create an entry point by `touching` either `server.js`, `app.js`, or `index.js`
- `npm init -y` to initialize your project with Node
- `npm i pg sequelize express cors body-parser` to install proper dependencies
- `npm i --save-dev nodemon faker sequelize-cli` to install dev dependencies
- `npx sequelize-cli init` to initialize this as a sequelize project
- Make sure that the dialect in your config.json is `postgres`, remove unnecessary fields, and change the name of your database to the name you'd like to use
- Create your database with `npx sequelize-cli db:create`
- Create your models with `npx sequelize-cli model:generate --name  --attributes'
- Set up proper associations between your models 
- Migrate your database with `npx sequelize-cli db:migrate`

## Requirements
- Your API should have at least 3 models with associations between them
- At least one model should have queries for full CRUD functionality

## Tips
- Use the Express Sequelize lesson from today as a reference point
- Use the Sequelize Cheatsheet repo as a reference for queries.
