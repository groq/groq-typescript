# Embeddings

Types:

- <code><a href="./src/resources/embeddings.ts">CreateEmbeddingResponse</a></code>
- <code><a href="./src/resources/embeddings.ts">Embedding</a></code>

Methods:

- <code title="post /openai/v1/embeddings">client.embeddings.<a href="./src/resources/embeddings.ts">create</a>({ ...params }) -> CreateEmbeddingResponse</code>

# Chat

## Completions

Types:

- <code><a href="./src/resources/chat/completions.ts">ChatCompletion</a></code>

Methods:

- <code title="post /openai/v1/chat/completions">client.chat.completions.<a href="./src/resources/chat/completions.ts">create</a>({ ...params }) -> ChatCompletion</code>

# Audio

## Transcriptions

Types:

- <code><a href="./src/resources/audio/transcriptions.ts">Transcription</a></code>
- <code><a href="./src/resources/audio/transcriptions.ts">TranscriptionCreateResponse</a></code>

Methods:

- <code title="post /openai/v1/audio/transcriptions">client.audio.transcriptions.<a href="./src/resources/audio/transcriptions.ts">create</a>({ ...params }) -> TranscriptionCreateResponse</code>

## Translations

Types:

- <code><a href="./src/resources/audio/translations.ts">Translation</a></code>
- <code><a href="./src/resources/audio/translations.ts">TranslationCreateResponse</a></code>

Methods:

- <code title="post /openai/v1/audio/translations">client.audio.translations.<a href="./src/resources/audio/translations.ts">create</a>({ ...params }) -> TranslationCreateResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">Model</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /openai/v1/models/{model}">client.models.<a href="./src/resources/models.ts">retrieve</a>(model) -> Model</code>
- <code title="get /openai/v1/models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
- <code title="delete /openai/v1/models/{model}">client.models.<a href="./src/resources/models.ts">delete</a>(model) -> void</code>
