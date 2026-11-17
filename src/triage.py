from google import genai

client = genai.Client()
MODEL = "gemini-2.5-flash"


def triage(ticket: str) -> str:
    r = client.models.generate_content(model=MODEL, contents=f"Summarize this support ticket in one sentence:\n{ticket}")
    return r.text
