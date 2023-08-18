import dotenv from "dotenv";
dotenv.config();
import express from "express";
import jwt from "jsonwebtoken";
import axios from "axios";

const port = process.env.PORT || 3000;
const secretKey = process.env.SECRET_KEY || "my_default_secret_key";
const app = express();

app.use(express.json());

const REGISTER_URL = "http://20.244.56.144/train/register";
const AUTH_URL = "http://20.244.56.144/train/auth";

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "REST API using Node.js",
  });
});


// Register endpoint
app.post("/register", (req, res) => {
  const { companyName, ownerName, rollNo, ownerEmail, accessCode } = req.body;

  axios.post("http://20.244.56.144/train/register", {
    companyName,
    ownerName,
    rollNo,
    ownerEmail,
    accessCode,
  })
  .then((response) => {
    const { companyName, clientID, clientSecret } = response.data;
    res.status(200).json({ companyName, clientID, clientSecret });
  })
  .catch((error) => {
    console.error("Error registering company:", error);
    res.status(500).json({ error: "Registration failed" });
  });
});


// Get Authorization Token endpoint
app.post("/auth", async (req, res) => {
  try {
    const {
      companyName,
      clientID,
      ownerName,
      ownerEmail,
      clientSecret,
      rollNo,
    } = req.body;

    const authRequestBody = {
      companyName,
      clientID,
      ownerName,
      ownerEmail,
      clientSecret,
      rollNo,
    };

    const response = await axios.post(AUTH_URL, authRequestBody);

    const { token_type, access_token, expires_in } = response.data;
    res.status(200).json({ token_type, access_token, expires_in });
  } catch (error) {
    console.error("Error obtaining Authorization Token:", error);
    res.status(500).json({ error: "Failed to obtain Authorization Token" });
  }
});


// Define the endpoint to get train details
app.get("/train/trains", async (req, res) => {
  try {
    const headers = {
      Authorization: `Bearer ${AUTH_TOKEN}`
    };

    const response = await axios.get("http://20.244.56.144/train/trains", {
      headers
    });

    // Assuming the response data is an array of train objects
    const trainDetails = response.data;

    res.status(200).json(trainDetails);
  } catch (error) {
    console.error("Error fetching train details:", error);
    res.status(500).json({ error: "Failed to fetch train details" });
  }
});


// Define the endpoint to get details of a particular train
app.get("/train/trains/:trainNumber", async (req, res) => {
  try {
    const trainNumber = req.params.trainNumber;
    const authToken = req.headers.authorization;

    const headers = {
      Authorization: authToken
    };

    const response = await axios.get(`http://20.244.56.144/train/trains/${trainNumber}`, {
      headers
    });

    const trainDetails = response.data;
    res.status(200).json(trainDetails);
  } catch (error) {
    console.error("Error fetching train details:", error);
    res.status(500).json({ error: "Failed to fetch train details" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
