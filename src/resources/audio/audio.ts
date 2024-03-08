// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'groq-sdk/resource';
import { Translation } from './translation';
import * as AudioAPI from 'groq-sdk/resources/audio/audio';
import * as TranscriptionAPI from 'groq-sdk/resources/audio/transcription';
import * as TranslationAPI from 'groq-sdk/resources/audio/translation';

export class Audio extends APIResource {
  transcription: TranscriptionAPI.TranscriptionResource = new TranscriptionAPI.TranscriptionResource(
    this._client,
  );
  translation: TranslationAPI.Translation = new TranslationAPI.Translation(this._client);
}

export interface Translation {
  text: string;
}

export namespace Audio {
  export import Translation = AudioAPI.Translation;
  export import TranscriptionResource = TranscriptionAPI.TranscriptionResource;
  export import Transcription = TranscriptionAPI.Transcription;
  export import TranscriptionCreateParams = TranscriptionAPI.TranscriptionCreateParams;
  export import TranslationCreateParams = TranslationAPI.TranslationCreateParams;
}
