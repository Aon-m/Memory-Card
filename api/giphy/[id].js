import axios from "axios";

export default async function handler(req, res) {
  try {
    const { id } = req.query;

    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/${id}`,
      {
        params: {
          api_key: process.env.API_KEY,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      error: "Failed to fetch GIF",
    });
  }
}