import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  theme: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    changeTheme: state => {
      state.theme = !state.theme;
    },
  },
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
