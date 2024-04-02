const mysql = require('mysql');

// Create connection
const connection = mysql.createConnection({
    host: '127.0.0.1', // Change this to your MySQL host
    user: 'root',
    password: 'root',
    database: 'rce' // The database you created earlier
});

// Connect
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
});

// Perform database operations
// For example, you can run queries here

// Close connection when done
connection.end((err) => {
    if (err) {
        console.error('Error closing MySQL connection: ' + err.stack);
        return;
    }
    console.log('MySQL connection closed.');
});
