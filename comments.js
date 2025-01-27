/**
 * @fileoverview A simple Express web server that handles GET, POST, PUT, and DELETE requests.
 */

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

/**
 * Handles GET requests to the root URL.
 * @name get/
 * @function
 * @memberof module:express.Router
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
app.get('/', (req, res) => {
    res.send('GET request received');
});

/**
 * Handles POST requests to the root URL.
 * @name post/
 * @function
 * @memberof module:express.Router
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
app.post('/', (req, res) => {
    res.send('POST request received');
});

/**
 * Handles PUT requests to the root URL.
 * @name put/
 * @function
 * @memberof module:express.Router
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
app.put('/', (req, res) => {
    res.send('PUT request received');
});

/**
 * Handles DELETE requests to the root URL.
 * @name delete/
 * @function
 * @memberof module:express.Router
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
app.delete('/', (req, res) => {
    res.send('DELETE request received');
});

/**
 * Starts the Express server and listens on the specified port.
 * @function
 * @memberof module:express
 * @param {number} port - The port number on which the server will listen.
 * @returns {void}
 */
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});