import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "../features/recipe/recipeSlice";
import specialSlice from "../features/specials/specialSlice";
 

export const store = configureStore({
  reducer: {
    recipe: recipeSlice.reducer,
    special: specialSlice.reducer
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     immutableCheck: false,
  //     serializableCheck: false,
  //   }),
  // middleware: [thunk, logger],
});
