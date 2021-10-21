import { ReactComponent as Checkbox } from 'assets/icons/checkbox.svg';
import { ReactComponent as CheckboxBlank } from 'assets/icons/checkbox-blank.svg';
import { IconId, ISvgIcon } from './types';

const ICON_MAP: Record<IconId, ISvgIcon> = {
  [IconId.CheckboxBlank]: CheckboxBlank,
  [IconId.Checkbox]: Checkbox,
};

export default ICON_MAP;
