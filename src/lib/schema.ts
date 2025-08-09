import type { Groq } from '../index';
import type { ChatCompletionCreateParamsNonStreaming } from '../resources/chat/completions';
import type { StandardSchemaV1 } from '@standard-schema/spec';
import { strictJsonSchema, toJsonSchema } from 'xsschema';

type JsonSchema = Awaited<ReturnType<typeof toJsonSchema>>;
const schemaCache = new WeakMap<StandardSchemaV1, JsonSchema>();
async function getJsonSchema(schema: StandardSchemaV1) {
  let cached = schemaCache.get(schema);
  if (!cached) {
    cached = await toJsonSchema(schema);
    schemaCache.set(schema, cached);
  }
  cached = strictJsonSchema(cached);
  return cached as Record<string, unknown>;
}

export type SchemaBasedCompletionParams = Omit<
  ChatCompletionCreateParamsNonStreaming,
  'response_format' | 'stream'
>;
export const schemaBasedCompletion = async (
  client: Groq,
  schema: StandardSchemaV1,
  params: SchemaBasedCompletionParams,
) => {
  let response;
  response = await client.chat.completions.create({
    ...params,
    response_format: {
      type: 'json_schema',
      json_schema: {
        name: 'response',
        schema: await getJsonSchema(schema),
        strict: true,
      },
    },
  });
  const content = response.choices[0]?.message.content;
  if (!content) {
    throw new Error('No content in response. Ensure the model supports structured outputs.');
  }
  return JSON.parse(content);
};
