import { NgApimock, MethodType, MockResponses, HttpStatusCode } from '../ng-apimock.model';

export function createNgApiMockResponses<T>(
  expression: string,
  method: MethodType,
  name: string,
  responses: MockResponses<T>,
  body?: { [key: string]: string | boolean },
): NgApimock {
  const firstResponseKey = Object.keys(responses)[0];

  return {
    name,
    request: {
      url: expression,
      method,
      body,
    },
    isArray: Array.isArray(responses[firstResponseKey].data),
    responses: {
      ...responses,
      ...defaultResponses,
    },
  };
}

const defaultResponses = {
  notFound: {
    status: HttpStatusCode.NotFound,
  },

  serverError: {
    status: HttpStatusCode.InternalServerError,
  },

  unauthorized: {
    status: HttpStatusCode.Unauthorized,
  },

  badRequest: {
    status: HttpStatusCode.BadRequest,
  },
};
