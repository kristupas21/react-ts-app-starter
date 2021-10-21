import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { PortalId } from './types';

type Props = {
  id: PortalId;
}

const Portal: React.FC<Props> = (props) => {
  const { id, children } = props;
  const root = useRef<HTMLElement>(null);
  const el = useRef<HTMLElement>(document.createElement('div'));

  useEffect(() => {
    root.current = document.getElementById(id);

    if (!root.current) {
      root.current = document.createElement('div');
      root.current.setAttribute('id', id);
      document.body.appendChild(root.current);
    }

    root.current.appendChild(el.current);

    return () => {
      root.current.removeChild(el.current);
    };
  }, []);

  return createPortal(children, el.current);
};

export default Portal;
