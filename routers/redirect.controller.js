const { Router } = require("express");
const router = Router();

router.get("/github", (request, response) => {
    return response.redirect("https://github.com/iNsaNyDevelopers");
});

router.get("/discord", (request, response) => {
    return response.redirect("https://discord.gg/2pFH6Yy");
});

router.get("/twitter", (request, response) => {
    return response.redirect("https://twitter.com/TiaGoiNsaNy");
});

module.exports = router;