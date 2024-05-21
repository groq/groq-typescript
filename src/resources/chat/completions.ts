// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as CompletionsAPI from './completions';

export class Completions extends APIResource {
  /**
   * Creates a model response for the given chat conversation.
   */
  create(body: CompletionCreateParams, options?: Core.RequestOptions): Core.APIPromise<ChatCompletion> {
    return this._client.post('/openai/v1/chat/completions', { body, ...options });
  }
}

export interface ChatCompletion {
  choices: Array<ChatCompletion.Choice>;

  id?: string;

  created?: number;

  model?: string;

  object?: string;

  system_fingerprint?: string;

  usage?: ChatCompletion.Usage;
}

export namespace ChatCompletion {
  export interface Choice {
    finish_reason: string;

    index: number;

    logprobs: Choice.Logprobs;

    message: Choice.Message;
  }

  export namespace Choice {
    export interface Logprobs {
      content?: Array<Logprobs.Content>;
    }

    export namespace Logprobs {
      export interface Content {
        token?: string;

        bytes?: Array<number>;

        logprob?: number;

        top_logprobs?: Array<Content.TopLogprob>;
      }

      export namespace Content {
        export interface TopLogprob {
          token?: string;

          bytes?: Array<number>;

          logprob?: number;
        }
      }
    }

    export interface Message {
      content: string;

      role: string;

      tool_calls?: Array<Message.ToolCall>;
    }

    export namespace Message {
      export interface ToolCall {
        id?: string;

        function?: ToolCall.Function;

        type?: string;
      }

      export namespace ToolCall {
        export interface Function {
          arguments?: string;

          name?: string;
        }
      }
    }
  }

  export interface Usage {
    completion_time?: number;

    completion_tokens?: number;

    prompt_time?: number;

    prompt_tokens?: number;

    queue_time?: number;

    total_time?: number;

    total_tokens?: number;
  }
}

export interface CompletionCreateParams {
  /**
   * A list of messages comprising the conversation so far.
   */
  messages: Array<
    | CompletionCreateParams.ChatCompletionRequestSystemMessage
    | CompletionCreateParams.ChatCompletionRequestUserMessage
    | CompletionCreateParams.ChatCompletionRequestAssistantMessage
    | CompletionCreateParams.ChatCompletionRequestToolMessage
    | CompletionCreateParams.ChatCompletionRequestFunctionMessage
  >;

  /**
   * ID of the model to use. For details on which models are compatible with the Chat
   * API, see available [models](/docs/models)
   */
  model: string;

  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on their
   * existing frequency in the text so far, decreasing the model's likelihood to
   * repeat the same line verbatim.
   */
  frequency_penalty?: number | null;

  /**
   * Deprecated in favor of `tool_choice`.
   *
   * Controls which (if any) function is called by the model. `none` means the model
   * will not call a function and instead generates a message. `auto` means the model
   * can pick between generating a message or calling a function. Specifying a
   * particular function via `{"name": "my_function"}` forces the model to call that
   * function.
   *
   * `none` is the default when no functions are present. `auto` is the default if
   * functions are present.
   */
  function_call?: 'none' | 'auto' | CompletionCreateParams.ChatCompletionFunctionCallOption | null;

  /**
   * Deprecated in favor of `tools`.
   *
   * A list of functions the model may generate JSON inputs for.
   */
  functions?: Array<CompletionCreateParams.Function> | null;

  /**
   * This is not yet supported by any of our models. Modify the likelihood of
   * specified tokens appearing in the completion.
   */
  logit_bias?: Record<string, number> | null;

  /**
   * This is not yet supported by any of our models. Whether to return log
   * probabilities of the output tokens or not. If true, returns the log
   * probabilities of each output token returned in the `content` of `message`.
   */
  logprobs?: boolean | null;

  /**
   * The maximum number of tokens that can be generated in the chat completion. The
   * total length of input tokens and generated tokens is limited by the model's
   * context length.
   */
  max_tokens?: number | null;

  /**
   * How many chat completion choices to generate for each input message. Note that
   * you will be charged based on the number of generated tokens across all of the
   * choices. Keep `n` as `1` to minimize costs.
   */
  n?: number | null;

  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on
   * whether they appear in the text so far, increasing the model's likelihood to
   * talk about new topics.
   */
  presence_penalty?: number | null;

