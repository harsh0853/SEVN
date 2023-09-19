// routes/oauth.js
const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/getAccessToken", async (req, res) => {
  try {
    const response = await axios.post(
      "https://outpost.mappls.com/api/security/oauth/token",
      {
        grant_type: "client_credentials",
        client_id:
          "33OkryzDZsI8vhmlQPsqamFaGDr5sS7d6iG_ZGIcG5WiXvPl3Sp98K_AFgdXIEt-8KRhya1AGr8itcX8y-6mHw==",
        client_secret:
          "lrFxI-iSEg_Dp__JMc1wWcOrcEeC9qpwIPotIcNwxny1vgMKXR-wTvrB4pmQzPKY7Xy9vpSx7SwG2yku4NtNPzvfYT4jekoO",
      }
    );
    const accessToken = response.data.access_token;
    res.json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch access token" });
  }
});

module.exports = router;
