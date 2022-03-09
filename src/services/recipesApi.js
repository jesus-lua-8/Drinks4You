import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//This header contains the host and key to have access to the API database
const recipeApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_RECIPES_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RECIPES_KEY
}

const createRequest = (url) => ({ url, headers: recipeApiHeaders})

/**
 * Using createApi from reduxjs toolkit in in order to have access to the endpoints of the API service
 * coming from radpidAPI.com
 * with reducer path which is used for creating our store, baseQuery: for fatching data from the base url,
 * and finally we include the endpoints from were we want the data.
 */
export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_RECIPES_API_URL}),
    endpoints: (builder) => ({
        getRecipeList: builder.query({
            query: (count) => createRequest(`/recipes/list?size=${count}`),
        })
    }) 
})

//In order to export the endpoint correctly, we need to add the "use" + endpoint + "query"
//Then we use camel case
export const  { 
    useGetRecipeListQuery, 
} = recipesApi;