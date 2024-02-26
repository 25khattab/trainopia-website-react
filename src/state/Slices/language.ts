import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: { arabic: true },
  reducers: {
    toggleLanguage(state) {
      state.arabic = !state.arabic;
    },
  },
});
export const { toggleLanguage } = languageSlice.actions; //exported to be dispatched
export default languageSlice.reducer; //exported to be add to the store
