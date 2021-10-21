import React, { useCallback, useEffect, useState } from 'react';
import { isTabKey } from 'utils/keyboardUtils';

const hideFocusClass = '-hide-focus';

const FocusVisibility: React.FC = () => {
  const [isFocusHidden, setFocusHidden] = useState(true);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isFocusHidden) {
      return;
    }

    if (isTabKey(e)) {
      document.body.classList.remove(hideFocusClass);
      setFocusHidden(false);
    }
  }, [isFocusHidden, setFocusHidden]);

  const handleMouseDown = useCallback(() => {
    if (isFocusHidden) {
      return;
    }

    document.body.classList.add(hideFocusClass);
    setFocusHidden(true);
  }, [isFocusHidden, setFocusHidden]);

  useEffect(() => {
    if (isFocusHidden) {
      document.removeEventListener('mousedown', handleMouseDown);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);
    }
  }, [isFocusHidden]);

  useEffect(() => {
    document.body.classList.add(hideFocusClass);
  }, []);

  return null;
};

export default FocusVisibility;
