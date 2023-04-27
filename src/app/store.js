import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from '../features/countries/countiresSlice';
import favouritesSlice from '../features/countries/favouritesSlice';

export default configureStore({
  reducer: {
    countries: countriesSlice,
    favourites: favouritesSlice
  },
});