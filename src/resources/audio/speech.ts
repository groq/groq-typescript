// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { type Response } from '../../_shims/index';

export class Speech extends APIResource {
  /**
   * Generates audio from the input text.
   */
  create(body: SpeechCreateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/openai/v1/audio/speech', {
      body,
      ...options,
      headers: { Accept: 'audio/wav', ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface SpeechCreateParams {
  /**
   * The text to generate audio for.
   */
  input: string;

  /**
   * One of the [available TTS models](/docs/text-to-speech).
   */
  model: string;

  /**
   * The voice to use when generating the audio. List of voices can be found
   * [here](/docs/text-to-speech).
   */
  voice: string;

  /**
   * The format to audio in. Supported formats are `wav, mp3`.
   */
  response_format?: 'wav' | 'mp3';

  /**
   * The speed of the generated audio. 1.0 is the only supported value.
   */
  speed?: number;
}

export declare namespace Speech {
  export { type SpeechCreateParams as SpeechCreateParams };
}
