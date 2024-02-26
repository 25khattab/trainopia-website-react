import { configureStore, combineReducers } from '@reduxjs/toolkit';
import toggleLanguage from './Slices/language';

const rootReducer = combineReducers({
  language: toggleLanguage,
});
const store = configureStore({
  reducer: rootReducer,
});
//to add it in the app.tsx in the provider tag
export default store;
//to use it with useSelector
export type RootState = ReturnType<typeof rootReducer>;
//to use in the hooks file  Define the return type of the dispatch function
export type AppDispatch = typeof store.dispatch;