  /**
   * An object specifying the format that the model must output.
   *
   * Setting to `{ "type": "json" }` enables JSON mode, which guarantees the message
   * the model generates is valid JSON.
   *
   * Important: when using JSON mode, you must also instruct the model to produce
   * JSON yourself via a system or user message. Without this, the model may generate
   * an unending stream of whitespace until the generation reaches the token limit,
   * resulting in a long-running and seemingly "stuck" request. Also note that the
   * message content may be partially cut off if finish_reason="length", which
   * indicates the generation exceeded max_tokens or the conversation exceeded the
   * max context length.
   */
  response_format?: CompletionCreateParams.ResponseFormat | null;

  /**
   * If specified, our system will sample deterministically, such that repeated
   * requests with the same seed and parameters will return the same result.
   */
  seed?: number | null;

  /**
   * Up to 4 sequences where the API will stop generating further tokens. The
   * returned text will not contain the stop sequence.
   */
  stop?: string | null | Array<string>;

  /**
   * If set, partial message deltas will be sent. Tokens will be sent as data-only
   * server-sent events as they become available, with the stream terminated by a
   * data: [DONE]. [Example code](/docs/text-chat#streaming-a-chat-completion).
   */
  stream?: boolean | null;

  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will
   * make the output more random, while lower values like 0.2 will make it more
   * focused and deterministic. We generally recommend altering this or top_p but not
   * both
   */
  temperature?: number | null;

  /**
   * Controls which (if any) function is called by the model. Specifying a particular
   * function via a structured object like
   * `{"type": "function", "function": {"name": "my_function"}}` forces the model to
   * call that function.
   */
  tool_choice?: 'none' | 'auto' | CompletionCreateParams.ChatToolChoice | null;

  /**
   * A list of tools the model may call. Currently, only functions are supported as a
   * tool. Use this to provide a list of functions the model may generate JSON inputs
   * for. A max of 128 functions are supported.
   */
  tools?: Array<CompletionCreateParams.Tool> | null;

  /**
   * This is not yet supported by any of our models. An integer between 0 and 20
   * specifying the number of most likely tokens to return at each token position,
   * each with an associated log probability. `logprobs` must be set to `true` if
   * this parameter is used.
   */
  top_logprobs?: number | null;

  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the
   * model considers the results of the tokens with top_p probability mass. So 0.1
   * means only the tokens comprising the top 10% probability mass are considered. We
   * generally recommend altering this or temperature but not both.
   */
  top_p?: number | null;

  /**
   * A unique identifier representing your end-user, which can help us monitor and
   * detect abuse.
   */
  user?: string | null;
}

export namespace CompletionCreateParams {
  export interface ChatCompletionRequestSystemMessage {
    /**
     * The contents of the system message.
     */
    content: string;

    /**
     * The role of the messages author, in this case `system`.
     */
    role: 'system';

    /**
     * An optional name for the participant. Provides the model information to
     * differentiate between participants of the same role.
     */
    name?: string;

    tool_call_id?: string | null;
  }

  export interface ChatCompletionRequestUserMessage {
    /**
     * The contents of the user message.
     */
    content:
      | string
      | Array<
          | ChatCompletionRequestUserMessage.ChatCompletionRequestMessageContentPartText
          | ChatCompletionRequestUserMessage.ChatCompletionRequestMessageContentPartImage
        >;

    /**
     * The role of the messages author, in this case `user`.
     */
    role: 'user';

    /**
     * An optional name for the participant. Provides the model information to
     * differentiate between participants of the same role.
     */
    name?: string | null;

    tool_call_id?: string | null;
  }

  export namespace ChatCompletionRequestUserMessage {
    export interface ChatCompletionRequestMessageContentPartText {
      /**
       * The text content.
       */
      text: string;

      /**
       * The type of the content part.
       */
      type: 'text';
    }

    export interface ChatCompletionRequestMessageContentPartImage {
      image_url: ChatCompletionRequestMessageContentPartImage.ImageURL;

      /**
       * The type of the content part.
       */
      type: 'image_url';
    }

    export namespace ChatCompletionRequestMessageContentPartImage {
      export interface ImageURL {
        /**
         * Either a URL of the image or the base64 encoded image data.
         */
        url: string;

        /**
         * Specifies the detail level of the image.
         */
        detail?: 'auto' | 'low' | 'high';
      }
    }
  }

  export interface ChatCompletionRequestAssistantMessage {
    /**
     * The role of the messages author, in this case `assistant`.
     */
    role: 'assistant';

    /**
     * The contents of the assistant message. Required unless `tool_calls` or
     * `function_call` is specified.
     */
    content?: string | null;

