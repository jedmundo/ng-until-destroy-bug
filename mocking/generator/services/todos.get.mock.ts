import { Todo } from '@shared/todos';
import { HttpStatusCode, MethodType, MockResponses } from '../ng-apimock.model';
import { createNgApiMockResponses } from '../utils/create-ng-api-mock-responses';

const responses: MockResponses<Todo[]> = {
  default: {
    default: true,
    status: HttpStatusCode.Ok,
    data: [
      { label: 'Do laundry', done: false },
      { label: 'Cook dinner', done: false },
    ],
  },
};

export default createNgApiMockResponses(
  'todos',
  MethodType.Get,
  'getTodos',
  responses
);
