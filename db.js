const {Pool} = require("pg")
const {PGCONNECTINGSTRING} = process.env

const pool = new Pool({
    PGCONNECTINGSTRING
})

module.exports = pool;