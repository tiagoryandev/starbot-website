const { Router } = require("express");
const router = Router();
const root = {
    root: "./views/"
};

router.get("/", (request, response) => {
    return response.status(200).render("index", root);
});

router.get("/commands", (request, response) => {
    return response.status(200).render("commands", root);
});

router.use("*", (request, response) => {
    return response.status(404).render("notfound", root);
});

module.exports = router;