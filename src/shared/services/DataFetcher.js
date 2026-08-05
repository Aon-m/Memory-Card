export default class DataFetcher {
  static async fetch(source) {
    if (source instanceof File) {
      return source.json();
    }

    if (typeof source === "string") {
      return this.urlFetch(source);
    }

    if (typeof source === "function") {
      return source();
    }

    throw new Error("Invalid source");
  }

  static async fetchFromUrl(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        const error = new Error("HTTP error");
        error.status = response.status;
        error.statusText = response.statusText;
        throw error;
      }

      const data = await response.json();

      return data;
    } catch (err) {
      if (err.status === 429) {
        console.log("Slow down requests");
      } else if (err.status === 404) {
        console.log("Missing resource");
      } else if (err.status) {
        console.error(`HTTP error: ${err.status} ${err.statusText ?? ""}`);
      } else {
        console.error("Network error:", err.message);
      }

      throw err;
    }
  }
}
