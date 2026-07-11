# Choose an Image-Processing Provider

The imports page lets eligible users choose how screenshot images are processed.

![Ocr Providers — Choose an Image-Processing Provider](../images/ocr-providers.png)
## Your three options

### Free Local Processing

Use Free Local Processing when:

- the screenshot is clean and readable
- you want the default option
- you do not want to use an external API key

This is the default path. It is good enough for many normal screenshots, but the app itself warns that manual review is recommended.

### Gemini

Use Gemini when:

- text is small
- names are harder to read
- the screenshot includes CJK characters or trickier formatting
- you want the strongest recognition quality

Gemini usually gives the best OCR results, but it requires **your own API key**.

### Premium Processing

Premium Processing is **coming soon**.

Right now:

- it may appear on the page
- it is not available as a working processing engine
- you should not plan an active workflow around it yet

## Quick guidance

Choose:

- **Free Local Processing** for quick, ordinary, readable screenshots
- **Gemini** for harder screenshots or when accuracy matters more
- **Premium Processing** never, for now, because it is not live yet

## Related

- [Set Up Your Gemini API Key](gemini-key.md)
- [Upload Screenshots](upload-screenshots.md)
- [Administer OCR Providers](../admin/ocr-settings.md)
