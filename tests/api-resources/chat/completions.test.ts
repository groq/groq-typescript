// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Groq from 'groq-sdk';
import { Response } from 'node-fetch';

const client = new Groq({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource completions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.chat.completions.create({
      messages: [{ content: 'content', role: 'system' }],
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
    const response = await client.chat.completions.create({
      messages: [{ content: 'content', role: 'system', name: 'name' }],
      model: 'string',
      frequency_penalty: -2,
      function_call: 'none',
      functions: [
        { name: 'name', description: 'description', parameters: { foo: 'bar' } },
        { name: 'name', description: 'description', parameters: { foo: 'bar' } },
        { name: 'name', description: 'description', parameters: { foo: 'bar' } },
      ],
      logit_bias: { foo: 0 },
      logprobs: true,
      max_tokens: 0,
      n: 1,
      parallel_tool_calls: true,
      presence_penalty: -2,
      response_format: { type: 'text' },
      seed: 0,
      stop: '\n',
      stream: true,
      temperature: 1,
      tool_choice: 'none',
      tools: [
        {
          function: { name: 'name', description: 'description', parameters: { foo: 'bar' } },
          type: 'function',
        },
        {
          function: { name: 'name', description: 'description', parameters: { foo: 'bar' } },
          type: 'function',
        },
        {
          function: { name: 'name', description: 'description', parameters: { foo: 'bar' } },
          type: 'function',
        },
      ],
      top_logprobs: 0,
      top_p: 1,
      user: 'user',
    });
  });
});
