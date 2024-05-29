import "server-only";
import { z } from 'zod';

const DomainResponseSchema = z.array(z.object({
  image_url: z.string(),
  domain: z.string(),
  price: z.number(),
}));

export const getDomains = async (searchQuery: string) => {
  try {
    const response = await fetch(
      process.env.BACKEND_URL + '/generate-domain-names',
      {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "description": searchQuery
        })
      }
    );

    const data = await response.json();
    const result = DomainResponseSchema.parse(data);
    return result;
  } catch (error) {
    console.error("Failed to fetch profiles:", error);
    throw error;
  }
};
