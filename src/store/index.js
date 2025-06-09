import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/auth/auth";
import { rtkQueryErrorLogger } from "./error-middleware/error-middleware";
import userReducer from "../features/user/user.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [],
        // Ignore these paths in the state
        ignoredPaths: [],
      },
    }).concat(authApi.middleware, rtkQueryErrorLogger),
});

setupListeners(store.dispatch);
