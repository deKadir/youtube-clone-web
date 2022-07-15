import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'redux/reducers';
export default function configureStore(preloadedState) {
  function saveToLocalStorage(state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('youtube_clone', serializedState);
    } catch (e) {
      console.log(e);
    }
  }

  function loadFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem('youtube_clone');
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }
  const persistedState = loadFromLocalStorage();

  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  // const reduxTool =
  //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__();

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(reducer, persistedState, composedEnhancers);
  store.subscribe(() => saveToLocalStorage(store.getState()));

  return store;
}
