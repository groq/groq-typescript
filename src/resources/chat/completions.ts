// File generated from our OpenAPI spec by Stainless.

import * as Core from 'groq-sdk/core';
import { APIResource } from 'groq-sdk/resource';
import * as CompletionsAPI from 'groq-sdk/resources/chat/completions';
import { Stream } from 'groq-sdk/lib/streaming';
import { ChatCompletionChunk } from 'groq-sdk/lib/chat_completions_ext';

export class Completions extends APIResource {
  /**
   * Creates a completion for a chat prompt
   */
  create(
    body: ChatCompletionCreateParamsNonStreaming,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatCompletion>;
  create(
    body: ChatCompletionCreateParamsStreaming,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Stream<ChatCompletionChunk>>;
  create(
    body: ChatCompletionCreateParamsBase,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Stream<ChatCompletionChunk> | ChatCompletion>;
  create(
    body: ChatCompletionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatCompletion> | Core.APIPromise<Stream<ChatCompletionChunk>> {
    return this._client.post('/openai/v1/chat/completions', {
      body,
      ...options,
      stream: body.stream ?? false,
    }) as Core.APIPromise<ChatCompletion> | Core.APIPromise<Stream<ChatCompletionChunk>>;
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

/**
 * From https://console.groq.com/docs/models
 */
export type Model =
  | 'llama3-8b-8192'
  | 'llama3-70b-8192'
  | 'llama2-70b-4096'
  | 'mixtral-8x7b-32768'
  | 'gemma-7b-it';

export interface ChatCompletionCreateParamsBase {
  messages: Array<CompletionCreateParams.Message>;

  model: Model;

  frequency_penalty?: number;

  logit_bias?: Record<string, number>;

  logprobs?: boolean;

  max_tokens?: number;

  n?: number;

  presence_penalty?: number;

  response_format?: CompletionCreateParams.ResponseFormat;

  seed?: number;

  /**
   * Up to 4 sequences where the API will stop generating further tokens. The
   * returned text will not contain the stop sequence.
   */
  stop?: string | null | Array<string>;

  stream?: boolean;

  temperature?: number;

  tool_choice?: CompletionCreateParams.ToolChoice;

  tools?: Array<CompletionCreateParams.Tool>;

  top_logprobs?: number;

  top_p?: number;

  user?: string;
}

export namespace CompletionCreateParams {
  export interface Message {
    content: string;

    role: string;

    name?: string;

    /**
     * ToolMessage Fields
     */
    tool_call_id?: string;

    /**
     * AssistantMessage Fields
     */
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

  export interface ResponseFormat {
    type?: string;
  }

  export interface ToolChoice {
    string?: string;

    toolChoice?: ToolChoice.ToolChoice;
  }

  export namespace ToolChoice {
    export interface ToolChoice {
      function?: ToolChoice.Function;

      type?: string;
    }

    export namespace ToolChoice {
      export interface Function {
        name?: string;
      }
    }
  }

  export interface Tool {
    function?: Tool.Function;

    type?: string;
  }

  export namespace Tool {
    export interface Function {
      description?: string;

      name?: string;

      parameters?: Record<string, unknown>;
    }
  }
}

export namespace Completions {
  export import ChatCompletion = CompletionsAPI.ChatCompletion;
  export import CompletionCreateParams = CompletionsAPI.CompletionCreateParams;
}

export interface ChatCompletionCreateParamsNonStreaming extends ChatCompletionCreateParamsBase {
  stream?: false;
}

export interface ChatCompletionCreateParamsStreaming extends ChatCompletionCreateParamsBase {
  stream: true;
}

export type ChatCompletionCreateParams =
  | ChatCompletionCreateParamsNonStreaming
  | ChatCompletionCreateParamsStreaming;
