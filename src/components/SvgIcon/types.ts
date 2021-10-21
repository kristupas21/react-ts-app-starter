import { FunctionComponent, SVGProps } from 'react';

export enum IconId {
  Checkbox = 'checkbox',
  CheckboxBlank = 'checkbox-blank',
}

export type ISvgIcon = FunctionComponent<SVGProps<SVGSVGElement>>;