    /**
     * @deprecated: Deprecated and replaced by `tool_calls`. The name and arguments of
     * a function that should be called, as generated by the model.
     */
    function_call?: ChatCompletionRequestAssistantMessage.FunctionCall;

    /**
     * An optional name for the participant. Provides the model information to
     * differentiate between participants of the same role.
     */
    name?: string;

    tool_call_id?: string | null;

    /**
     * The tool calls generated by the model, such as function calls.
     */
    tool_calls?: Array<ChatCompletionRequestAssistantMessage.ToolCall>;
  }

  export namespace ChatCompletionRequestAssistantMessage {
    /**
     * @deprecated: Deprecated and replaced by `tool_calls`. The name and arguments of
     * a function that should be called, as generated by the model.
     */
    export interface FunctionCall {
      /**
       * The arguments to call the function with, as generated by the model in JSON
       * format. Note that the model does not always generate valid JSON, and may
       * hallucinate parameters not defined by your function schema. Validate the
       * arguments in your code before calling your function.
       */
      arguments: string;

      /**
       * The name of the function to call.
       */
      name: string;
    }

    export interface ToolCall {
      /**
       * The ID of the tool call.
       */
      id: string;

      /**
       * The function that the model called.
       */
      function: ToolCall.Function;

      /**
       * The type of the tool. Currently, only `function` is supported.
       */
      type: 'function';
    }

    export namespace ToolCall {
      /**
       * The function that the model called.
       */
      export interface Function {
        /**
         * The arguments to call the function with, as generated by the model in JSON
         * format. Note that the model does not always generate valid JSON, and may
         * hallucinate parameters not defined by your function schema. Validate the
         * arguments in your code before calling your function.
         */
        arguments: string;

        /**
         * The name of the function to call.
         */
        name: string;
      }
    }
  }

  export interface ChatCompletionRequestToolMessage {
    /**
     * The contents of the tool message.
     */
    content: string;

    /**
     * The role of the messages author, in this case `tool`.
     */
    role: 'tool';

    /**
     * Tool call that this message is responding to.
     */
    tool_call_id: string;

    name?: string | null;
  }

  /**
   * @deprecated
   */
  export interface ChatCompletionRequestFunctionMessage {
    /**
     * The contents of the function message.
     */
    content: string | null;

    /**
     * The name of the function to call.
     */
    name: string;

    /**
     * The role of the messages author, in this case `function`.
     */
    role: 'function';

    tool_call_id?: string | null;
  }

  /**
   * Specifying a particular function via `{"name": "my_function"}` forces the model
   * to call that function.
   */
  export interface ChatCompletionFunctionCallOption {
    /**
     * The name of the function to call.
     */
    name: string;
  }

  /**
   * @deprecated
   */
  export interface Function {
    /**
     * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain
     * underscores and dashes, with a maximum length of 64.
     */
    name: string;

    /**
     * A description of what the function does, used by the model to choose when and
     * how to call the function.
     */
    description?: string;

    /**
     * The parameters the functions accepts, described as a JSON Schema object. See the
     * [guide](/docs/guides/text-generation/function-calling) for examples, and the
     * [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for
     * documentation about the format.
     *
     * Omitting `parameters` defines a function with an empty parameter list.
     */
    parameters?: Record<string, unknown>;
  }

  /**
   * An object specifying the format that the model must output.
   *
   * Setting to `{ "type": "json" }` enables JSON mode, which guarantees the message
   * the model generates is valid JSON.
   *
   * Important: when using JSON mode, you must also instruct the model to produce
   * JSON yourself via a system or user message. Without this, the model may generate
   * an unending stream of whitespace until the generation reaches the token limit,
   * resulting in a long-running and seemingly "stuck" request. Also note that the
   * message content may be partially cut off if finish_reason="length", which
   * indicates the generation exceeded max_tokens or the conversation exceeded the
   * max context length.
   */
  export interface ResponseFormat {
    type?: string;
  }

  export interface ChatToolChoice {
    function: ChatToolChoice.Function;

    type: 'function';
  }

  export namespace ChatToolChoice {
    export interface Function {
      /**
       * The name of the function to call.
       */
      name: string;
    }
  }

  export interface Tool {
    function: Tool.Function;

    type: 'function';
  }

  export namespace Tool {
    export interface Function {
      name: string;

      description?: string;

      parameters?: Record<string, unknown>;
    }
  }
}

export namespace Completions {
  export import ChatCompletion = CompletionsAPI.ChatCompletion;
  export import CompletionCreateParams = CompletionsAPI.CompletionCreateParams;
}
