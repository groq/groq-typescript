// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Groq, { toFile } from 'groq-sdk';

const client = new Groq({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource translations', () => {
  // Unsupported either condition
  test.skip('create: only required params', async () => {
    const responsePromise = client.audio.translations.create({ model: 'whisper-large-v3-turbo' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Unsupported either condition
  test.skip('create: required and optional params', async () => {
    const response = await client.audio.translations.create({
      model: 'whisper-large-v3-turbo',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      prompt: 'prompt',
      response_format: 'json',
      temperature: 0,
      url: 'url',
    });
  });
});
