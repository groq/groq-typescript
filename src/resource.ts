// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Groq } from './index';

export abstract class APIResource {
  protected _client: Groq;

  constructor(client: Groq) {
    this._client = client;
  }
}
