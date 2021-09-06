import { configureStore, combineReducers } from "@reduxjs/toolkit";
// We'll use redux-logger just as an example of adding another middleware
import logger from "redux-logger";
// import rootReducers from "./rootReducers";

const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batch, and devtools enhancers were composed together

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
