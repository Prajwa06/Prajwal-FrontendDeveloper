import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  capsule:{
    capsule_serial:0,
  },
};

export const capsuleSlice = createSlice({
  name: 'capsule',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addcapsule: (state ,action) => {
     state.capsule=action.payload;
    },
    removecapsule: (state) => {
      state.capsule={capsule_serial:0};
    },
   
  },
 
});

export const { addcapsule,removecapsule } = capsuleSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.capsule.value)`
export const selectcapsule = (state) => state.place.capsule;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default capsuleSlice.reducer;
