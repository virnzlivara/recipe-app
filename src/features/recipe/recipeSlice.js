import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recipeService from "./recipeService"; 

export const getRecipes = createAsyncThunk(
  "getRecipes",
  async (args, thunkAPI) => { 
    try {
      return await recipeService.getRecipes();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
 
const initialState = {
  data: [],
  selected: null
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setSelectedRecipe(state, action) {  
      return {
        ...state,
        selected: action.payload
      }
    }, 
    clearSelectedRecipe(state, action) { 
      return {
        ...state,
        selected: null
      }
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getRecipes.fulfilled, (state, action) => {  
      return {
        ...state,
        data: action.payload
      }
      
    }) 
  },
});

// export const { 
//   updateSelectedOrderDetails
// } = recipeSlice.actions;

// export default recipeSlice;

export const {
  setSelectedRecipe,
  clearSelectedRecipe
} = recipeSlice.actions;

export default recipeSlice;
