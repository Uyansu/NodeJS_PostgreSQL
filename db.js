const {Pool} = require("pg")
const {PGCONNECTIONSTRING, PGUSER, PGHOST, PGDATABASE, PGPORT, PGPASSWORD} = process.env

const pool = new Pool({
    user: PGUSER,
    host:PGHOST,
    database:PGDATABASE,
    password:PGPASSWORD,
    port:PGPORT
})

module.exports = pool;