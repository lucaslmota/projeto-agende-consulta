const express = require("express");
const router = express.Router();

const controller = require("../controllers/paciente-controller");

router.get("/", controller.get);
router.get("/nome", controller.getByNome);
router.get("/qtd", controller.getQtd);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete)


module.exports = router;