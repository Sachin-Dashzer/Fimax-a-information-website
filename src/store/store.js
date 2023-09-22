import { configureStore } from '@reduxjs/toolkit'
import homepageslice  from './homepageslice'

export const store = configureStore({
  reducer: {
    homepage: homepageslice,
  },
})

