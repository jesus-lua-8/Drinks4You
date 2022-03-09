import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//This header contains the host and key to have access to the API database
const cocktailsApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_COCKTAILS_HOST,
    'x-rapidapi-key': process.env.REACT_APP_COCKTAILS_KEY
}

const createRequest = (url) => ({ url, headers: cocktailsApiHeaders})

/**
 * Using createApi from reduxjs toolkit in in order to have access to the endpoints of the API service
 * coming from radpidAPI.com
 * with reducer path which is used for creating our store, baseQuery: for fatching data from the base url,
 * and finally we include the endpoints from were we want the data.
 */
export const cocktailsApi = createApi({
    reducerPath: 'cocktailsApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_COCKTAILS_API_URL}),
    endpoints: (builder) => ({
        getCocktail: builder.query({
            query: () => createRequest('/popular.php'),
        })
    })
})


//In order to export the endpoint correctly, we need to add the "use" + endpoint + "query"
//Then we use camel case
export const  { 
    useGetCocktailQuery, 
} = cocktailsApi;