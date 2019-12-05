var express = require("express");
var router = express.Router();
var { getting, posting } = require("../controllers/controllers");

router.get("/", getting);
//Adding new items
router.post("/add", posting);
module.exports = router;
