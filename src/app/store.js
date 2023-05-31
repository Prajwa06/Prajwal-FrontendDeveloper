import { configureStore } from '@reduxjs/toolkit';
import capsuleReducer from '../features/capsuleSlice'

export const store = configureStore({
  reducer: {
    place:capsuleReducer,
  },
});