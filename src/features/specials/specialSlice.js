import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import specialService from "./specialService"; 

export const getSpecials = createAsyncThunk(
  "getSpecials",
  async (args, thunkAPI) => { 
    try {
      return await specialService.getSpecials();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
 
const initialState = {
  data: []
};

export const specialSlice = createSlice({
  name: "special",
  initialState,
  reducers: { 

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getSpecials.fulfilled, (state, action) => {  
      return {
        ...state,
        data: action.payload
      }
      
    }) 
  },
}); 

// export const {
//   setSelectedpecial,
//   clearSelectedspecial
// } = specialSlice.actions;

export default specialSlice;
