// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AudioAPI from './audio';
import * as TranscriptionsAPI from './transcriptions';
import * as TranslationsAPI from './translations';

export class Audio extends APIResource {
  transcriptions: TranscriptionsAPI.Transcriptions = new TranscriptionsAPI.Transcriptions(this._client);
  translations: TranslationsAPI.Translations = new TranslationsAPI.Translations(this._client);
}

export interface Translation {
  text: string;
}

export namespace Audio {
  export import Translation = AudioAPI.Translation;
  export import Transcriptions = TranscriptionsAPI.Transcriptions;
  export import Transcription = TranscriptionsAPI.Transcription;
  export import TranscriptionCreateResponse = TranscriptionsAPI.TranscriptionCreateResponse;
  export import TranscriptionCreateParams = TranscriptionsAPI.TranscriptionCreateParams;
  export import Translations = TranslationsAPI.Translations;
  export import TranslationCreateResponse = TranslationsAPI.TranslationCreateResponse;
  export import TranslationCreateParams = TranslationsAPI.TranslationCreateParams;
}
