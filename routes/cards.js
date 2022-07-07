var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET card by set, release and number. */
router.get("/:set/:release/:number", function (req, res, next) {
  let url =
    "https://ws-api.dev/v1.0/api/cards/" +
    req.params.set +
    "/" +
    req.params.release +
    "/" +
    req.params.number +
    ".json";
  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

/* GET card by set, release and number. */
router.get("/all/:release", function (req, res, next) {
  let url =
    "https://ws-api.dev/v1.0/api/releases/" +
    req.params.release +
    "/cards.json";
  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
