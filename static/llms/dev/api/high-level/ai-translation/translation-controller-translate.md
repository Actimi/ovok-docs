---
title: "Translate"
sidebar_label: "Translate"
description: "AI Translation uses LLMs for translation."
---

# Translate

<div className="endpoint-hero">

<div className="endpoint-hero__paths"><span className="api-method post">POST</span> <code className="endpoint-hero__path">/ai/translation</code></div>

<ApiBase inline={false} />

</div>

AI Translation uses LLMs for translation.

### Warning

The translation may fail or return hallucinated results due to the nature of LLMs.

### Body Parameters

| Parameter        | Type       | Description                                     | Example                                 |
| ---------------- | ---------- | ----------------------------------------------- | --------------------------------------- |
| `sourceLanguage` | `string`   | ISO 639-1 language code, or full language name. | `en-US`                                 |
| `targetLanguage` | `string`   | ISO 639-1 language code, or full language name. | `de-DE`                                 |
| `text`           | `string[]` | The text to translate.                          | `["Hello, world!", "How is ?"]` |

> String values in the `text` array can be in any format, including HTML, Markdown, or plain text and may contain variables with double curly braces.




## Request body

**Content-Type:** `application/json`

- `sourceLanguage`: `string` **(required)**
- `targetLanguage`: `string` **(required)**
- `text`: `array` **(required)**


## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `CreateTranslationResponseDto` (`application/json`)

- `sourceLanguage`: `string` **(required)**
- `targetLanguage`: `string` **(required)**
- `text`: `string[]` **(required)**

**Example**

```json
{
  "sourceLanguage": "en",
  "targetLanguage": "de",
  "text": [
    "Hallo {{ name }}, wie geht es Ihnen?",
    "Mir geht es gut, danke {{ anotherName }}. Ich freue mich, dass Sie ans Telefon gegangen sind.",
    "<p>Keine Sorge, Sir, ich werde mich darum <b>kümmern</b>.</p>"
  ]
}
```
