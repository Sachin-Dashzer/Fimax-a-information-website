import { createSlice } from '@reduxjs/toolkit'

export const homepageslice = createSlice({
  name: 'Homepage',
  initialState : {
    url : {},
    genre : {}
  },

  
  reducers: {

    getApiConfiguration : (state , action)=>{
        state.url = action.payload;
    },
    getGenre : (state , action)=>{
        state.genre = action.payload;
    }

  },
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration , getGenre } = homepageslice.actions

export default homepageslice.reducer