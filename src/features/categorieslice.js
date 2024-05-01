import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {fetchcategories,} from
"../services/categories/categorieservice"
export const getcategories = createAsyncThunk(
"categorie/getcategorie",
async (_, thunkAPI) => {
const { rejectWithValue } = thunkAPI;
try {
const res = await fetchcategories();
return res.data;
}
catch (error) {
return rejectWithValue(error.message);
}
}
);
export const categorieSlice = createSlice({
    name: 'categorie',
    initialState:{
    categories:[],
    categorie:{},
    isLoading: false,
    success:null,
    error:null,
    },
    
    extraReducers: (builder) => {
    //get articles
    builder
    .addCase(getcategories.pending, (state, action) => {
    state.isLoading=true;
    state.error=null;
    })
    .addCase(getcategories.fulfilled, (state, action) => {
    state.isLoading=false;
    state.error = null;
    state.categories=action.payload;
    })
    .addCase(getcategories.rejected, (state, action) => {
    state.isLoading=false;
    state.error=action.payload;
    console.log("impossible de se connecter au serveur")
    })
   
        }
        }
        )
export default categorieSlice.reducer;