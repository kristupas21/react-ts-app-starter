import React, { ComponentType, Ref, forwardRef } from 'react';

function withForwardRef<P>(Component: ComponentType<P>) {
  return forwardRef(
    (props: P, ref: Ref<any>) => (
      <Component {...props} innerRef={ref} />
    )
  );
}

export default withForwardRef;
