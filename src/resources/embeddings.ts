// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as EmbeddingsAPI from './embeddings';

export class Embeddings extends APIResource {
  /**
   * Creates an embedding vector representing the input text.
   */
  create(
    body: EmbeddingCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmbeddingCreateResponse> {
    return this._client.post('/openai/v1/embeddings', { body, ...options });
  }
}

export interface EmbeddingCreateResponse {
  /**
   * The list of embeddings generated by the model.
   */
  data: Array<EmbeddingCreateResponse.Data>;

  /**
   * The name of the model used to generate the embedding.
   */
  model: string;

  /**
   * The object type, which is always "list".
   */
  object: 'list';

  /**
   * The usage information for the request.
   */
  usage: EmbeddingCreateResponse.Usage;
}

export namespace EmbeddingCreateResponse {
  /**
   * Represents an embedding vector returned by embedding endpoint.
   */
  export interface Data {
    /**
     * The embedding vector, which is a list of floats. The length of vector depends on
     * the model as listed in the [embedding guide](/docs/guides/embeddings).
     */
    embedding: Array<number> | string;

    /**
     * The index of the embedding in the list of embeddings.
     */
    index: number;

    /**
     * The object type, which is always "embedding".
     */
    object: 'embedding';
  }

  /**
   * The usage information for the request.
   */
  export interface Usage {
    /**
     * The number of tokens used by the prompt.
     */
    prompt_tokens: number;

    /**
     * The total number of tokens used by the request.
     */
    total_tokens: number;
  }
}

export interface EmbeddingCreateParams {
  /**
   * Input text to embed, encoded as a string or array of tokens. To embed multiple
   * inputs in a single request, pass an array of strings or array of token arrays.
   * The input must not exceed the max input tokens for the model, cannot be an empty
   * string, and any array must be 2048 dimensions or less.
   */
  input: string | Array<string>;

  /**
   * ID of the model to use.
   */
  model: string;

  /**
   * The number of dimensions to return the embeddings in.
   */
  dimensions?: number;

  /**
   * The format to return the embeddings in.
   */
  encoding_format?: 'float' | 'base64';

  /**
   * A unique identifier representing your end-user, which can help us monitor and
   * detect abuse.
   */
  user?: string | null;
}

export namespace Embeddings {
  export import EmbeddingCreateResponse = EmbeddingsAPI.EmbeddingCreateResponse;
  export import EmbeddingCreateParams = EmbeddingsAPI.EmbeddingCreateParams;
}
