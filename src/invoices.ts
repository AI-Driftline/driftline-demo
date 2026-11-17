import OpenAI from "openai";

const client = new OpenAI();

export async function readInvoice(text: string) {
  const r = await client.responses.create({
    model: "gpt-6-luna",
    input: `Return only JSON with vendor, total and currency for this invoice:\n${text}`,
  });
  return JSON.parse(r.output_text);
}
