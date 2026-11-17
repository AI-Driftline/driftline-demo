# Driftline demo

A small example app that calls retiring AI models, so you can see what [Driftline](https://aidriftline.com) does in a real repository.

- `src/summarize.py` and `src/invoices.ts` call `gpt-4o-mini-2024-07-18` (OpenAI).
- `src/triage.py` calls `gemini-2.5-flash` (Google).
- `src/agent.ts` calls `claude-sonnet-4-5-20250929` (Anthropic) with a `temperature`, which the replacement no longer accepts.

[`.github/workflows/driftline.yml`](.github/workflows/driftline.yml) runs the Action with `fix-pr: true` and a Pro key. The prompts in [`.driftline/prompts.yml`](.driftline/prompts.yml) are sent to the real OpenAI and Gemini APIs, once to the current model and once to its replacement.

See the result:

- the [fix pull request](../../pulls) Driftline opened, with the renames, the lines left for you, and the drift verdict;
- the [workflow runs](../../actions), where the job summary holds both answers for every prompt.

Nothing here is simulated. The code is a toy; the API calls are real.
