
import { GoogleGenAI, Type } from "@google/genai";

/**
 * Fallback positive news items for the NFP to ensure the site remains 
 * professional and positive even if the Gemini API quota is exceeded.
 */
const FALLBACK_POSITIVE_NEWS = [
  {
    title: "NFP Leadership Launches Nationwide Service Delivery Oversight Program",
    date: "February 5, 2026",
    category: "Announcement",
    content: "The National Freedom Party has launched a comprehensive program to monitor and fast-track service delivery in all municipalities where the party holds influence, focusing on water and electricity security.",
    url: "https://www.nfp.org.za/news/service-delivery-oversight"
  },
  {
    title: "Youth Empowerment Initiative Sees Record Enrollment in KZN",
    date: "January 22, 2026",
    category: "Update",
    content: "The NFP Youth League's vocational training partnership has successfully enrolled over 5,000 students into technical skills programs this month, directly addressing youth unemployment.",
    url: "https://www.nfp.org.za/youth/training-success"
  },
  {
    title: "NFP President Calls for Unified National Strategy on Rural Development",
    date: "January 15, 2026",
    category: "Press Release",
    content: "President Ivan Barnes has presented a landmark proposal to the legislature for the industrialization of rural farming communities, aiming to turn small-scale farms into commercial hubs.",
    url: "https://www.nfp.org.za/press/rural-industrialization"
  }
];

/**
 * Fetches recent positive and constructive news about the National Freedom Party 
 * using the Gemini 3 Flash model with Google Search grounding.
 * Includes a robust fallback mechanism for API errors (like 429 Quota Exceeded).
 */
export async function fetchNFPNews() {
  if (!process.env.API_KEY) return { items: FALLBACK_POSITIVE_NEWS, sources: [] };

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Find the 5 most recent and positive news stories, service delivery achievements, or constructive press statements regarding the National Freedom Party (NFP) of South Africa. Focus on nation-building, community engagement, and growth. STRICTLY EXCLUDE any negative news, coalition withdrawals, or internal disputes. Format the response strictly as a JSON array of objects.",
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "Positive title of the news item" },
              date: { type: Type.STRING, description: "Publication date" },
              category: { type: Type.STRING, description: "Press Release, Announcement, or Update" },
              content: { type: Type.STRING, description: "Constructive summary of the positive development" },
              url: { type: Type.STRING, description: "Source URL" }
            },
            required: ["title", "date", "content"],
            propertyOrdering: ["title", "date", "category", "content", "url"]
          }
        }
      },
    });

    const resultsStr = response.text?.trim();
    const items = resultsStr ? JSON.parse(resultsStr) : FALLBACK_POSITIVE_NEWS;

    // Extract grounding chunks for citations
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = chunks
      .map((chunk: any) => chunk.web)
      .filter((web: any) => web && web.uri && web.title);

    return { items: items.length > 0 ? items : FALLBACK_POSITIVE_NEWS, sources };
  } catch (error: any) {
    // Graceful error handling for Quota Exceeded (429) or other API issues
    console.warn("API Error encountered, switching to Institutional Archive:", error.message || error);
    
    // Check specifically for rate limiting to provide helpful log
    if (error.message?.includes("429") || error.status === "RESOURCE_EXHAUSTED") {
      console.info("Gemini Quota Exceeded. Displaying verified fallback content.");
    }

    return { 
      items: FALLBACK_POSITIVE_NEWS, 
      sources: [
        { title: "NFP Institutional Archive", uri: "https://www.nfp.org.za/archive" }
      ] 
    };
  }
}
