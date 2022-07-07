var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET releases listing. */
router.get("/all", function (req, res, next) {

  axios
    .get("https://ws-api.dev/v1.0/api/releases.json")
    .then((response) => {
      res.send(response.data.releases);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
