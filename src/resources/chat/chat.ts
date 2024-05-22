// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CompletionsAPI from './completions';

export class Chat extends APIResource {
  completions: CompletionsAPI.Completions = new CompletionsAPI.Completions(this._client);
}

export namespace Chat {
  export import Completions = CompletionsAPI.Completions;
  export import ChatCompletion = CompletionsAPI.ChatCompletion;
  export import ChatCompletionAssistantMessageParam = CompletionsAPI.ChatCompletionAssistantMessageParam;
  export import ChatCompletionContentPart = CompletionsAPI.ChatCompletionContentPart;
  export import ChatCompletionContentPartImage = CompletionsAPI.ChatCompletionContentPartImage;
  export import ChatCompletionContentPartText = CompletionsAPI.ChatCompletionContentPartText;
  export import ChatCompletionFunctionCallOption = CompletionsAPI.ChatCompletionFunctionCallOption;
  export import ChatCompletionFunctionMessageParam = CompletionsAPI.ChatCompletionFunctionMessageParam;
  export import ChatCompletionMessageParam = CompletionsAPI.ChatCompletionMessageParam;
  export import ChatCompletionMessageToolCall = CompletionsAPI.ChatCompletionMessageToolCall;
  export import ChatCompletionSystemMessageParam = CompletionsAPI.ChatCompletionSystemMessageParam;
  export import ChatCompletionToolMessageParam = CompletionsAPI.ChatCompletionToolMessageParam;
  export import ChatCompletionUserMessageParam = CompletionsAPI.ChatCompletionUserMessageParam;
  export import CompletionCreateParams = CompletionsAPI.CompletionCreateParams;
}
