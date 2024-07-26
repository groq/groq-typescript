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
    const response = await groq.chat.completions.create({
      messages: [{ content: 'content', role: 'system', name: 'name', tool_call_id: 'tool_call_id' }],
      model: 'string',
      frequency_penalty: -2,
      function_call: 'none',
      functions: [
        { description: 'description', name: 'name', parameters: { foo: 'bar' } },
        { description: 'description', name: 'name', parameters: { foo: 'bar' } },
        { description: 'description', name: 'name', parameters: { foo: 'bar' } },
      ],
      logit_bias: { foo: 0 },
      logprobs: true,
      max_tokens: 0,
      n: 1,
      parallel_tool_calls: true,
      presence_penalty: -2,
      response_format: { type: 'json_object' },
      seed: 0,
      stop: '\n',
      stream: true,
      stream_options: { include_usage: true },
      temperature: 1,
      tool_choice: 'none',
      tools: [
        {
          type: 'function',
          function: { description: 'description', name: 'name', parameters: { foo: 'bar' } },
        },
        {
          type: 'function',
          function: { description: 'description', name: 'name', parameters: { foo: 'bar' } },
        },
        {
          type: 'function',
          function: { description: 'description', name: 'name', parameters: { foo: 'bar' } },
        },
      ],
      top_logprobs: 0,
      top_p: 1,
      user: 'user',
    });
  });
});
