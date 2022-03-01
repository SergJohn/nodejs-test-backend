const pool = require('./db/database');

// Creating tasks
exports.createTask = async function (req, res) {
    try {
        const { title, description, status, requester, owners, due_date } = req.body;
        await pool.query(
            'INSERT INTO tasks(title, description, status, requester, owners, due_date) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
            [title, description, status, requester, owners, due_date],
            (err, response) => {
                if (err) return console.log(err);
                res.json(response.rows);
            }
        );

    } catch (error) {
        console.log(error.message);
    }

};

// Getting specific tasks
exports.getTask = async function (req, res) {
    try {
        const { id } = req.params;
        await pool.query(
            "SELECT * FROM tasks WHERE id = $1",
            [id],
            (err, response) => {
                if (err) return console.log(err);
                console.log(response.rows);
                res.status(200).json(response.rows);
            }
        );

    } catch (error) {
        console.log(error.message);
    }

};

// Getting N number of tasks
exports.getNTasks = async function (req, res) {
    try {
        const { N } = req.params;
        console.log(N);

        await pool.query(
            'SELECT * FROM tasks ORDER BY id LIMIT $1',
            [N],
            (err, response) => {
                if (err) return console.log(err);
                console.log(response.rows);
                res.json(response.rows);
            }
        );
    } catch (error) {
        console.log(error.message);
    }

};

// Updating status
exports.updateStatus = async function (req, res) {
    try {
        const { status, id } = req.body;
        await pool.query(
            'UPDATE tasks SET status = $1 WHERE id = $2',
            [status, id],
            (err, response) => {
                if (err) return console.log(err);

                res.json("Status Updated");
            }
        );
    } catch (error) {
        console.log(error.message);
    }

};