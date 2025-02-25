const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'jfagro',
    password: 'cajangoDEV',
    port: 5432,
});

module.exports = pool;