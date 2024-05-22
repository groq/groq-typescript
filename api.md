# Shared

Types:

- <code><a href="./src/resources/shared.ts">ErrorObject</a></code>
- <code><a href="./src/resources/shared.ts">FunctionDefinition</a></code>
- <code><a href="./src/resources/shared.ts">FunctionParameters</a></code>

# Completions

Types:

- <code><a href="./src/resources/completions.ts">CompletionUsage</a></code>

# Chat

## Completions

Types:

- <code><a href="./src/resources/chat/completions.ts">ChatCompletion</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionAssistantMessageParam</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionContentPart</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionContentPartImage</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionContentPartText</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionFunctionCallOption</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionFunctionMessageParam</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionMessage</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionMessageParam</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionMessageToolCall</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionNamedToolChoice</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionRole</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionSystemMessageParam</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionTokenLogprob</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionTool</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionToolChoiceOption</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionToolMessageParam</a></code>
- <code><a href="./src/resources/chat/completions.ts">ChatCompletionUserMessageParam</a></code>

Methods:

- <code title="post /openai/v1/chat/completions">client.chat.completions.<a href="./src/resources/chat/completions.ts">create</a>({ ...params }) -> ChatCompletion</code>

# Embeddings

Types:

- <code><a href="./src/resources/embeddings.ts">CreateEmbeddingResponse</a></code>
- <code><a href="./src/resources/embeddings.ts">Embedding</a></code>

Methods:

- <code title="post /openai/v1/embeddings">client.embeddings.<a href="./src/resources/embeddings.ts">create</a>({ ...params }) -> CreateEmbeddingResponse</code>

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
- <code><a href="./src/resources/models.ts">ModelDeleted</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /openai/v1/models/{model}">client.models.<a href="./src/resources/models.ts">retrieve</a>(model) -> Model</code>
- <code title="get /openai/v1/models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
- <code title="delete /openai/v1/models/{model}">client.models.<a href="./src/resources/models.ts">delete</a>(model) -> ModelDeleted</code>
