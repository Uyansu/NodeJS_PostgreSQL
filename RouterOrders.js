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

routerOrders.get("/orders/:id", async (req, res) => {
    const {id}  = req.params;
    try {
        const {rows} = await pool.query("SELECT * FROM orders WHERE id=$1", [id]);
        res.json({data: rows});
    } catch (error) {
        res.sendStatus(403);
    }
})

module.exports = routerOrders;