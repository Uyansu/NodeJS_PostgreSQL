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

routerOrders.post("/orders", async (req, res) => {
    const {price , date, user_id} = req.body;
    try {
        const {rows} = await pool.query("INSERT INTO orders (price, date, user_id) VALUES ($1, $2, $3) RETURNING *", [price, date, user_id]);
        res.json({data: rows});
        } catch (error) {
        res.sendStatus(403);
    }
})

routerOrders.put("/orders/:id", async (req, res) =>{
    const {id} = req.params;
    const {price} = req.body;
    try {
        const {rows} = await pool.query("UPDATE orders SET price=$1 WHERE id=$2 RETURNING *", [price, id]);
        res.json({data:rows});
    } catch (error) {
        res.sendStatus(403);
    }
})

routerOrders.delete("/orders/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const {rows} = await pool.query("DELETE FROM orders WHERE id=$1" , [id]);
        res.json(`The order with the id: ${id} has been deleted`);
    } catch (error) {
        res.sendStatus(403);
    }
})

module.exports = routerOrders;