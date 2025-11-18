// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class Completions extends APIResource {}

/**
 * Usage statistics for the completion request.
 */
export interface CompletionUsage {
  /**
   * Number of tokens in the generated completion.
   */
  completion_tokens: number;

  /**
   * Number of tokens in the prompt.
   */
  prompt_tokens: number;

  /**
   * Total number of tokens used in the request (prompt + completion).
   */
  total_tokens: number;

  /**
   * Time spent generating tokens
   */
  completion_time?: number;

  /**
   * Breakdown of tokens in the completion.
   */
  completion_tokens_details?: CompletionUsage.CompletionTokensDetails | null;

  /**
   * Time spent processing input tokens
   */
  prompt_time?: number;

  /**
   * Breakdown of tokens in the prompt.
   */
  prompt_tokens_details?: CompletionUsage.PromptTokensDetails | null;

  /**
   * Time the requests was spent queued
   */
  queue_time?: number;

  /**
   * completion time and prompt time combined
   */
  total_time?: number;
}

export namespace CompletionUsage {
  /**
   * Breakdown of tokens in the completion.
   */
  export interface CompletionTokensDetails {
    /**
     * Number of tokens used for reasoning (for reasoning models).
     */
    reasoning_tokens: number;
  }

  /**
   * Breakdown of tokens in the prompt.
   */
  export interface PromptTokensDetails {
    /**
     * Number of tokens that were cached and reused.
     */
    cached_tokens: number;
  }
}

export declare namespace Completions {
  export { type CompletionUsage as CompletionUsage };
}
