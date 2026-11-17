import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

export async function plan(goal: string) {
  return anthropic.messages.create({
    model: "claude-sonnet-4-5-20250929",
    max_tokens: 2048,
    temperature: 0.2,
    messages: [{ role: "user", content: goal }],
  });
}
