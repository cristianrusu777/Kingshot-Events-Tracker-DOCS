# Set Up Your OpenAI API Key

**OpenAI** is a bring-your-own-key processor: you use your own OpenAI account, and you control the model and the cost. It sits in the **Bring your own key** group next to Gemini.

## The privacy detail that matters

Your OpenAI key is stored **in this browser**, not on the server.

That means:

- it stays local to the browser you saved it in
- another browser or device will not automatically have it
- clearing local browser data can remove it

## Basic steps

1. Create a key at [OpenAI API keys](https://platform.openai.com/api-keys). Copy it once — treat it like a password.
2. In the tracker, open **Settings → Image Processing**.
3. Choose **OpenAI**.
4. Paste your API key.
5. Confirm or change the model — a vision-capable model such as `gpt-4o-mini` is recommended.
6. Select **Save locally**.

The key is sent only with your OpenAI import requests and is never saved in the application database.

## Cost

Usage is billed to your own OpenAI account. A small vision model like `gpt-4o-mini` keeps per-screenshot cost low; check OpenAI's current pricing for details.

## If OpenAI looks unavailable

- OpenAI is disabled by an admin
- the key was not saved in this browser
- the key is invalid or the model is not vision-capable

## Related

- [Choose an Image-Processing Provider](choose-provider.md)
- [Set Up Your Gemini API Key](gemini-key.md)
- [Administer OCR Providers](../admin/ocr-settings.md)
