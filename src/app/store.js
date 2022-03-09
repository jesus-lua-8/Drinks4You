import { configureStore } from '@reduxjs/toolkit';
import { cocktailsApi } from '../services/cocktailsApi';
import { recipesApi  } from '../services/recipesApi';


/**
 * This export function will represent our store which will be used
 * to supply the application with data.
 * With reducer allowing us to grab the api path.
 * 
 * Middleware provides a third-party extension point between 
 * dispatching an action, and the moment it reaches the reducer.
 */
export default configureStore({
    reducer: {
        [cocktailsApi.reducerPath] : cocktailsApi.reducer,
        [recipesApi.reducerPath] : recipesApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(cocktailsApi.middleware)
});