import OpenAI from "openai";

const client = new OpenAI();

export async function readInvoice(text: string) {
  const r = await client.responses.create({
    model: "gpt-4o-mini-2024-07-18",
    input: `Return only JSON with vendor, total and currency for this invoice:\n${text}`,
  });
  return JSON.parse(r.output_text);
}
