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
// Look at the type field of the action object to see how it should respond
// Update its state immutably, by making copies of the parts of the state that need to change and only modifying those copie
    setSelectedRecipe(state, action: IPayloadAction<IREcipeData>) {  
      return {
        ...state,
        selected: action.payload
      }
    }, 
    clearSelectedRecipe(state) { 
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
    .addCase(getRecipes.rejected, (state) => {  
     
      return {
        ...state
      }
      
    })
    .addCase(getRecipes.pending, (state) => {  
     
      return {
        ...state
      }
      
    })
  },
});
  

export const {
  setSelectedRecipe,
  clearSelectedRecipe
} = recipeSlice.actions;
 
export default recipeSlice;
