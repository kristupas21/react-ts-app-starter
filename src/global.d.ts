declare global {
  type ValueOf<T> = T[keyof T];

  type Timeout = ReturnType<typeof setTimeout>;

  type State = ReturnType<typeof import('state/store').getState>;

  type Primitive = boolean | string | number;

  type StateGetter<R> = (s: State) => R;

  type MessageId = keyof typeof import('lang/en.json');
}

export {};
