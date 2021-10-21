import React, { SVGProps, memo } from 'react';
import { IconId, ISvgIcon } from './types';
import ICON_MAP from './iconMap';

function getIcon(id: IconId): ISvgIcon {
  return ICON_MAP[id];
}

interface Props extends SVGProps<SVGSVGElement>{
  id: IconId;
}

const SvgIcon: React.FC<Props> = (props) => {
  const { id, focusable = 'false', ...svgProps } = props;
  const Component = getIcon(id);

  return (
    <Component {...svgProps} focusable={focusable} />
  );
};

export default memo(SvgIcon);
