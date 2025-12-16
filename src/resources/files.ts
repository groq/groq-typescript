// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * Upload a file that can be used across various endpoints.
   *
   * The Batch API only supports `.jsonl` files up to 100 MB in size. The input also
   * has a specific required [format](/docs/batch).
   *
   * Please contact us if you need to increase these storage limits.
   */
  create(body: FileCreateParams, options?: RequestOptions): APIPromise<FileCreateResponse> {
    return this._client.post(
      '/openai/v1/files',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Returns a list of files.
   */
  list(options?: RequestOptions): APIPromise<FileListResponse> {
    return this._client.get('/openai/v1/files', options);
  }

  /**
   * Delete a file.
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<FileDeleteResponse> {
    return this._client.delete(path`/openai/v1/files/${fileID}`, options);
  }

  /**
   * Returns the contents of the specified file.
   */
  content(fileID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/openai/v1/files/${fileID}/content`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Returns information about a file.
   */
  info(fileID: string, options?: RequestOptions): APIPromise<FileInfoResponse> {
    return this._client.get(path`/openai/v1/files/${fileID}`, options);
  }
}

/**
 * The `File` object represents a document that has been uploaded.
 */
export interface FileCreateResponse {
  /**
   * The file identifier, which can be referenced in the API endpoints.
   */
  id?: string;

  /**
   * The size of the file, in bytes.
   */
  bytes?: number;

  /**
   * The Unix timestamp (in seconds) for when the file was created.
   */
  created_at?: number;

  /**
   * The name of the file.
   */
  filename?: string;

  /**
   * The object type, which is always `file`.
   */
  object?: 'file';

  /**
   * The intended purpose of the file. Supported values are `batch`, and
   * `batch_output`.
   */
  purpose?: 'batch' | 'batch_output';
}

export interface FileListResponse {
  data: Array<FileListResponse.Data>;

  object: 'list';
}

export namespace FileListResponse {
  /**
   * The `File` object represents a document that has been uploaded.
   */
  export interface Data {
    /**
     * The file identifier, which can be referenced in the API endpoints.
     */
    id?: string;

    /**
     * The size of the file, in bytes.
     */
    bytes?: number;

    /**
     * The Unix timestamp (in seconds) for when the file was created.
     */
    created_at?: number;

    /**
     * The name of the file.
     */
    filename?: string;

    /**
     * The object type, which is always `file`.
     */
    object?: 'file';

    /**
     * The intended purpose of the file. Supported values are `batch`, and
     * `batch_output`.
     */
    purpose?: 'batch' | 'batch_output';
  }
}

export interface FileDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'file';
}

/**
 * The `File` object represents a document that has been uploaded.
 */
export interface FileInfoResponse {
  /**
   * The file identifier, which can be referenced in the API endpoints.
   */
  id?: string;

  /**
   * The size of the file, in bytes.
   */
  bytes?: number;

  /**
   * The Unix timestamp (in seconds) for when the file was created.
   */
  created_at?: number;

  /**
   * The name of the file.
   */
  filename?: string;

  /**
   * The object type, which is always `file`.
   */
  object?: 'file';

  /**
   * The intended purpose of the file. Supported values are `batch`, and
   * `batch_output`.
   */
  purpose?: 'batch' | 'batch_output';
}

export interface FileCreateParams {
  /**
   * The File object (not file name) to be uploaded.
   */
  file: Uploadable;

  /**
   * The intended purpose of the uploaded file. Use "batch" for
   * [Batch API](/docs/api-reference#batches).
   */
  purpose: 'batch';
}

export declare namespace Files {
  export {
    type FileCreateResponse as FileCreateResponse,
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileInfoResponse as FileInfoResponse,
    type FileCreateParams as FileCreateParams,
  };
}
