// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'groq-sdk/resource';
import * as AudioAPI from 'groq-sdk/resources/audio/audio';
import * as TranscriptionsAPI from 'groq-sdk/resources/audio/transcriptions';
import * as TranslationsAPI from 'groq-sdk/resources/audio/translations';

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
  export import TranscriptionCreateParams = TranscriptionsAPI.TranscriptionCreateParams;
  export import Translations = TranslationsAPI.Translations;
  export import TranslationCreateParams = TranslationsAPI.TranslationCreateParams;
}
