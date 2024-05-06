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
        { content: 'string', role: 'string' },
        { content: 'string', role: 'string' },
        { content: 'string', role: 'string' },
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
        {
          content: 'string',
          name: 'string',
          role: 'string',
          tool_call_id: 'string',
          tool_calls: [
            { function: { arguments: 'string', name: 'string' }, id: 'string', type: 'string' },
            { function: { arguments: 'string', name: 'string' }, id: 'string', type: 'string' },
            { function: { arguments: 'string', name: 'string' }, id: 'string', type: 'string' },
          ],
        },
        {
          content: 'string',
          name: 'string',
          role: 'string',
          tool_call_id: 'string',
          tool_calls: [
            { function: { arguments: 'string', name: 'string' }, id: 'string', type: 'string' },
            { function: { arguments: 'string', name: 'string' }, id: 'string', type: 'string' },
            { function: { arguments: 'string', name: 'string' }, id: 'string', type: 'string' },
          ],
        },
        {
          content: 'string',
          name: 'string',
          role: 'string',
          tool_call_id: 'string',
          tool_calls: [
            { function: { arguments: 'string', name: 'string' }, id: 'string', type: 'string' },
            { function: { arguments: 'string', name: 'string' }, id: 'string', type: 'string' },
            { function: { arguments: 'string', name: 'string' }, id: 'string', type: 'string' },
          ],
        },
      ],
      model: 'string',
      frequency_penalty: 0,
      logit_bias: { foo: 0 },
      logprobs: true,
      max_tokens: 0,
      n: 0,
      presence_penalty: 0,
      response_format: { type: 'string' },
      seed: 0,
      stop: '\n',
      stream: true,
      temperature: 0,
      tool_choice: { string: 'string', toolChoice: { function: { name: 'string' }, type: 'string' } },
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
