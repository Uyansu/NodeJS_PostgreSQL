const {Router} = require("express")
const pool = require("./db")
const router = Router();

router.get("/users", async (req, res) => {
    
    try {
        const { rows } = await pool.query("SELECT * from users");
        res.json({ data: rows });
    } catch (err) {
        res.sendStatus(500);
    }
});

router.get("/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await pool.query("SELECT * FROM users WHERE id=$1;", [id]);
        res.json({ data: rows });
    } catch (e) {
        res.sendStatus(404);
    }
});

router.post("/users", async (req, res) => {
    const { first_name, last_name, age } = req.body;
    try {
        const { rows } = await pool.query(
        "INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING *",[first_name, last_name, age]);
        res.json({ data: rows });
    } catch (e) {
        res.sendStatus(403);
    }
});

module.exports = router;