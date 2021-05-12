const { Router } = require("express");
const router = Router();
const commandsList = require("../json/commands.json");
const root = {
    root: "./views/"
};

router.get("/", (request, response) => {
    return response.status(200).render("index", root);
});

router.get("/commands", (request, response) => {
    return response.status(200).render("commands", {
        cmds: commandsList.list,
        root: "./views/"
    });
});

router.use("*", (request, response) => {
    return response.status(404).render("notfound", root);
});

module.exports = router;