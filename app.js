var mysql = require('mysql');
require('dotenv').config()

const dbConnectionConfig = {
    host: 'localhost',
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_DATABASE,
}

const connection = mysql.createConnection(dbConnectionConfig);

connection.connect((err) => {
    if (err) {
        console.error('DB Connection Error: ' + err.stack);
    } else {
        console.log('DB Connected');
        insertData(connection)
    }
});

const insertData = (con) => {
    const sqlQuery = "INSERT INTO employee_data (name,age,gender,salary) VALUES(?,?,?,?)"
    const insertedData = ['Bob Yard', '25', 'Male', '2500']
    con.query(sqlQuery, insertedData, (err) => {
        if (err) {
            console.error('Data Insertion Failed', err);
        } else {
            console.log('Data Inserted Successfully');
        }
    })
}