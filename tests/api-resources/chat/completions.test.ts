// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Groq from 'groq-sdk';
import { Response } from 'node-fetch';

const groq = new Groq({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource completions', () => {
  test('create: only required params', async () => {
    const responsePromise = groq.chat.completions.create({
      messages: [
        { content: 'string', role: 'system' },
        { content: 'string', role: 'system' },
        { content: 'string', role: 'system' },
      ],
      model: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await groq.chat.completions.create({
      messages: [
        { content: 'string', role: 'system', name: 'string', tool_call_id: 'string' },
        { content: 'string', role: 'system', name: 'string', tool_call_id: 'string' },
        { content: 'string', role: 'system', name: 'string', tool_call_id: 'string' },
      ],
      model: 'string',
      frequency_penalty: -2,
      function_call: 'none',
      functions: [
        { description: 'string', name: 'string', parameters: { foo: 'bar' } },
        { description: 'string', name: 'string', parameters: { foo: 'bar' } },
        { description: 'string', name: 'string', parameters: { foo: 'bar' } },
      ],
      logit_bias: { foo: 0 },
      logprobs: true,
      max_tokens: 0,
      n: 1,
      presence_penalty: -2,
      response_format: { type: 'string' },
      seed: 0,
      stop: '\n',
      stream: true,
      temperature: 0,
      tool_choice: 'none',
      tools: [
        { function: { description: 'string', name: 'string', parameters: { foo: 'bar' } }, type: 'string' },
        { function: { description: 'string', name: 'string', parameters: { foo: 'bar' } }, type: 'string' },
        { function: { description: 'string', name: 'string', parameters: { foo: 'bar' } }, type: 'string' },
      ],
      top_logprobs: 0,
      top_p: 0,
      user: 'string',
    });
  });
});
