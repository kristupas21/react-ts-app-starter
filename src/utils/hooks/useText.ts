import { MESSAGES } from 'lang';
import { useCallback } from 'react';

type Args = Record<string, string | number>;

export type TextFn = (id: MessageId, args?: Args) => string;

function replaceValues(message: string, prop: string, value: string): string {
  return message.split(`{${prop}}`).join(value);
}

function getText(id: MessageId, args: Args = null, locale = 'en'): string {
  const localeMessages = MESSAGES[locale];

  if (!(id in localeMessages)) {
    console.error(`Message with id "${id}" does not exist in messages.`);
    return id;
  }

  let value = localeMessages[id];

  if (!args) {
    return value;
  }

  Object.entries(args).forEach(([key, v]) => {
    value = replaceValues(value, key, `${v}`);
  });

  return value;
}

const useText = (): TextFn => {
  const locale = 'en';

  return useCallback(
    (id, args = null) => getText(id, args, locale),
    [locale]
  );
};

export default useText;
