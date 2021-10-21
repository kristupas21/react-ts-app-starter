import { useContext } from 'react';
import { ReactBusContext } from 'react-bus-ts';
import { Bus } from 'utils/bus';

export default (): Bus => useContext(ReactBusContext);
