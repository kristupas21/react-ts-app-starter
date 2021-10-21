import { KeyboardEvent as ReactKeyboardEvent } from 'react';

type Evt = KeyboardEvent | ReactKeyboardEvent;

type IsKey = (e: Evt) => boolean;

const isKey = (key: string): IsKey => (e: Evt) => e.key === key;

export const TAB_KEY = 'Tab';

export const isTabKey = isKey(TAB_KEY);
