# Ecommerce - Back End
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
This is the back end for an E-commerce site. It uses an Express.js API and configured to use Sequelize to interact with a MySQL database. Dotenv npm is used to store sensitive data which allows the app to connect to the database. The database includes tables for products, categories, tags, and product tags. RESTful CRUD operations are performed on the database using Sequelize methods. The API routes are tested in Insomnia Core.
During the making of this app, I further expanded my knowledge of how to create models for the tables, sync the tables to the database, and create the API routes to perform CRUD operations on the tables. I also learned about certain errors that can occur when performing CRUD operations and how to fix them. Such as an error I had when trying to seed the database. I had to edit the index.js file to import the models in proper order to fix this. I also kept getting a forgein key constraint error when trying to delete a product that has a tag associated with it. This took way too much time and effort to solve.According to Google, Sequalize documentation and the Xpert Learning Assistant, setting the `onDelete: 'CASCADE'` option in the model was suppose to fix this error, but for some reason did not, so I had to delete the associated tags separately. I also learned how to use the `through` and `belongsTo` option in the model to create many-to-many  and one-to-many relationships between categories, products, and tags. I also learned how to use the `include` option in the API routes to include the associated data in the response. I enjoyed working on this app and learned a lot from it. It was cool to see how easily and efficiently you can create and interact with a database using Insomnia Core and Sequelize.

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
Clone the repo and run `npm install` to install the dependencies. Create a `.env` file in the root directory and add the following code to it:
```
DB_NAME='ecommerce_db'
DB_USER='' //your MySQL username
DB_PW=''   //your MySQL password
```
Run `mysql -u root -p` to open MySQL shell. Run `source db/schema.sql` to create the database.
Run `npm run seed` to seed the database. Run `npm start` to start the server. Use Insomnia Core to test the API routes.

## Usage
After following the installation instructions, use Insomnia Core to test the API routes. The following video demonstrates how to set up the database, seed it, start the server, and test the API routes in Insomnia Core: 
[Watch walk-through](https://drive.google.com...)


## Credits
- Starter code:
    - https://github.com/coding-boot-camp/fantastic-umbrella
- npm packages/documentation:
    - https://www.npmjs.com/
    - Sequalize:
        - https://www.npmjs.com/package/sequelize
        - https://sequelize.org/docs/v6/getting-started/
        - https://sequelize.org/docs/v6/advanced-association-concepts/polymorphic-associations/
        - https://sequelize.org/docs/v6/core-concepts/assocs/#ondelete-and-onupdate
        - https://sequelize.org/docs/v6/core-concepts/model-basics/#default-values
        - https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
    - Dotenv:
        - https://www.npmjs.com/package/dotenv
    - MySQL2:
        - https://www.npmjs.com/package/mysql2
    - Express:
        - https://www.npmjs.com/package/express
- Insomnia Core:
    - https://docs.insomnia.rest/insomnia/get-started
- BCS Xpert Learning Assistant for troubleshooting with forgein key constraint error
- ChatGPT for troubleshooting with forgein key constraint error and error when trying to seed the database
 - BCS class exercises and instructor for teaching me how to create the models, sync the tables to the database, and create the API routes to perform CRUD operations on the tables.

## License
  This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)

## Contributing
Create an issue in repo: https://github.com/milena-allaway/ecommerce_backend/issues

## Tests
N/A. No tests are included in this app.

## Questions
For any questions or feedback, please contact me via:
- GitHub: [milena-allaway](https://github.com/milena-allaway)
- Email: [milenawheatcroft@gmail.com](mailto:milenawheatcroft@gmail.com)

***

Made with ❤️ by Milena Allaway
