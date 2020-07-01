export interface Todo {
  label: string;
  done: boolean;
}

export enum TodoType {
  BIG = 'BIG',
  SMALL = 'SMALL',
}
