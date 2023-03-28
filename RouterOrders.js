const {Router} = require("express")
const pool = require("./db")
const routerOrders = Router();


routerOrders.get("/orders", async (req, res) => {
    
    try {
        const { rows } = await pool.query("SELECT * from orders");
        res.json({ data: rows });
    } catch (err) {
        res.sendStatus(500);
    }
});

module.exports = routerOrders;