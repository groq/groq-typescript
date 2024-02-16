# Groq TypeScript API Library 🚀

[![NPM version](https://img.shields.io/npm/v/groq-sdk.svg)](https://npmjs.org/package/groq-sdk)

The Groq TypeScript API Library provides convenient access to the Groq REST API from server-side TypeScript or JavaScript. This README outlines how you can get started.

For the REST API documentation, see [console.groq.com](https://console.groq.com/docs). 
For full API details included in our library, see [api.md](api.md).

## Table of Contents

- [Requirements](#requirements)
- [Semantic Versioning](#semantic-versioning)
- [Installation](#installation)
- [Usage](#usage)
  - [Request and Response Types](#request-and-response-types)
- [Handling Errors](#handling-errors)
  - [Error Codes](#error-codes) 
  - [Retries](#retries)
  - [Timeouts](#timeouts)
- [Advanced Usage](#advanced-usage)
  - [Accessing Raw Response Data](#accessing-raw-response-data)
- [Customizing the Fetch Client](#customizing-the-fetch-client)
- [Configuring an HTTP(S) Agent](#configuring-an-https-agent)

## Requirements

TypeScript >= 4.5 is supported along with the following runtimes:

- Node.js 18 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions
- Deno v1.28.0 or higher using `import Groq from "npm:groq-sdk"`
- Bun 1.0 or later
- Cloudflare Workers
- Vercel Edge Runtime
- Jest 28 or greater with the `"node"` environment (`"jsdom"` is not supported at this time)
- Nitro v2.6 or greater

**Note:** React Native is not supported at this time.

If you are interested in other runtime environments, please open or upvote an issue on GitHub!

## Semantic Versioning

The Groq TypeScript API Library generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals)_.
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously to ensure you can rely on a smooth upgrade experience and are always interested in hearing your feedback. Please let us know how we're doing by opening an [issue](https://www.github.com/groq/groq-node/issues) with any questions, bugs, or suggestions! 🤝

## Installation

```sh
npm install --save groq-sdk
# or
yarn add groq-sdk
```

## Usage

The code snippet below shows how to get started using the chat completions API. For the full API details included in our library, see [api.md](api.md).

<!-- prettier-ignore -->
```js
import Groq from 'groq-sdk';

const groq = new Groq();

async function main() {
  const chatCompletion = await groq.chat.completions.create({
    messages: [{ role: 'user', content: 'Explain the importance of low latency LLMs' }],
    model: 'mixtral-8x7b-32768',
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();
```

### Request and Response Types

The Groq TypeScript API Library includes TypeScript definitions for all request params and response fields. You may import and use them like so:

<!-- prettier-ignore -->
```ts
import Groq from 'groq-sdk';

const groq = new Groq();

async function main() {
  const params: Groq.Chat.CompletionCreateParams = {
    messages: [
      { role: 'system', content: 'You are a helpful assisstant.' },
      { role: 'user', content: 'Explain the importance of low latency LLMs' },
    ],
    model: 'mixtral-8x7b-32768',
  };
  const chatCompletion: Groq.Chat.ChatCompletion = await groq.chat.completions.create(params);
}

main();
```

Documentation for each method, request param, and response field is available in docstrings and will appear on hover in most modern editors.

## Handling errors

When the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `APIError` will be thrown:

<!-- prettier-ignore -->
```ts
async function main() {
  const chatCompletion = await groq.chat.completions
    .create({
      messages: [
        { role: 'system', content: 'You are a helpful assisstant.' },
        { role: 'user', content: 'Explain the importance of low latency LLMs' },
      ],
      model: 'mixtral-8x7b-32768',
    })
    .catch((err) => {
      if (err instanceof Groq.APIError) {
        console.log(err.status); // 400
        console.log(err.name); // BadRequestError
        console.log(err.headers); // {server: 'nginx', ...}
      } else {
        throw err;
      }
    });
}

main();
```

### Error Codes

Error codes are as follows:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.

Connection errors (e.g. due to network connectivity problems), 408 Request Timeout, 409 Conflict, 429 Rate Limit, and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable retries:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const groq = new Groq({
  maxRetries: 0, // default is 2
});

// Or, configure per-request:
await groq.chat.completions.create({ messages: [{ role: 'system', content: 'You are a helpful assisstant.' }, { role: 'user', content: 'Explain the importance of low latency LLMs' }], model: 'mixtral-8x7b-32768' }, {
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 1 minute by default. On timeout, an `APIConnectionTimeoutError` is thrown. 

You can configure timeouts with the `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const groq = new Groq({
  timeout: 20 * 1000, // 20 seconds (default is 1 minute)
});

// Override per-request:
await groq.chat.completions.create({ messages: [{ role: 'system', content: 'You are a helpful assisstant.' }, { role: 'user', content: 'Explain the importance of low latency LLMs' }], model: 'mixtral-8x7b-32768' }, {
  timeout: 5 * 1000,
});
```

**Note:** Requests that time out will be [retried twice by default](#retries).

## Advanced Usage

### Accessing Raw Response Data

The "raw" `Response` (e.g. headers) returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.

You can also use the `.withResponse()` method to get the raw `Response` along with the parsed data:

<!-- prettier-ignore -->
```ts
const groq = new Groq();

const response = await groq.chat.completions
  .create({
    messages: [
      { role: 'system', content: 'You are a helpful assisstant.' },
      { role: 'user', content: 'Explain the importance of low latency LLMs' },
    ],
    model: 'mixtral-8x7b-32768',
  })
  .asResponse();
console.log(response.headers.get('X-My-Header'));
console.log(response.statusText); // access the underlying Response object

const { data: chatCompletion, response: raw } = await groq.chat.completions
  .create({
    messages: [
      { role: 'system', content: 'You are a helpful assisstant.' },
      { role: 'user', content: 'Explain the importance of low latency LLMs' },
    ],
    model: 'mixtral-8x7b-32768',
  })
  .withResponse();
console.log(raw.headers.get('X-My-Header'));
console.log(chatCompletion.id);
```

## Customizing the Fetch Client

By default, the Groq TypeScript API Library uses `node-fetch` in Node, and expects a global `fetch` function in other environments.

If you would prefer to use a global, web-standards-compliant `fetch` function even in a Node environment, (e.g. if you are running Node with `--experimental-fetch` or using NextJS which polyfills with `undici`), add the following import before your first import `from "Groq"`:

```ts
// Tell TypeScript and the package to use the global web fetch instead of node-fetch.
// Note, despite the name, this does not add any polyfills, but expects them to be provided if needed.
import 'groq-sdk/shims/web';
import Groq from 'groq-sdk';
```

To do the inverse, add `import "groq-sdk/shims/node"` (which does import polyfills).
This can also be useful if you are getting the wrong TypeScript types for `Response` - more details [here](https://github.com/groq/groq-node/tree/main/src/_shims#readme).

You may also provide a custom `fetch` function when instantiating the client, which can be used to inspect or alter the `Request` or `Response` before/after each request:

```ts
import { fetch } from 'undici'; // as one example
import Groq from 'groq-sdk';

const client = new Groq({
  fetch: async (url: RequestInfo, init?: RequestInfo): Promise<Response> => {
    console.log('About to make a request', url, init);
    const response = await fetch(url, init);
    console.log('Got response', response);
    return response;
  },
});
```

**Note:** If given a `DEBUG=true` environment variable, the Groq TypeScript API Librarywill log all requests and responses automatically.
This is intended for debugging purposes only and may change in the future without notice.

## Configuring an HTTP(S) Agent

By default, this library uses a stable agent for all HTTP/HTTPS requests to reuse TCP connections, eliminating many TCP & TLS handshakes and shaving around 100ms off most requests.

If you would like to disable or customize this behavior (e.g. to use the API behind a proxy), you can pass an `httpAgent` to be used for all requests (whether HTTP or HTTPS) as outlined in the following example:

<!-- prettier-ignore -->
```ts
import http from 'http';
import HttpsProxyAgent from 'https-proxy-agent';

// Configure the default for all requests:
const groq = new Groq({
  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
});

// Override per-request:
await groq.chat.completions.create({ messages: [{ role: 'system', content: 'You are a helpful assisstant.' }, { role: 'user', content: 'Explain the importance of low latency LLMs' }], model: 'mixtral-8x7b-32768' }, {
  baseURL: 'http://localhost:8080/test-api',
  httpAgent: new http.Agent({ keepAlive: false }),
})
```
