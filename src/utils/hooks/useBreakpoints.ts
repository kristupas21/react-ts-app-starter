import { useContext } from 'react';
import BreakpointsContext, { BreakpointsContextProps } from 'context/Breakpoints';

export default (): BreakpointsContextProps => useContext(BreakpointsContext);
