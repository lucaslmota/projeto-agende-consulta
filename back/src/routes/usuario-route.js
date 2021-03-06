const express = require("express");
const router = express.Router();
const pool = require("../dbs/postgres");

const controller = require("../controllers/usuario-controller");

router.get("/", controller.get);
router.get("/nome", controller.getByNome);
router.get("/qtd", controller.getQtd);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

router.post("/login", async (req, res) => {
    const result = await pool.query(
      "SELECT * FROM usuarios WHERE usuario=$1 and senha=$2;",
      [req.body.usuario, req.body.senha]
    );
  
    if (result.rows[0]) {
      session = req.session;
      session.user = 1;
  
      console.log(session.user);
  
      res
        .status(200)
        .cookie("userId", result.rows[0].id, {
          secure: false,
        })
        .json(result.rows[0]);
    } else {
      res.status(404).send({
        result: "Not found",
      });
    }
  });
  
  router.get("/logout", (req, res) => {
    console.log("logout");
    session = null;
    req.session.destroy();
    res.send("");
  });

module.exports = router;