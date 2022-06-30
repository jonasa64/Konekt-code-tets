const router = require("express").Router();
const { start, status } = require("../../controllers/tasks");
router.get("/start", start);

router.get("/status/:id", status);

module.exports = router;
