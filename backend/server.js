const express = require("express");
const app = express();
require("dotenv").config();
const { OAuth2Client } = require("google-auth-library");
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    return res.status(200).json({ message: "Works like a charm!" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/google-auth", async (req, res) => {
  try {
    const { token } = req.body;
    const google_client_id = process.env.GOOGLE_AUTH_CLIENT_ID;
    const client = new OAuth2Client(google_client_id);
    // verify and decode the token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: google_client_id,
    });
    const payload = ticket.getPayload();
    return res.status(200).json(payload);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
