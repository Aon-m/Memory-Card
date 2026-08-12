import express from "express";
import cors from "cors";
import axios from "axios";
import "dotenv/config";

const PORT = 8000;
const app = express();

app.use(cors());

app.get("/api/giphy/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await axios.get(`https://api.giphy.com/v1/gifs/${id}`, {
      params: {
        api_key: process.env.API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("GIPHY ERROR:");
    console.error(error.response?.data || error.message);

    res.status(500).json({
      error: error.response?.data || error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
