// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'groq-sdk/core';
import { APIResource } from 'groq-sdk/resource';
import * as ModelsAPI from 'groq-sdk/resources/models';

export class Models extends APIResource {
  /**
   * Get a specific model
   */
  retrieve(model: string, options?: Core.RequestOptions): Core.APIPromise<Model> {
    return this._client.get(`/openai/v1/models/${model}`, options);
  }

  /**
   * get all available models
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ModelList> {
    return this._client.get('/openai/v1/models', options);
  }

  /**
   * Delete a model
   */
  delete(model: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/openai/v1/models/${model}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface Model {
  id?: string;

  created?: number;

  object?: string;

  owned_by?: string;
}

export interface ModelList {
  data?: Array<Model>;

  object?: string;
}

export namespace Models {
  export import Model = ModelsAPI.Model;
  export import ModelList = ModelsAPI.ModelList;
}
