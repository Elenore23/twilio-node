/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Pricing
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

export class PricingV2TrunkingCountryInstanceTerminatingPrefixPrices {
  "originationPrefixes"?: Array<string>;
  "destinationPrefixes"?: Array<string>;
  "basePrice"?: number;
  "currentPrice"?: number;
  "friendlyName"?: string;
}

/**
 * The [OriginatingCallPrice](https://www.twilio.com/docs/voice/pricing#inbound-call-price) record.
 */
export class PricingV2TrunkingNumberOriginatingCallPrice {
  "basePrice"?: number;
  "currentPrice"?: number;
  "numberType"?: string;
}

/**
 * Options to pass to fetch a NumberInstance
 */
export interface NumberContextFetchOptions {
  /** The origination phone number, in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, for which to fetch the origin-based voice pricing information. E.164 format consists of a + followed by the country code and subscriber number. */
  originationNumber?: string;
}

export interface NumberContext {
  /**
   * Fetch a NumberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NumberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: NumberInstance) => any
  ): Promise<NumberInstance>;
  /**
   * Fetch a NumberInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NumberInstance
   */
  fetch(
    params: NumberContextFetchOptions,
    callback?: (error: Error | null, item?: NumberInstance) => any
  ): Promise<NumberInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NumberContextSolution {
  destinationNumber: string;
}

export class NumberContextImpl implements NumberContext {
  protected _solution: NumberContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, destinationNumber: string) {
    if (!isValidPathParam(destinationNumber)) {
      throw new Error("Parameter 'destinationNumber' is not valid.");
    }

    this._solution = { destinationNumber };
    this._uri = `/Trunking/Numbers/${destinationNumber}`;
  }

  fetch(
    params?:
      | NumberContextFetchOptions
      | ((error: Error | null, item?: NumberInstance) => any),
    callback?: (error: Error | null, item?: NumberInstance) => any
  ): Promise<NumberInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["originationNumber"] !== undefined)
      data["OriginationNumber"] = params["originationNumber"];

    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new NumberInstance(
          operationVersion,
          payload,
          instance._solution.destinationNumber
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

interface NumberPayload extends NumberResource {}

interface NumberResource {
  destination_number: string;
  origination_number: string;
  country: string;
  iso_country: string;
  terminating_prefix_prices: Array<PricingV2TrunkingCountryInstanceTerminatingPrefixPrices>;
  originating_call_price: PricingV2TrunkingNumberOriginatingCallPrice;
  price_unit: string;
  url: string;
}

export class NumberInstance {
  protected _solution: NumberContextSolution;
  protected _context?: NumberContext;

  constructor(
    protected _version: V2,
    payload: NumberResource,
    destinationNumber?: string
  ) {
    this.destinationNumber = payload.destination_number;
    this.originationNumber = payload.origination_number;
    this.country = payload.country;
    this.isoCountry = payload.iso_country;
    this.terminatingPrefixPrices = payload.terminating_prefix_prices;
    this.originatingCallPrice = payload.originating_call_price;
    this.priceUnit = payload.price_unit;
    this.url = payload.url;

    this._solution = {
      destinationNumber: destinationNumber || this.destinationNumber,
    };
  }

  /**
   * The destination phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
   */
  destinationNumber: string;
  /**
   * The origination phone number in [[E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
   */
  originationNumber: string;
  /**
   * The name of the country.
   */
  country: string;
  /**
   * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   */
  isoCountry: string;
  terminatingPrefixPrices: Array<PricingV2TrunkingCountryInstanceTerminatingPrefixPrices>;
  originatingCallPrice: PricingV2TrunkingNumberOriginatingCallPrice;
  /**
   * The currency in which prices are measured, specified in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
   */
  priceUnit: string;
  /**
   * The absolute URL of the resource.
   */
  url: string;

  private get _proxy(): NumberContext {
    this._context =
      this._context ||
      new NumberContextImpl(this._version, this._solution.destinationNumber);
    return this._context;
  }

  /**
   * Fetch a NumberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NumberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: NumberInstance) => any
  ): Promise<NumberInstance>;
  /**
   * Fetch a NumberInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NumberInstance
   */
  fetch(
    params: NumberContextFetchOptions,
    callback?: (error: Error | null, item?: NumberInstance) => any
  ): Promise<NumberInstance>;

  fetch(
    params?: any,
    callback?: (error: Error | null, item?: NumberInstance) => any
  ): Promise<NumberInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      destinationNumber: this.destinationNumber,
      originationNumber: this.originationNumber,
      country: this.country,
      isoCountry: this.isoCountry,
      terminatingPrefixPrices: this.terminatingPrefixPrices,
      originatingCallPrice: this.originatingCallPrice,
      priceUnit: this.priceUnit,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface NumberSolution {}

export interface NumberListInstance {
  _version: V2;
  _solution: NumberSolution;
  _uri: string;

  (destinationNumber: string): NumberContext;
  get(destinationNumber: string): NumberContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function NumberListInstance(version: V2): NumberListInstance {
  const instance = ((destinationNumber) =>
    instance.get(destinationNumber)) as NumberListInstance;

  instance.get = function get(destinationNumber): NumberContext {
    return new NumberContextImpl(version, destinationNumber);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
