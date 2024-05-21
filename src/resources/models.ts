// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as ModelsAPI from './models';

export class Models extends APIResource {
  /**
   * Get a specific model
   */
  retrieve(model: string, options?: Core.RequestOptions): Core.APIPromise<ModelRetrieveResponse> {
    return this._client.get(`/openai/v1/models/${model}`, options);
  }

  /**
   * get all available models
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ModelListResponse> {
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

export interface ModelRetrieveResponse {
  id?: string;

  created?: number;

  object?: string;

  owned_by?: string;
}

export interface ModelListResponse {
  data?: Array<ModelListResponse.Data>;

  object?: string;
}

export namespace ModelListResponse {
  export interface Data {
    id?: string;

    created?: number;

    object?: string;

    owned_by?: string;
  }
}

export namespace Models {
  export import ModelRetrieveResponse = ModelsAPI.ModelRetrieveResponse;
  export import ModelListResponse = ModelsAPI.ModelListResponse;
}
