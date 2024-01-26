import { configureStore } from "@reduxjs/toolkit";
import recipeSlice, { IRecipe } from "../features/recipe/recipeSlice";
import specialSlice from "../features/specials/specialSlice";
 
export interface IStore {
  recipe: IRecipe,
  special: any
}
export const store  = configureStore({
  reducer: {
    recipe: recipeSlice.reducer,
    special: specialSlice.reducer,
  }
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch