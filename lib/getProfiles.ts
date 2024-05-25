import "server-only";

export const getProfiles = async (searchQuery: string) => {
  if (!process.env.NOMIC_API_KEY) {
    throw new Error("Missing NOMIC_API_KEY");
  }

  if (!process.env.KDBAI_API_URL) {
    throw new Error("Missing KDBAI_API_URL");
  }

  if (!process.env.KDBAI_API_KEY) {
    throw new Error("Missing KDBAI_API_KEY");
  }
  try {
    // Fetching dense vectors from Nomic API
    const nomicResponse = await fetch(
      "https://api-atlas.nomic.ai/v1/embedding/text",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NOMIC_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "nomic-embed-text-v1.5",
          texts: [searchQuery],
          task_type: "search_document",
          // dimensions: 748
        }),
      }
    );

    if (!nomicResponse.ok) {
      throw new Error(
        `Nomic API call failed with HTTP status ${nomicResponse.status}`
      );
    }

    const nomicData = await nomicResponse.json();
    const denseVector = nomicData.embeddings[0];

    const response = await fetch(
      `${process.env.KDBAI_API_URL}/api/v1/kxi/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": process.env.KDBAI_API_KEY,
        },
        body: JSON.stringify({
          table: "people",
          vectors: [denseVector],
          n: 20,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API call failed with HTTP status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Failed to fetch profiles:", error);
    throw error;
  }
};
