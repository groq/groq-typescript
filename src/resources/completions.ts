// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as CompletionsAPI from './completions';

export class Completions extends APIResource {}

/**
 * Usage statistics for the completion request.
 */
export interface CompletionUsage {
  /**
   * Number of tokens in the generated completion.
   */
  completion_tokens: number;

  prompt_tokens: number;

  /**
   * Total number of tokens used in the request (prompt + completion).
   */
  total_tokens: number;

  completion_time?: number;

  prompt_time?: number;

  queue_time?: number;

  /**
   * Number of tokens in the prompt.
   */
  total_time?: number;
}

export namespace Completions {
  export import CompletionUsage = CompletionsAPI.CompletionUsage;
}
