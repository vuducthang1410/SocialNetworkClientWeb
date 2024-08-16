import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./RootSage";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: reducer,
  middleware: (gdmw) => gdmw().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;
