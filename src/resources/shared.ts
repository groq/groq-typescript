// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface ErrorObject {
  code: string | null;

  message: string;

  param: string | null;

  type: string;
}

export interface FunctionDefinition {
  /**
   * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain
   * underscores and dashes, with a maximum length of 64.
   */
  name: string;

  /**
   * A description of what the function does, used by the model to choose when and
   * how to call the function.
   */
  description?: string;

  /**
   * Function parameters defined as a JSON Schema object. Refer to
   * https://json-schema.org/understanding-json-schema/ for schema documentation.
   */
  parameters?: FunctionParameters;

  /**
   * Whether to enable strict schema adherence when generating the output. If set to
   * true, the model will always follow the exact schema defined in the `schema`
   * field. Only a subset of JSON Schema is supported when `strict` is `true`.
   */
  strict?: boolean;
}

/**
 * Function parameters defined as a JSON Schema object. Refer to
 * https://json-schema.org/understanding-json-schema/ for schema documentation.
 */
export type FunctionParameters = { [key: string]: unknown };
