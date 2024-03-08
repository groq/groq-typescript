# Chat

## Completions

Types:

- <code><a href="./src/resources/chat/completions.ts">ChatCompletion</a></code>

Methods:

- <code title="post /openai/v1/chat/completions">client.chat.completions.<a href="./src/resources/chat/completions.ts">create</a>({ ...params }) -> ChatCompletion</code>

# Audio

Types:

- <code><a href="./src/resources/audio/audio.ts">Translation</a></code>

## Transcriptions

Types:

- <code><a href="./src/resources/audio/transcriptions.ts">Transcription</a></code>

Methods:

- <code title="post /openai/v1/audio/transcriptions">client.audio.transcriptions.<a href="./src/resources/audio/transcriptions.ts">create</a>({ ...params }) -> Transcription</code>

## Translations

Methods:

- <code title="post /openai/v1/audio/translations">client.audio.translations.<a href="./src/resources/audio/translations.ts">create</a>({ ...params }) -> Translation</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">Model</a></code>
- <code><a href="./src/resources/models.ts">ModelList</a></code>

Methods:

- <code title="get /openai/v1/models/{model}">client.models.<a href="./src/resources/models.ts">retrieve</a>(model) -> Model</code>
- <code title="get /openai/v1/models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelList</code>
- <code title="delete /openai/v1/models/{model}">client.models.<a href="./src/resources/models.ts">delete</a>(model) -> void</code>
