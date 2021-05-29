import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Import Reducers
import { rootReducer } from '../reducers/rootReducer';

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;

const composeEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function generateStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
}
export type RootStore = ReturnType<typeof rootReducer>;
