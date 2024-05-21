// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as TranslationsAPI from './translations';
import { type Uploadable, multipartFormRequestOptions } from '../../core';

export class Translations extends APIResource {
  /**
   * Translates audio into English.
   */
  create(
    body: TranslationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TranslationCreateResponse> {
    return this._client.post(
      '/openai/v1/audio/translations',
      multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface Translation {
  text: string;
}

export type TranslationCreateResponse =
  | Translation
  | TranslationCreateResponse.CreateTranslationResponseVerboseJson;

export namespace TranslationCreateResponse {
  export interface CreateTranslationResponseVerboseJson {
    /**
     * The duration of the input audio.
     */
    duration: string;

    /**
     * The language of the output translation (always `english`).
     */
    language: string;

    /**
     * The translated text.
     */
    text: string;

    /**
     * Segments of the translated text and their corresponding details.
     */
    segments?: Array<CreateTranslationResponseVerboseJson.Segment>;
  }

  export namespace CreateTranslationResponseVerboseJson {
    export interface Segment {
      /**
       * Unique identifier of the segment.
       */
      id: number;

      /**
       * Average logprob of the segment. If the value is lower than -1, consider the
       * logprobs failed.
       */
      avg_logprob: number;

      /**
       * Compression ratio of the segment. If the value is greater than 2.4, consider the
       * compression failed.
       */
      compression_ratio: number;

      /**
       * End time of the segment in seconds.
       */
      end: number;

      /**
       * Probability of no speech in the segment. If the value is higher than 1.0 and the
       * `avg_logprob` is below -1, consider this segment silent.
       */
      no_speech_prob: number;

      /**
       * Seek offset of the segment.
       */
      seek: number;

      /**
       * Start time of the segment in seconds.
       */
      start: number;

      /**
       * Temperature parameter used for generating the segment.
       */
      temperature: number;

      /**
       * Text content of the segment.
       */
      text: string;

      /**
       * Array of token IDs for the text content.
       */
      tokens: Array<number>;
    }
  }
}

export interface TranslationCreateParams {
  /**
   * The audio file object (not file name) translate, in one of these formats: flac,
   * mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
   */
  file: Uploadable;

  /**
   * ID of the model to use. Only `whisper-large-v3` is currently available.
   */
  model: (string & {}) | 'whisper-large-v3';

  /**
   * An optional text to guide the model's style or continue a previous audio
   * segment. The [prompt](/docs/guides/speech-to-text/prompting) should be in
   * English.
   */
  prompt?: string;

  /**
   * The format of the transcript output, in one of these options: `json`, `text`, or
   * `verbose_json`.
   */
  response_format?: 'json' | 'text' | 'verbose_json';

  /**
   * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the
   * output more random, while lower values like 0.2 will make it more focused and
   * deterministic. If set to 0, the model will use
   * [log probability](https://en.wikipedia.org/wiki/Log_probability) to
   * automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
}

export namespace Translations {
  export import Translation = TranslationsAPI.Translation;
  export import TranslationCreateResponse = TranslationsAPI.TranslationCreateResponse;
  export import TranslationCreateParams = TranslationsAPI.TranslationCreateParams;
}
