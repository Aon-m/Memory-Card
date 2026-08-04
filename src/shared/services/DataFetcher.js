class DataFetcher {
  constructor(source) {
    this.source = source;
  }

  async fetchData(source = this.source) {
    if (source instanceof File) {
      return source.json();
    }

    if (typeof source === "string") {
      return this.urlFetch(source);
    }

    if (typeof source === "function") {
      return source();
    }

    return Promise.reject(new Error("Invalid source"));
  }

  async urlFetch(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        const error = new Error("HTTP error");
        error.status = response.status;
        error.statusText = response.statusText;
        throw error;
      }

      const data = await response.json();

      const gifUrl = data?.data?.images?.original?.url;

      if (!gifUrl) {
        throw new Error("Invalid API response: GIF not found");
      }

      return data;
    } catch (err) {
      if (err.status === 429) {
        console.log("Slow down requests");
      } else if (err.status === 404) {
        console.log("Missing resource");
      } else if (err.status) {
        console.error(`HTTP error: ${err.status} ${err.statusText || ""}`);
      } else {
        console.error("Network error:", err.message);
      }

      throw err;
    }
  }
}

export default DataFetcher;
