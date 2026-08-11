export default async function fetchGif(id) {
  const response = await fetch(`http://localhost:8000/api/giphy/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch GIF");
  }

  return data;
}
