const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('../routes'));

// CONNECTION WITH REACT
if (process.env.NODE_ENV === 'production') {
    // PRIORITY SERVE ANY STATIC FILES.
    app.use(express.static(path.resolve(__dirname, '../client/build')));

    // ALL REMAINING REQUESTS RETURN TO THE REACT, SO IT CAN HANDLE ROUTING.
    app.get('*', function (request, response) {
        response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log('listening on ', PORT)
});