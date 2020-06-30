export interface NgApimock {
  name: string;
  isArray: boolean;
  request: MockRequest;
  responses: MockResponses<any>;
}

export interface MockRequest {
  url: string;
  method: MethodType;
  headers?: { [key: string]: string | boolean };
  body?: { [key: string]: string | boolean };
}

export interface MockResponse<T> {
  status: HttpStatusCode;
  data?: T;
  file?: string;
  headers?: { [key: string]: string | boolean };
  statusText?: string;
  default?: boolean;
  delay?: number;
}

export interface MockResponses<T> {
  [key: string]: MockResponse<T>;
}

export enum MethodType {
  Get = 'GET',
  Post = 'POST',
  Patch = 'PATCH',
  Put = 'PUT',
  Delete = 'DELETE',
  Options = 'OPTIONS',
}

export enum HttpStatusCode {
  Continue = 100,
  SwitchingProtocols = 101,
  Ok = 200,
  Created = 201,
  Accepted = 202,
  NonAuthorativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NotModified = 304,
  UseProxy = 305,
  TemporaryRedirect = 307,
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  RequestEntityTooLarge = 413,
  RequestUriTooLong = 414,
  UnsupportedMediaType = 415,
  RequestedRangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  UnprocessableEntity = 422,
  TooManyRequests = 429,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HttpVersionNotSupported = 505,
}
