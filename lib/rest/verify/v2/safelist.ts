/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to create a SafelistInstance
 */
export interface SafelistListInstanceCreateOptions {
  /** The phone number to be added in SafeList. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164). */
  phoneNumber: string;
}

export interface SafelistContext {
  /**
   * Remove a SafelistInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a SafelistInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SafelistInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SafelistInstance) => any
  ): Promise<SafelistInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SafelistContextSolution {
  phoneNumber: string;
}

export class SafelistContextImpl implements SafelistContext {
  protected _solution: SafelistContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, phoneNumber: string) {
    if (!isValidPathParam(phoneNumber)) {
      throw new Error("Parameter 'phoneNumber' is not valid.");
    }

    this._solution = { phoneNumber };
    this._uri = `/SafeList/Numbers/${phoneNumber}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: SafelistInstance) => any
  ): Promise<SafelistInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SafelistInstance(
          operationVersion,
          payload,
          instance._solution.phoneNumber
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface SafelistPayload extends SafelistResource {}

interface SafelistResource {
  sid: string;
  phone_number: string;
  url: string;
}

export class SafelistInstance {
  protected _solution: SafelistContextSolution;
  protected _context?: SafelistContext;

  constructor(
    protected _version: V2,
    payload: SafelistResource,
    phoneNumber?: string
  ) {
    this.sid = payload.sid;
    this.phoneNumber = payload.phone_number;
    this.url = payload.url;

    this._solution = { phoneNumber: phoneNumber || this.phoneNumber };
  }

  /**
   * The unique string that we created to identify the SafeList resource.
   */
  sid: string;
  /**
   * The phone number in SafeList.
   */
  phoneNumber: string;
  /**
   * The absolute URL of the SafeList resource.
   */
  url: string;

  private get _proxy(): SafelistContext {
    this._context =
      this._context ||
      new SafelistContextImpl(this._version, this._solution.phoneNumber);
    return this._context;
  }

  /**
   * Remove a SafelistInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a SafelistInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SafelistInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SafelistInstance) => any
  ): Promise<SafelistInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      phoneNumber: this.phoneNumber,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SafelistSolution {}

export interface SafelistListInstance {
  _version: V2;
  _solution: SafelistSolution;
  _uri: string;

  (phoneNumber: string): SafelistContext;
  get(phoneNumber: string): SafelistContext;

  /**
   * Create a SafelistInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SafelistInstance
   */
  create(
    params: SafelistListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SafelistInstance) => any
  ): Promise<SafelistInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SafelistListInstance(version: V2): SafelistListInstance {
  const instance = ((phoneNumber) =>
    instance.get(phoneNumber)) as SafelistListInstance;

  instance.get = function get(phoneNumber): SafelistContext {
    return new SafelistContextImpl(version, phoneNumber);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/SafeList/Numbers`;

  instance.create = function create(
    params: SafelistListInstanceCreateOptions,
    callback?: (error: Error | null, items: SafelistInstance) => any
  ): Promise<SafelistInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["phoneNumber"] === null || params["phoneNumber"] === undefined) {
      throw new Error("Required parameter \"params['phoneNumber']\" missing.");
    }

    let data: any = {};

    data["PhoneNumber"] = params["phoneNumber"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new SafelistInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}
