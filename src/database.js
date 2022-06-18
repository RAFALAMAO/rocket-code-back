import mysql from "mysql2";
import { hostname, userInfo } from "os";

const pool = mysql.createPool({
    host: 'data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com',
    user: 'testing',
    password: 'Pruebas%ALI%2020',
    database: 'testing_ali_fullstack',
    ssl: {
        rejectUnauthorized: false
    }
});

pool.getConnection((err, connection) => {
    if (err) {
      console.error("#### error:", err.code);
      console.error(err.sqlMessage);
    }

    if (connection) {
      connection.release();
      console.log("Connected to MySQL!");
    }
    return;
});

const promisePool = pool.promise();

export default promisePool;