import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

// import {authReducer} from './auth/reducer';
// Root Reducer
// const rootReducer = combineReducers({
//   // authReducer,
// });

/**
 * Store configuration
 */
export const configureStore = () => {
  const middleware = [];
  middleware.push(thunkMiddleware);

  if (__DEV__) {
    const loggerMiddleware = createLogger({collapsed: true});
    middleware.push(loggerMiddleware);
  }

  const composer = compose(applyMiddleware(...middleware));

  const store = createStore(rootReducer, {}, composer);

  return store;
};
// export const configureStore;
export const store = configureStore();

// Redux store type
export type AppState = ReturnType<typeof rootReducer>;
