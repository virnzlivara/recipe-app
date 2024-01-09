import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recipeService from "./recipeService"; 
import { RootState } from "../../app/store";
import { IPayloadAction } from "../common/IPayloadAction";

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

export interface IRecipe {
  data : IREcipeData[],
  selected: any
}

export interface IREcipeData {
  uuid: string,
  title: string,
  description: string,
  images: IImages,

}

interface IImages {
  full: string,
  medium: string,
  small: string
}
 
const initialState : IRecipe = {
  data: [],
  selected: null
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    
    setSelectedRecipe(state, action: IPayloadAction<IREcipeData>) {  
      debugger
      return {
        ...state,
        selected: action.payload
      }
    }, 
    clearSelectedRecipe(state, action: IPayloadAction<IREcipeData>) { 
      return {
        ...state,
        selected: null
      }
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getRecipes.fulfilled, (state, action) => {  
      debugger
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


export const selectRecipe = (state: RootState) => state.recipe
export default recipeSlice;
