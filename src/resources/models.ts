// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as ModelsAPI from './models';

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
  list(options?: Core.RequestOptions): Core.APIPromise<ModelListResponse> {
    return this._client.get('/openai/v1/models', options);
  }

  /**
   * Delete a model
   */
  delete(model: string, options?: Core.RequestOptions): Core.APIPromise<ModelDeleted> {
    return this._client.delete(`/openai/v1/models/${model}`, options);
  }
}

/**
 * Describes an OpenAI model offering that can be used with the API.
 */
export interface Model {
  /**
   * The model identifier, which can be referenced in the API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) when the model was created.
   */
  created: number;

  /**
   * The object type, which is always "model".
   */
  object: 'model';

  /**
   * The organization that owns the model.
   */
  owned_by: string;
}

export interface ModelDeleted {
  id: string;

  deleted: boolean;

  object: string;
}

export interface ModelListResponse {
  data: Array<Model>;

  object: 'list';
}

export namespace Models {
  export import Model = ModelsAPI.Model;
  export import ModelDeleted = ModelsAPI.ModelDeleted;
  export import ModelListResponse = ModelsAPI.ModelListResponse;
}
