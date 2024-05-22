// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * The parameters the functions accepts, described as a JSON Schema object. See the
 * [guide](/docs/guides/text-generation/function-calling) for examples, and the
 * [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for
 * documentation about the format.
 *
 * Omitting `parameters` defines a function with an empty parameter list.
 */
export type FunctionParameters = Record<string, unknown>;
