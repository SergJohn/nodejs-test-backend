const pool = require('./db/database');

// Creating tasks
exports.createTask = function (req, res) {
    const {title, description, status, requester, owners, due_date} = request.body;
    pool.query(
        'INSERT INTO tasks(title, description, status, requester, owners, due_date) VALUES($1, $2, $3, $4, $5, $6)', 
        [title, description, status, requester, owners, due_date],
        (err, res) => {
            if (err) return next(err);

            response.redirect('/');
        }
    );
};

// Getting specific tasks
exports.getTask = function (req, res) {
    const { } = request.body;
    pool.query(
        '', 
        [],
        (err, res) => {
            if (err) return next(err);

            response.redirect('/');
        }
    );
};

// Getting N number of tasks
exports.getNTasks = function (req, res) {
    const { } = request.body;
    pool.query(
        '', 
        [],
        (err, res) => {
            if (err) return next(err);

            response.redirect('/');
        }
    );
};

// Updating status
exports.updateStatus = function (req, res) {
    const { } = request.body;
    pool.query(
        '', 
        [],
        (err, res) => {
            if (err) return next(err);

            response.redirect('/');
        }
    );
};