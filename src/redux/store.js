import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleslice"
import scategoriesReducer from "../features/scategorieslice"
import categoriesReducer from "../features/categorieslice"
import cartSliceReducer from "../features/cartSlice"
const store = configureStore({
reducer: {
storearticles:articlesReducer,
storescategories: scategoriesReducer,
storecategories: categoriesReducer,

storecart:cartSliceReducer,

}
})
export default store