const mysql = require('mysql2');
const config = require('./config');
const express = require('express');
const cors = require('cors');
const app = express();
const port = config.express.port;

const con = mysql.createConnection({
    host: config.mysql.host,
    port: config.mysql.port,
    database: config.mysql.database,
    user: config.mysql.user,
    password: config.mysql.password
});

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World! Let\'s Working with MySQL Databases')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

const connectDB = async () => {
    try {
        await con.connect(function (err) {
            if (err) {
                console.log('database connection error!, ', err);
            } else {
                console.log('database connection successfully!');
            }
        });
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
connectDB();

// Read Patients All API
app.get('/patients', async (req, res) => {
	await new Promise((resolve, rejects) => {
		var readSQL = "SELECT * FROM patients";
		con.query(readSQL, (err, results) => {
			if (err) {
				console.log('database connection error!, ', err);
			} else {
				res.status(200).send(results);
			}
		});
	});
});


// Read Rights All API
app.get('/rights', async (req, res) => {
	var readSQL = "SELECT distinct Patient_Rights FROM rights;";
	await new Promise((resolve, rejects) => {
		try {
			con.query(readSQL, function (err, results) {
				if (err) {
					console.log('database connection error!, ', err);
				} else {
					res.status(200).send(results);
				}
			});
		} catch (err) {
			console.log(err);
			res.status(404).send("backend error!");
		}
	});
});

// Login
app.post('/login/', async (req, res) => {
	const params = req.body;
	const username = params.user;
	const password = params.pass;

	var loginSQL = "SELECT * FROM users WHERE username='" + username + "' and password='" + password + "';"
	await new Promise((resolve, rejects) => {
		try {
			con.query(loginSQL, function (err, results) {
				if (err) {
					console.log('database connection error!, ', err);
					res.status(404).send("database connection error!");
				} else {
					res.status(200).send(results);
				}
			});
		} catch (err) {
			console.log(err);
			process.exit(1);
		}
	});
});

// Read Patient by Name
app.post('/patients/search/:searchText', async (req, res) => {
	const { params } = req;
	const searchText = params.searchText

	var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~^\s]/;
	var test = format.test(searchText);

	var searchSQL = "SELECT * FROM patients WHERE Name LIKE '%" + searchText + "%';"

	await new Promise((resolve, rejects) => {
		if (test) {
			res.status(200).send();
		} else {
			try {
				con.query(searchSQL, function (err, results) {
					if (err) {
						console.log('database connection error!, ', err);
						res.status(404).send("backend error!");
					} else {
						res.status(200).send(results);
					}
				});
			} catch (err) {
				console.log(err);
				res.status(404).send("backend error!");
			}
		}
	});
});

// Read Patient by ID
app.post('/queryid', async (req, res) => {
	const params = req.body;

	const patientID = params.patientID
	var searchSQL = "SELECT * FROM patients WHERE ID = " + patientID + ";";

	await new Promise((resolve, rejects) => {
		try {
			con.query(searchSQL, function (err, results) {
				if (err) {
					console.log('database connection error!, ', err);
					res.status(200).send(results);
				} else if (results.length > 0) {
					res.status(200).send(results);
				} else {
					console.log('no query!');
					res.status(404).send("no query!");
				}
			});
		} catch (err) {
			console.log(err);
			res.status(404).send("backend error!");
		}
	});
});

// // Create API
app.post('/patients/create/', async (req, res) => {
	const params = req.body;

	console.log("create:", params);
	
	var insertSQL = "INSERT INTO patients (HN, Name, Patient_Rights_1, Patient_Rights_2, Patient_Rights_3, Chronic_Disease, Address, Phone) VALUES ('" + params.HN + "', '" + params.Name + "', '" + params.Patient_Rights_1 + "', '" + params.Patient_Rights_2 + "', '" + params.Patient_Rights_3 + "', '" + params.Chronic_Disease + "', '" + params.Address + "', '" + params.Phone + "');";
	var readSQL = "SELECT * FROM patients";

	await new Promise((resolve, rejects) => {
		try {
			con.query(insertSQL, function (err) {
				if (err) {
					console.log('database connection error!, ', err);
				} else {
					con.query(readSQL, (err, results) => {
						if (err) {
							console.log('database connection error!, ', err);
						} else {
							res.status(200).send(results);
						}
					});
				}
			});
		} catch (err) {
			console.log(err);
			res.status(404).send("backend error!");
		}
	});
});


// Update API
app.put('/patients/update/', async (req, res) => {
	const params = req.body;

	console.log("update:", params);
	var updateSQL = "UPDATE patients SET Name = '" + params.Name + "', Patient_Rights_1 = '" + params.Patient_Rights_1 + "', Patient_Rights_2 = '" + params.Patient_Rights_2 + "', Patient_Rights_3 = '" + params.Patient_Rights_3 + "', Chronic_Disease= '" + params.Chronic_Disease + "', Address = '" + params.Address + "', Phone ='" + params.Phone + "' WHERE (HN = '" + params.HN + "');";
	var readSQL = "SELECT * FROM patients";

	await new Promise((resolve, rejects) => {
		try {
			con.query(updateSQL, function (err) {
				if (err) {
					console.log('database connection error!, ', err);
				} else {
					con.query(readSQL, (err, results) => {
						if (err) {
							console.log('database connection error!, ', err);
						} else {
							res.status(200).send(results);
						}
					});
				}
			});
		} catch (err) {
			console.log(err);
			res.status(404).send("backend error!");
		}
	});
});


// Delete API
app.delete('/patients/delete/', async (req, res) => {
	const params = req.body;
	console.log("delete:", params);
	var deleteSQL = "DELETE FROM patients WHERE (HN = '" + params.HN + "');";
	var readSQL = "SELECT * FROM patients";

	await new Promise((resolve, rejects) => {
		try {
			con.query(deleteSQL, function (err) {
				if (err) {
					console.log('database connection error!, ', err);
				} else {
					con.query(readSQL, (err, results) => {
						if (err) {
							console.log('database connection error!, ', err);
						} else {
							res.status(200).send(results);
						}
					});
				}
			});
		} catch (err) {
			console.log(err);
			res.status(404).send("backend error!");
		}
	});
});

//if cannot connect
//ERROR  Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
//try in MySQL
//ALTER USER 'admin'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
//flush privileges;

//if error code: 1175 safe mode
//try in MySQL
//SET SQL_SAFE_UPDATES = 0;


// "start": "concurrently \"npm run server\" \"cd ../Frontend && npm start\"",
