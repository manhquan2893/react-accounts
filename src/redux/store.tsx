import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from "redux-saga";
import AuthReducer from './reducers/auth'
import rootSaga from './sagas/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  auth: AuthReducer,
})

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    // @ts-ignore
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    ),
  )
  sagaMiddleware.run(rootSaga);
  return store
}

export default configureStore;