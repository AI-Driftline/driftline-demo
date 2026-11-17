from openai import OpenAI

client = OpenAI()
MODEL = "gpt-4o-mini-2024-07-18"


def summarize_ticket(text: str) -> str:
    r = client.responses.create(model=MODEL, input=f"Summarize this support ticket in one sentence:\n{text}")
    return r.output_text


def sentiment(text: str) -> str:
    r = client.responses.create(model=MODEL, input=f"Answer with one word, positive, negative or neutral:\n{text}")
    return r.output_text.strip()
