import { connectRouter } from 'connected-react-router';
import history from 'state/history';

const routerReducer = connectRouter(history);

export default routerReducer;
