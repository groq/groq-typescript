// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Groq from 'groq-sdk';

const client = new Groq({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource speech', () => {
  test('create: required and optional params', async () => {
    const response = await client.audio.speech.create({
      input: 'input',
      model: 'model',
      voice: 'voice',
      response_format: 'wav',
      speed: 1,
    });
  });
});
