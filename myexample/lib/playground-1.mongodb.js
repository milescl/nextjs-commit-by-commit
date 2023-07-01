// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('misistema');

// Create a new document in the collection.
db.getCollection('users').insertOne({
    "name": "John",
    "email": "asad@fgh.com",
    "password": "123456",
    "profile": "admin",
});
