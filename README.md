
---

# Mongoose CRUD API Project

## Overview

This project is a Node.js backend API demonstrating CRUD (Create, Read, Update, Delete) operations on a MongoDB database using Mongoose as the ODM (Object Data Modeling) library. It includes:

* Connection setup with MongoDB Atlas or local MongoDB using environment variables.(Here, I use .env file) with  a temporary user for Mongo
* A clean, modular controller to handle Person model operations.
* Basic error handling and asynchronous flow.
* Example usage of key Mongoose methods and queries.

---

## Features

* Connects securely to MongoDB using connection string from environment variables.
* Implements all basic CRUD operations on a `Person` collection:

  * Create one or many people
  * Find by name, by favorite food, or by ID
  * Update person's age and add favorite foods
  * Delete single or multiple people
  * Query chaining with filtering, sorting, limiting, and field selection
* Modular and well-commented code for ease of understanding and extension.

---

## Technologies Used

* **Node.js** (JavaScript runtime)
* **Express.js** (optional for server setup)
* **MongoDB** (NoSQL database)
* **Mongoose** (MongoDB ODM)
* **dotenv** (environment variable management)

---

## Prerequisites

* Node.js (v14 or newer recommended)
* MongoDB Atlas account or local MongoDB installed
* NPM (comes with Node.js)
* Basic understanding of JavaScript and MongoDB

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/StephenLegacy/MongoNodeCRUD.git
cd mongoose-crud-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

Create a `.env` file in the root directory and add your MongoDB connection string:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=3000
```

> Replace `<username>`, `<password>`, and `<dbname>` with your actual MongoDB Atlas credentials and database name.

4. **Run the server**

```bash
node app.js
```

You should see:

```
Server is running on port 3000
MongoDB connected
```

---

## Project Structure

```
/mongoose-crud-api
│
├── controllers/
│   └── personController.js      # CRUD operations using Mongoose
│
├── models/
│   └── person.js                # Mongoose schema and model definition
│
├── config/
│   └── MongooseSetup.js         # MongoDB connection setup using Mongoose
│
├── .env                        # Environment variables (not committed)
├── app.js                      # Main entry point (Express server setup)
├── package.json                # Project dependencies and scripts
└── README.md                   # This documentation file
```

---

## Usage

* Use `personController.js` functions to interact with your MongoDB `Person` collection.
* Integrate with an Express server or any other Node.js framework to expose API endpoints.
* Extend or customize schemas and controllers to fit your application needs.

---

## Notes

* Ensure your MongoDB user has the correct permissions and your IP is whitelisted in Atlas.
* Passwords with special characters should be URL-encoded in your connection string.
* For local MongoDB, your `MONGO_URI` might look like `mongodb://localhost:27017/mydb`.
* Handle errors gracefully in production by adding proper middleware and validation.

---

## Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request.

---

## License

This project is open source and available under the MIT License.

---

## Contact

For questions or support, reach out at:

* **Email:** [oloostephen22@gmail.com](oloostephen22@gmail.com)
* **GitHub:** [StephenLegacy](https://github.com/StephenLegacy)
* **LinkedIn:** [STEPHEN OLOO](https://stephenoloolegacyio/in/yourprofile)

---

