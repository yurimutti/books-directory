import { connect } from "./config/mongoose.ts";

connect();

// Books Directory
// This one is often considered as the most basic project you can create using Node.js and Express.js or Nest.js is a simple REST API. For this you can build a book directory, where you would need to create endpoints, using the 4 most basic methods: GET, POST, PUT and DELETE.

// You’d use GET for getting all books or only 1 book by id. With the POST, you can add a new book to the list, and need PUT method for updating the existing book. It’s evident that with the DELETE method, you can remove the book from the list. 

// For this kind of application, you don’t have to use the database, and for the first app, you can start with data collected as a JSON file.
